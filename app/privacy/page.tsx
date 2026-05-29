import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-14">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Privacy Policy</h1>
          <div className="mt-6 grid gap-4 leading-8 text-[#d9c798]">
            <p>
              We collect only the birth details and contact fields needed to prepare,
              unlock, and recover a Destiny Book.
            </p>
            <p>
              Sensitive values should be protected at rest, never placed in public
              links, and never written into ordinary analytics events.
            </p>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
