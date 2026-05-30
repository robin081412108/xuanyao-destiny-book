import type { BaziChart } from "@/lib/bazi";
import { Card } from "./Card";
import { ChartPillars } from "./ChartPillars";
import { FiveElementsBars } from "./FiveElementsBars";
import { LockedModuleGrid } from "./LockedModuleGrid";

type ChartPreviewCardProps = {
  chart: BaziChart;
  showSections?: boolean;
};

export function ChartPreviewCard({
  chart,
  showSections = true
}: ChartPreviewCardProps) {
  return (
    <Card className="grid gap-7">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
            Chart Preview
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#f8efd7]">
            {chart.displayName}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#b9a77d]">
            A polished cultural reference preview prepared from your birth
            profile.
          </p>
        </div>
        <div className="border border-[#c89b3c]/24 bg-black/20 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9f8c61]">
            Day Master
          </p>
          <p className="mt-2 text-xl font-semibold text-[#f0d492]">
            {chart.dayMaster}
          </p>
        </div>
      </div>

      <ChartPillars pillars={chart.pillars} />
      <FiveElementsBars elements={chart.fiveElements} />

      {showSections ? (
        <>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="border border-[#c89b3c]/18 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[#c89b3c]">
                Origin
              </p>
              <p className="mt-3 text-sm leading-6 text-[#d9c798]">
                {chart.originPreview}
              </p>
            </article>
            <article className="border border-[#c89b3c]/18 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[#c89b3c]">
                Rhythm
              </p>
              <p className="mt-3 text-sm leading-6 text-[#d9c798]">
                {chart.rhythmPreview}
              </p>
            </article>
          </div>
          <LockedModuleGrid />
        </>
      ) : null}
    </Card>
  );
}
