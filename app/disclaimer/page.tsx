import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { safeNotice } from "@/lib/site-content";

export default function DisclaimerPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-14">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Disclaimer</h1>
          <p className="mt-6 leading-8 text-[#d9c798]">{safeNotice}</p>
          <p className="mt-4 leading-8 text-[#d9c798]">
            Do not use the book as the sole basis for personal, professional, health,
            financial, legal, or safety decisions.
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
