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

export default function FourPillarsCalculatorPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="grid content-start gap-6">
          <Card>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
              Pillar Structure
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
              Four Pillars Calculator
            </h1>
            <p className="mt-4 leading-8 text-[#d9c798]">
              Review the year, month, day, and hour structure behind a personal
              BaZi archive preview.
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
        <Card>
          <ChartPillars pillars={chart.pillars} />
        </Card>
      </section>
    </PageShell>
  );
}
