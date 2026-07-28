import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  tone = "dark",
  className,
}: {
  index?: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F8FAFC] backdrop-blur-xl shadow-xs",
        tone === "light" && "border-slate-900/[0.08] bg-slate-900/[0.03] text-slate-800",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
      {index && <span className="text-slate-400 font-semibold">{index} //</span>}
      <span className="font-semibold">{label}</span>
    </div>
  );
}
