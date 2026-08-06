import { postRepository } from "@/repositories/post/Index";
import { PostCoverImage } from "../PostCoverImage/Index";
import { PostHeading } from "../PostHeading/Index";

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

                  <div className="flex flex-col gap-4 justify-center">
                     <time
                        className="text-slate-600 text-sm/tight block mt-8"
                        dateTime={post.createdAt}
                     >
                        {post.createdAt}
                     </time>

                     <PostHeading url={postLink}>{post.title}</PostHeading>

                     <p>{post.excerpt}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
