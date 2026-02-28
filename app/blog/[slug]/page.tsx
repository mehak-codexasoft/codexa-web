import { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import BlogPostContent from "./BlogPostContent";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://codexasoft.com/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://codexasoft.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
