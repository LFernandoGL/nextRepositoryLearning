import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
   ROOT_DIR,
   "src",
   "db",
   "seed",
   "posts.json",
);

export class JsonPostRepository implements PostRepository {
   private async readFromDisk() {
      const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
      const parsedJson = JSON.parse(jsonContent);
      return parsedJson.posts;
   }

   async findAll(): Promise<PostModel[]> {
      return this.readFromDisk();
   }
}

export const postRepository = new JsonPostRepository();

postRepository.findAll().then((jsonContent) => console.log(jsonContent));
