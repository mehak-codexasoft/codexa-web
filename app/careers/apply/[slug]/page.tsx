import { Metadata } from "next";
import { notFound } from "next/navigation";
import { openPositions, getPositionBySlug } from "@/lib/data";
import ApplyForm from "./ApplyForm";

export async function generateStaticParams() {
  return openPositions.map((position) => ({
    slug: position.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const position = getPositionBySlug(params.slug);
  if (!position) return { title: "Position Not Found" };

  return {
    title: `Apply - ${position.title}`,
    description: `Apply for the ${position.title} position at CodexaSoft. ${position.description}`,
  };
}

export default function ApplyPage({ params }: { params: { slug: string } }) {
  const position = getPositionBySlug(params.slug);
  if (!position) notFound();

  return <ApplyForm position={position} />;
}
