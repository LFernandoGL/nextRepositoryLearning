// import { Header } from "@/components/Header/Index";
import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header/Index";
import { PostList } from "@/components/PostList/Index";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
   return (
      <Container>
         <Header />

         <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
               <Image
                  className="group-hover:scale-105 transition"
                  src="/images/bryen_0.png"
                  alt="Titulo do Post"
                  width={1200}
                  height={720}
               />
            </Link>
            <div>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
               delectus maxime enim alias obcaecati eaque aliquam impedit cum
               quasi sit aspernatur eum blanditiis doloribus, distinctio minima,
               repellendus, nemo esse expedita?
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
