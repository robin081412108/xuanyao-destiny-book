import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

export default function RefundPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-14">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Refund Policy</h1>
          <p className="mt-6 leading-8 text-[#d9c798]">
            If a purchased book cannot be opened or recovered, contact support with the
            order reference. We review delivery issues and duplicate charges promptly.
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
