import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Fortivex AI",
  description: "How Fortivex AI Private Limited handles information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ink-50 py-16">
      <Container className="max-w-3xl">
        <Logo tone="light" />
        <h1 className="mt-12 text-4xl font-semibold tracking-tight text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Last updated {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-600">
          <p>
            Fortivex AI Private Limited (&ldquo;Fortivex AI&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting
            the privacy of everyone who visits this website or engages with
            our products and services.
          </p>
          <p>
            This policy is currently being finalized alongside our formal
            data handling and compliance framework. A complete, detailed
            privacy policy will be published here shortly.
          </p>
          <p>
            In the meantime, if you have any questions about how your
            information is handled, please reach out to us at{" "}
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
