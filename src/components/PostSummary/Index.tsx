import { formatDateTime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading/Index";

type PostSummaryProps = {
   postHeading: "h1" | "h2";
   createdAt: string;
   title: string;
   excerpt: string;
   postLink: string;
};

export function PostSummary({
   createdAt,
   title,
   excerpt,
   postLink,
   postHeading,
}: PostSummaryProps) {
   return (
      <div className="flex flex-col gap-4 justify-center">
         <time
            className="text-slate-600 text-sm/tight block mt-8"
            dateTime={createdAt}
         >
            {formatDateTime(createdAt)}
         </time>

         <PostHeading url={postLink} as={postHeading}>
            {title}
         </PostHeading>

         <p>{excerpt}</p>
      </div>
   );
}
