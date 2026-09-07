import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
  wordmark = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Fortivex AI — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative block h-8 w-8 shrink-0 sm:h-9 sm:w-9">
        <Image
          src="/icon-mark.png"
          alt=""
          fill
          priority
          sizes="36px"
          className="object-contain"
        />
      </span>
      {wordmark && (
        <span
          className={cn(
            "font-sans text-[17px] font-semibold tracking-tight sm:text-[19px]",
            tone === "dark" ? "text-ink-50" : "text-[#1A1A2E]"
          )}
        >
          FORTIVE
          <span className={tone === "dark" ? "text-gradient-brand" : "text-gradient-purple"}>X</span>
          <span className={tone === "dark" ? "text-electric" : "text-[#7C3AED]"}>.AI</span>
        </span>
      )}
    </Link>
  );
}
