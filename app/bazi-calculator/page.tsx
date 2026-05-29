import { BaziInputForm } from "@/components/BaziInputForm";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

export default function BaziCalculatorPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h1 className="text-4xl font-semibold text-[#f0d492]">BaZi Calculator</h1>
          <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
            Build a structured reading from birth date, time, calendar mode, and
            reflection focus.
          </p>
        </div>
        <BaziInputForm />
      </section>
      <Card>
        <p className="leading-7 text-[#b9a77d]">
          The calculator prepares a clean archive preview for personal reflection,
          study, and long-term review.
        </p>
      </Card>
    </PageShell>
  );
}
