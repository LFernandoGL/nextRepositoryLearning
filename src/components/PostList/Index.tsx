import { postRepository } from "@/repositories/post/Index";
import { PostCoverImage } from "../PostCoverImage/Index";
import { PostHeading } from "../PostHeading/Index";

export async function PostList() {
   const posts = await postRepository.findAll();
   return (
      <div className="grid grid-cols-1">
         {posts.map((post) => {
            return (
               <div className="mb-8 flex flex-col" key={post.id}>
                  <PostCoverImage
                     imageProps={{
                        src: post.coverImageUrl,
                        width: 1200,
                        height: 720,
                        alt: "imagemgsvagjhd",
                        className: "mb-8",
                     }}
                     linkProps={{ href: `/post/${post.slug}` }}
                     key={post.id}
                  />

                  <PostHeading url={post.coverImageUrl} as="h2">
                     {post.title}
                  </PostHeading>
               </div>
            );
         })}
      </div>
   );
}
