import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const NAV = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "Technology", href: "#technology" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#final-cta" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export function PremiumFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070D] py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs font-mono text-[11px] uppercase tracking-[0.2em] text-[#94A3B8] font-semibold">
              Intelligence. Automated. Empowered.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">
                Navigation
              </p>
              <ul className="space-y-3">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-white font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">
                Ecosystem
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://empowersacademy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-white font-medium"
                  >
                    Empowers Academy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">
                Legal
              </p>
              <ul className="space-y-3">
                {LEGAL.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-white font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-xs text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between font-medium">
          <span>
            © {year} Fortivex AI Private Limited. All rights reserved.
          </span>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </Container>
    </footer>
  );
}
