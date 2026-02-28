import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - CodexaSoft Case Study`,
      description: project.description,
      url: `https://codexasoft.com/portfolio/${project.slug}`,
    },
    alternates: {
      canonical: `https://codexasoft.com/portfolio/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <ProjectContent project={project} />;
}
