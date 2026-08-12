import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
   ROOT_DIR,
   "src",
   "db",
   "seed",
   "posts.json",
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
   private async simulateWait() {
      if (SIMULATE_WAIT_IN_MS <= 0) return;

      await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
   }

   private async readFromDisk(): Promise<PostModel[]> {
      const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
      const parsedJson = JSON.parse(jsonContent);
      const { posts } = parsedJson;
      return posts;
   }

   private async readFromOne(id: string): Promise<PostModel> {
      const posts = await this.readFromDisk();
      const post = posts.find((post) => post.id === id);

      if (!post) {
         throw new Error("Post nao encontrado");
      }
      return post;
   }

   async findAllPublic(): Promise<PostModel[]> {
      await this.simulateWait();
      const posts = await this.readFromDisk();
      return posts.filter((posts) => posts.published);
   }

   async findById(id: string): Promise<PostModel> {
      return await this.readFromOne(id);
   }

   async findBySlug(slug: string): Promise<PostModel> {
      const posts = await this.findAllPublic();
      const post = posts.find((post) => post.slug === slug);
      if (!post) notFound();
      return post;
   }
}
