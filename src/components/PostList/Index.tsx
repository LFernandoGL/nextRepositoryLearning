import { postRepository } from "@/repositories/post/Index";
import { PostCoverImage } from "../PostCoverImage/Index";
import { PostSummary } from "../PostSummary/Index";

export async function PostList() {
   const posts = await postRepository.findAll();
   return (
      <div className="grid grid-cols-1 flex-col gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {posts.map((post) => {
            const postLink = `/post/${post.slug}`;
            return (
               <div className="flex flex-col group" key={post.id}>
                  <PostCoverImage
                     imageProps={{
                        src: post.coverImageUrl,
                        width: 1200,
                        height: 720,
                        alt: "imagemgsvagjhd",
                     }}
                     linkProps={{ href: `/post/${post.slug}` }}
                     key={post.id}
                  />

                  <PostSummary
                     postHeading="h2"
                     title={post.title}
                     createdAt={post.createdAt}
                     postLink={postLink}
                     excerpt={post.excerpt}
                  />
               </div>
            );
         })}
      </div>
   );
}
