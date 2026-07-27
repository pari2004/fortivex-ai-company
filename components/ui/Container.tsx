import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </Tag>
  );
}
