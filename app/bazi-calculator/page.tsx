import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { ChartPreviewCard } from "@/components/ChartPreviewCard";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import {
  birthProfileFromSearchParams,
  buildMockBaziChart,
  type SearchParamValue
} from "@/lib/mock-chart";
import { productPrice } from "@/lib/site-content";

type BaziCalculatorPageProps = {
  searchParams?: Promise<Record<string, SearchParamValue>>;
};

export default async function BaziCalculatorPage({
  searchParams
}: BaziCalculatorPageProps) {
  const params = (await searchParams) ?? {};
  const hasQuery = Object.keys(params).length > 0;
  const profile = hasQuery
    ? birthProfileFromSearchParams(params)
    : {
        date: "1990-01-01",
        time: "12:30",
        calendar: "solar",
        focus: "overall"
      };
  const chart = buildMockBaziChart(profile);

  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid content-start gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
              Calculator Preview
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
              BaZi Calculator
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
              Prepare a Four Pillars preview from your birth moment, then open the
              full Destiny Book when it feels worth keeping.
            </p>
          </div>
          <BaziInputForm action="/bazi-calculator" submitLabel="Preview My Chart" />
          <Card className="grid gap-4">
            <p className="text-sm leading-6 text-[#b9a77d]">
              The preview updates from your form details and keeps the full book
              path clear for a one-time unlock.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/preview" variant="secondary">
                Open Full Preview
              </Button>
              <Button href="/checkout">Unlock Full Book · {productPrice}</Button>
            </div>
          </Card>
        </div>
        <div className="min-w-0">
          <ChartPreviewCard chart={chart} />
        </div>
      </section>
    </PageShell>
  );
}
