import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChartPillars } from "@/components/ChartPillars";
import { PageShell } from "@/components/PageShell";
import { calculateBaziChart } from "@/lib/bazi";
import { productPrice } from "@/lib/site-content";

const chart = calculateBaziChart({
  date: "1990-01-01",
  time: "12:30",
  calendar: "solar",
  focus: "overall"
});

export default function DayMasterCalculatorPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-6">
          <Card>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
              Day Master
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
              Day Master Calculator
            </h1>
            <p className="mt-4 leading-8 text-[#d9c798]">
              Explore the central element used as the anchor of a Four Pillars
              profile preview.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/preview" variant="secondary">
                Preview My Chart
              </Button>
              <Button href="/checkout">Unlock Full Book · {productPrice}</Button>
            </div>
          </Card>
          <BaziInputForm submitLabel="Preview My Chart" />
        </div>
        <Card className="grid gap-7">
          <div className="border border-[#c89b3c]/24 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9f8c61]">
              Preview Day Master
            </p>
            <p className="mt-3 text-4xl font-semibold text-[#f8efd7]">
              {chart.dayMaster}
            </p>
            <p className="mt-4 leading-7 text-[#b9a77d]">{chart.originPreview}</p>
          </div>
          <ChartPillars pillars={chart.pillars} />
        </Card>
      </section>
    </PageShell>
  );
}
