// import { Header } from "@/components/Header/Index";
import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header/Index";
import { PostCoverImage } from "@/components/PostCoverImage/Index";
import { PostHeading } from "@/components/PostHeading/Index";
import { PostList } from "@/components/PostList/Index";
import { SpinLoader } from "@/components/SpinLoader";

import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
   return (
      <Container>
         <Header />

         <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
               linkProps={{ href: "#" }}
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

               <PostHeading url="#">
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
               </PostHeading>

               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores delectus maxime enim alias obcaecati eaque aliquam
                  impedit cum quasi sit aspernatur eum blanditiis doloribus,
                  distinctio minima, repellendus, nemo esse expedita?
               </p>
            </div>
         </section>
         <Suspense fallback={<SpinLoader />}>
            <PostList />
         </Suspense>

         <footer>
            <h3 className="text-4xl py-8 text-center">FOOTER</h3>
         </footer>
      </Container>
   );
}
