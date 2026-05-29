import { BaziInputForm } from "@/components/BaziInputForm";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

export default function DayMasterCalculatorPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Day Master Calculator</h1>
          <p className="mt-4 leading-8 text-[#d9c798]">
            Understand the central element used as the anchor of a Four Pillars profile.
          </p>
        </Card>
        <BaziInputForm />
      </section>
    </PageShell>
  );
}
