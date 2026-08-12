import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/posts/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { title } from "process";
import { Suspense } from "react";

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
   return (
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
         <SinglePost slug={post.slug} />
      </Suspense>
   );
}
