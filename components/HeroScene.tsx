"use client";

import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function project(point: Point3D, w: number, h: number, fov: number): { x: number; y: number; scale: number } {
  const factor = fov / (fov + point.z);
  return {
    x: point.x * factor + w / 2,
    y: point.y * factor + h / 2,
    scale: factor,
  };
}

function rotateY(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos - point.z * sin,
    y: point.y,
    z: point.x * sin + point.z * cos,
  };
}

function rotateX(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoRadius = 160;
    const rawVerts: Point3D[] = [
      { x: 0, y: 1, z: phi }, { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: -phi }, { x: 0, y: -1, z: -phi },
      { x: 1, y: phi, z: 0 }, { x: -1, y: phi, z: 0 },
      { x: 1, y: -phi, z: 0 }, { x: -1, y: -phi, z: 0 },
      { x: phi, y: 0, z: 1 }, { x: -phi, y: 0, z: 1 },
      { x: phi, y: 0, z: -1 }, { x: -phi, y: 0, z: -1 },
    ];
    const len = Math.sqrt(1 + phi * phi);
    const icoVertices = rawVerts.map((v) => ({
      x: (v.x / len) * icoRadius,
      y: (v.y / len) * icoRadius,
      z: (v.z / len) * icoRadius,
    }));

    const icoEdges: [number, number][] = [
      [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
      [1, 6], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
      [3, 6], [3, 7], [3, 10], [3, 11],
      [4, 5], [4, 8], [4, 10],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 9], [7, 11],
      [8, 10], [9, 11],
    ];

    // Orbit ring points
    const ringCount = 3;
    const rings: { radius: number; speed: number; tiltX: number; tiltY: number; color: string }[] = [
      { radius: 200, speed: 0.3, tiltX: 0.8, tiltY: 0, color: "rgba(20,184,166,0.3)" },
      { radius: 230, speed: -0.2, tiltX: 0.3, tiltY: 0.5, color: "rgba(34,211,238,0.25)" },
      { radius: 260, speed: 0.15, tiltX: -0.5, tiltY: 0.3, color: "rgba(45,212,191,0.2)" },
    ];

    // Particles
    const particles: { x: number; y: number; z: number; size: number; speed: number }[] = [];
    for (let i = 0; i < 150; i++) {
      const r = 200 + Math.random() * 250;
      const theta = Math.random() * Math.PI * 2;
      const phiP = Math.acos(2 * Math.random() - 1);
      particles.push({
        x: r * Math.sin(phiP) * Math.cos(theta),
        y: r * Math.sin(phiP) * Math.sin(theta),
        z: r * Math.cos(phiP),
        size: 0.5 + Math.random() * 1.5,
        speed: 0.1 + Math.random() * 0.3,
      });
    }

    // Small octahedrons
    const octahedrons: { center: Point3D; size: number; speed: number; offset: number }[] = [];
    for (let i = 0; i < 8; i++) {
      const r = 180 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phiP = Math.acos(2 * Math.random() - 1);
      octahedrons.push({
        center: {
          x: r * Math.sin(phiP) * Math.cos(theta),
          y: r * Math.sin(phiP) * Math.sin(theta),
          z: r * Math.cos(phiP),
        },
        size: 8 + Math.random() * 12,
        speed: 0.5 + Math.random() * 1,
        offset: Math.random() * Math.PI * 2,
      });
    }

    const fov = 500;
    const dpr = window.devicePixelRatio || 1;

    function draw(time: number) {
      const t = time * 0.001;
      const cw = w / dpr;
      const ch = h / dpr;

      ctx!.clearRect(0, 0, cw, ch);

      // Central glow
      const glowGrad = ctx!.createRadialGradient(cw / 2, ch / 2, 0, cw / 2, ch / 2, 200);
      glowGrad.addColorStop(0, "rgba(20,184,166,0.08)");
      glowGrad.addColorStop(0.5, "rgba(20,184,166,0.03)");
      glowGrad.addColorStop(1, "rgba(20,184,166,0)");
      ctx!.fillStyle = glowGrad;
      ctx!.fillRect(0, 0, cw, ch);

      // Draw icosahedron wireframe
      const rotAngleY = t * 0.2;
      const rotAngleX = Math.sin(t * 0.15) * 0.3;
      const breathe = 1 + Math.sin(t * 0.5) * 0.05;

      const projectedVerts = icoVertices.map((v) => {
        let p = { x: v.x * breathe, y: v.y * breathe, z: v.z * breathe };
        p = rotateY(p, rotAngleY);
        p = rotateX(p, rotAngleX);
        return project(p, cw, ch, fov);
      });

      // Edges
      for (const [a, b] of icoEdges) {
        const pa = projectedVerts[a];
        const pb = projectedVerts[b];
        const alpha = (pa.scale + pb.scale) / 2;
        ctx!.beginPath();
        ctx!.moveTo(pa.x, pa.y);
        ctx!.lineTo(pb.x, pb.y);
        ctx!.strokeStyle = `rgba(20,184,166,${0.15 * alpha})`;
        ctx!.lineWidth = 1 * alpha;
        ctx!.stroke();
      }

      // Vertices glow
      for (const pv of projectedVerts) {
        ctx!.beginPath();
        ctx!.arc(pv.x, pv.y, 2.5 * pv.scale, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(45,212,191,${0.6 * pv.scale})`;
        ctx!.fill();

        // Small glow around vertex
        const vGlow = ctx!.createRadialGradient(pv.x, pv.y, 0, pv.x, pv.y, 8 * pv.scale);
        vGlow.addColorStop(0, `rgba(20,184,166,${0.3 * pv.scale})`);
        vGlow.addColorStop(1, "rgba(20,184,166,0)");
        ctx!.fillStyle = vGlow;
        ctx!.fillRect(pv.x - 10, pv.y - 10, 20, 20);
      }

      // Draw orbit rings
      for (const ring of rings) {
        ctx!.beginPath();
        const segments = 80;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          let p: Point3D = {
            x: Math.cos(angle) * ring.radius,
            y: 0,
            z: Math.sin(angle) * ring.radius,
          };
          p = rotateX(p, ring.tiltX);
          p = rotateY(p, t * ring.speed + ring.tiltY);
          const proj = project(p, cw, ch, fov);
          if (i === 0) ctx!.moveTo(proj.x, proj.y);
          else ctx!.lineTo(proj.x, proj.y);
        }
        ctx!.strokeStyle = ring.color;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // Draw particles
      for (const p of particles) {
        let point: Point3D = { x: p.x, y: p.y, z: p.z };
        point = rotateY(point, t * p.speed * 0.1);
        point.y += Math.sin(t * 0.5 + p.x) * 5;
        const proj = project(point, cw, ch, fov);
        const alpha = proj.scale * (0.3 + Math.sin(t + p.x) * 0.2);
        ctx!.beginPath();
        ctx!.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(45,212,191,${Math.max(0, alpha)})`;
        ctx!.fill();
      }

      // Draw small octahedrons
      for (const oct of octahedrons) {
        const floatY = Math.sin(t * 0.7 + oct.offset) * 15;
        let center = { x: oct.center.x, y: oct.center.y + floatY, z: oct.center.z };
        center = rotateY(center, t * 0.1);

        const s = oct.size;
        const octVerts: Point3D[] = [
          { x: center.x, y: center.y - s, z: center.z }, // top
          { x: center.x, y: center.y + s, z: center.z }, // bottom
          { x: center.x + s, y: center.y, z: center.z }, // right
          { x: center.x - s, y: center.y, z: center.z }, // left
          { x: center.x, y: center.y, z: center.z + s }, // front
          { x: center.x, y: center.y, z: center.z - s }, // back
        ];

        // Rotate locally
        const localAngle = t * oct.speed + oct.offset;
        const rotated = octVerts.map((v) => {
          const rel = { x: v.x - center.x, y: v.y - center.y, z: v.z - center.z };
          const r = rotateY(rel, localAngle);
          return { x: r.x + center.x, y: r.y + center.y, z: r.z + center.z };
        });

        const projected = rotated.map((v) => project(v, cw, ch, fov));

        const octEdges: [number, number][] = [
          [0, 2], [0, 3], [0, 4], [0, 5],
          [1, 2], [1, 3], [1, 4], [1, 5],
          [2, 4], [4, 3], [3, 5], [5, 2],
        ];

        for (const [a, b] of octEdges) {
          const pa = projected[a];
          const pb = projected[b];
          ctx!.beginPath();
          ctx!.moveTo(pa.x, pa.y);
          ctx!.lineTo(pb.x, pb.y);
          ctx!.strokeStyle = `rgba(34,211,238,${0.3 * pa.scale})`;
          ctx!.lineWidth = 0.8 * pa.scale;
          ctx!.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
