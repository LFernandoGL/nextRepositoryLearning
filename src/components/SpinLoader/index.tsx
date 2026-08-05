import clsx from "clsx";

type SpinLoaderProps = {
   className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
   const classes = clsx("flex", "justify-center", "items-center", className);
   return (
      <div className={classes}>
         <div
            className={clsx(
               "border-5",
               "border-t-transparent",
               "rounded-full",
               "border-slate-900",
               "w-10",
               "h-10",
               "animate-spin",
            )}
         ></div>
      </div>
   );
}
