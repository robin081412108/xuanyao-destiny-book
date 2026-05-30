import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FiveElementsBars } from "@/components/FiveElementsBars";
import { PageShell } from "@/components/PageShell";
import { calculateBaziChart } from "@/lib/bazi";
import { productPrice } from "@/lib/site-content";

const chart = calculateBaziChart({
  date: "1990-01-01",
  time: "12:30",
  calendar: "solar",
  focus: "overall"
});

export default function WuXingElementsPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid content-start gap-6">
          <Card>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
              Wu Xing Elements
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
              Wu Xing Elements
            </h1>
            <p className="mt-4 leading-8 text-[#d9c798]">
              Review Wood, Fire, Earth, Metal, and Water as a calm visual summary
              for self-observation.
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
          <FiveElementsBars elements={chart.fiveElements} />
        </Card>
      </section>
    </PageShell>
  );
}
