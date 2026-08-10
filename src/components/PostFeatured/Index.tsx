import { PostCoverImage } from "../PostCoverImage/Index";
import { PostSummary } from "../PostSummary/Index";
import { findAllPublicPosts } from "@/lib/posts/queries";

export async function Postfeatured() {
   const posts = await findAllPublicPosts();
   const post = posts[0];
   const postLink = `/post/${post.slug}`;
   return (
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
         <PostCoverImage
            linkProps={{ href: postLink }}
            imageProps={{
               src: post.coverImageUrl,
               alt: post.title,
               width: 1200,
               height: 720,
               priority: true,
            }}
         />

         <PostSummary
            title={post.title}
            excerpt={post.excerpt}
            createdAt={post.createdAt}
            postHeading="h1"
            postLink={postLink}
         />
      </section>
   );
}
