import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use — Fortivex AI",
  description: "Terms governing the use of the Fortivex AI website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-ink-50 py-16">
      <Container className="max-w-3xl">
        <Logo tone="light" />
        <h1 className="mt-12 text-4xl font-semibold tracking-tight text-ink-900">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Last updated {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-600">
          <p>
            These terms govern access to and use of this website, operated
            by Fortivex AI Private Limited (&ldquo;Fortivex AI&rdquo;), a
            technology company based in Bengaluru, Karnataka, India.
          </p>
          <p>
            Our complete terms of use are currently being finalized. A full
            version will be published here shortly.
          </p>
          <p>
            For questions in the meantime, please contact us at{" "}
            <a href="mailto:hello@fortivex.ai" className="text-royal underline underline-offset-4">
              hello@fortivex.ai
            </a>
            .
          </p>
        </div>

        <Link
          href="/"
          className="mt-14 inline-block text-sm font-medium text-ink-700 underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </Container>
    </main>
  );
}
