import { findPostBySlugCached } from "@/lib/posts/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { title } from "process";

type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export async function generateMetadata({
   params,
}: PostSlugPageProps): Promise<Metadata> {
   const { slug } = await params;
   const post = await findPostBySlugCached(slug);
   return {
      title: post.title,
      description: post.excerpt,
   };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   const post = await findPostBySlugCached(slug);
   return <h1 className="text-3xl font-extrabold">{post.content}</h1>;
}
