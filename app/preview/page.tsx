import { Button } from "@/components/Button";
import { ChartPreviewCard } from "@/components/ChartPreviewCard";
import { PageShell } from "@/components/PageShell";
import {
  birthProfileFromSearchParams,
  buildMockBaziChart,
  type SearchParamValue
} from "@/lib/mock-chart";
import { productPrice } from "@/lib/site-content";

type PreviewPageProps = {
  searchParams?: Promise<Record<string, SearchParamValue>>;
};

export default async function PreviewPage({ searchParams }: PreviewPageProps) {
  const chart = buildMockBaziChart(
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
            The first layers are open. The complete Destiny Book keeps the deeper
            sections sealed until unlock.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/checkout">Unlock Full Book · {productPrice}</Button>
            <p className="text-sm leading-6 text-[#b9a77d]">
              One-time unlock. No subscription. Save your Destiny Book as an image.
            </p>
          </div>
        </div>
        <ChartPreviewCard chart={chart} />
      </section>
    </PageShell>
  );
}
