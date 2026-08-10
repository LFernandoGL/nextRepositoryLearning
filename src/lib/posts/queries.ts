import { postRepository } from "@/repositories/post/Index";
import { cache } from "react";

export const findAllPublicPosts = cache(
   async () => await postRepository.findAllPublic(),
);
