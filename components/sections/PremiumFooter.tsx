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
    <footer className="relative border-t border-white/[0.06] bg-void py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
              Intelligence. Automated. Empowered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
                Navigation
              </p>
              <ul className="space-y-2.5">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-400 transition-colors hover:text-ink-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
                Ecosystem
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://empowersacademy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-400 transition-colors hover:text-ink-50"
                  >
                    Empowers Academy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
                Legal
              </p>
              <ul className="space-y-2.5">
                {LEGAL.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-400 transition-colors hover:text-ink-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-ink-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Fortivex AI Private Limited. All rights reserved.
          </span>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </Container>
    </footer>
  );
}
