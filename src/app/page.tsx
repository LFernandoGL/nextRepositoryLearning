// import { Header } from "@/components/Header/Index";

import { PostFeatured } from "@/components/PostFeatured/Index";
import { PostList } from "@/components/PostList/Index";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
   return (
      <>
         <Suspense fallback={<SpinLoader className="min-h-8 mb-16" />}>
            <PostFeatured />
            <PostList />
         </Suspense>
      </>
   );
}
