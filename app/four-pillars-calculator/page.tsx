import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { pillars } from "@/lib/site-content";

export default function FourPillarsCalculatorPage() {
  return (
    <PageShell>
      <section className="py-14">
        <h1 className="text-4xl font-semibold text-[#f0d492]">Four Pillars Calculator</h1>
        <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
          Review the year, month, day, and hour structure behind a personal archive.
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <Card key={pillar}>
            <h2 className="text-xl font-semibold text-[#f0d492]">{pillar}</h2>
            <p className="mt-3 text-sm leading-6 text-[#b9a77d]">
              A focused layer for rhythm, temperament, relationships, and action.
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
