import type { BaziPillar } from "@/lib/bazi";

type ChartPillarsProps = {
  pillars: BaziPillar[];
};

export function ChartPillars({ pillars }: ChartPillarsProps) {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
            Four Pillars
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#f0d492]">
            Archive pillars
          </h2>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <article
            className="border border-[#c89b3c]/22 bg-[#070604]/78 p-4 shadow-[inset_0_1px_0_rgba(240,212,146,0.08)]"
            key={pillar.label}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#9f8c61]">
              {pillar.label} Pillar
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-[#f8efd7]">
                {pillar.stem}
              </span>
              <span className="text-xl text-[#d8b65f]">{pillar.branch}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-[#f0d492]">
              {pillar.element}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#b9a77d]">{pillar.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
