import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChartPreviewCard } from "@/components/ChartPreviewCard";
import { PageShell } from "@/components/PageShell";
import {
  birthProfileFromSearchParams,
  calculateBaziChart,
  type SearchParamValue
} from "@/lib/bazi";
import { productPrice } from "@/lib/site-content";

type PreviewPageProps = {
  searchParams?: Promise<Record<string, SearchParamValue>>;
};

export default async function PreviewPage({ searchParams }: PreviewPageProps) {
  const chart = calculateBaziChart(
    birthProfileFromSearchParams((await searchParams) ?? {})
  );

  return (
    <PageShell>
      <section className="grid gap-8 py-14">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
            Destiny Book Preview
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
            Your chart preview is ready.
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-[#d9c798]">
            The first layers are open. The deeper sections are sealed inside your
            complete Destiny Book.
          </p>
        </div>
        <ChartPreviewCard chart={chart} />
        <Card className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
              Complete Book
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f0d492]">
              Unlock the sealed sections.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#d9c798]">
              Open the full Destiny Book to reveal Wealth Gate, Relationship
              Pattern, Hidden Friction, Year Ahead, and the complete image-ready
              archive.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#b9a77d]">
              One-time unlock. No subscription. Save your Destiny Book as an image.
            </p>
          </div>
          <div className="grid gap-3">
            <Button className="w-full" href="/checkout">
              Unlock Full Book · {productPrice}
            </Button>
            <p className="text-center text-xs uppercase tracking-[0.18em] text-[#9f8c61]">
              Instant digital access after unlock.
            </p>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
