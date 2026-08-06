import { PostCoverImage } from "../PostCoverImage/Index";
import { PostHeading } from "../PostHeading/Index";

export function Postfeatured() {
   const slug = "sjahfkajsh";
   const postLink = `/post/${slug}`;
   return (
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
         <PostCoverImage
            linkProps={{ href: postLink }}
            imageProps={{
               src: "/images/bryen_5.png",
               alt: "imagem da minha pagina",
               width: 1200,
               height: 720,
               priority: true,
            }}
         />

         <div className="flex flex-col gap-4 justify-center">
            <time
               className="text-slate-600 text-sm/tight block"
               dateTime="2026-08-05"
            >
               05/08/2026 15:00
            </time>

            <PostHeading url={postLink} as="h1">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </PostHeading>

            <p>
               VENDE O MONITOR PRO GABRIEL POR 250 NO PIX HOJE
               kkkkkkkkkkkkkkkkkkkkkkk, NAOOOOOOOOOOOOOOOOOOOOOO
            </p>
         </div>
      </section>
   );
}
