import { cn } from "@/lib/utils";

export function AmbientGlow({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden>
      <div className="h-full w-full rounded-full blur-[110px]" />
    </div>
  );
}

export function AmbientField({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "violet" | "electric" | "faint";
}) {
  const configs = {
    hero: (
      <>
        <div className="absolute -top-[10%] left-[8%] h-[42vw] w-[42vw] max-w-[620px] max-h-[620px] rounded-full bg-royal/25 blur-[130px]" />
        <div className="absolute top-[18%] right-[2%] h-[36vw] w-[36vw] max-w-[520px] max-h-[520px] rounded-full bg-violet/25 blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[30vw] w-[30vw] max-w-[420px] max-h-[420px] rounded-full bg-electric/15 blur-[130px]" />
      </>
    ),
    violet: (
      <>
        <div className="absolute top-1/2 left-1/2 h-[50vw] w-[50vw] max-w-[720px] max-h-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]" />
      </>
    ),
    electric: (
      <>
        <div className="absolute top-0 right-[10%] h-[34vw] w-[34vw] max-w-[480px] max-h-[480px] rounded-full bg-electric/20 blur-[130px]" />
        <div className="absolute bottom-0 left-[6%] h-[28vw] w-[28vw] max-w-[420px] max-h-[420px] rounded-full bg-royal/20 blur-[130px]" />
      </>
    ),
    faint: (
      <>
        <div className="absolute top-0 left-1/3 h-[30vw] w-[30vw] max-w-[420px] max-h-[420px] rounded-full bg-violet/10 blur-[130px]" />
      </>
    ),
  };

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {configs[variant]}
    </div>
  );
}
