// import { Header } from "@/components/Header/Index";
import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header/Index";
import { PostCoverImage } from "@/components/PostCoverImage/Index";
import { Postfeatured } from "@/components/PostFeatured/Index";
import { PostHeading } from "@/components/PostHeading/Index";
import { PostList } from "@/components/PostList/Index";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
   return (
      <Container>
         <Header />

         <Suspense fallback={<SpinLoader />}>
            <Postfeatured />
         </Suspense>

         <Suspense fallback={<SpinLoader />}>
            <PostList />
         </Suspense>

         <footer>
            <h3 className="text-4xl py-8 text-center">FOOTER</h3>
         </footer>
      </Container>
   );
}
