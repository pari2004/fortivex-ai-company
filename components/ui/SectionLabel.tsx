import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  tone = "dark",
  className,
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em]",
        tone === "dark" ? "text-ink-400" : "text-ink-500",
        className
      )}
    >
      <span className="text-gradient-brand font-semibold">{index}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}
