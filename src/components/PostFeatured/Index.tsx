import { PostCoverImage } from "../PostCoverImage/Index";
import { PostSummary } from "../PostSummary/Index";

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

         <PostSummary
            title="Abacaxi ababouuu de acabaraaaaaaa e eu estou com fome"
            excerpt="VENDE O MONITOR PRO GABRIEL POR 250 NO PIX HOJE kkkkkkkkkkkkkkkkkkkkkkk, NAOOOOOOOOOOOOOOOOOOOOOO"
            createdAt="2025-04-08T00:24:38.616Z"
            postHeading="h1"
            postLink={postLink}
         />
      </section>
   );
}
