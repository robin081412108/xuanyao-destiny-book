import type { FiveElementScore } from "@/lib/mock-chart";

type FiveElementsBarsProps = {
  elements: FiveElementScore[];
};

export function FiveElementsBars({ elements }: FiveElementsBarsProps) {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
        Five Elements
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-[#f0d492]">
        Elemental rhythm
      </h2>
      <div className="mt-5 grid gap-4">
        {elements.map((element) => (
          <div className="grid gap-2" key={element.name}>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold text-[#f5ebd2]">{element.name}</span>
              <span className="text-[#9f8c61]">{element.score}</span>
            </div>
            <div
              aria-hidden="true"
              className="h-2 overflow-hidden border border-[#c89b3c]/20 bg-black/40"
            >
              <div
                className="h-full bg-gradient-to-r from-[#7b5a19] via-[#c89b3c] to-[#f0d492]"
                style={{ width: `${element.score}%` }}
              />
            </div>
            <p className="text-sm leading-6 text-[#b9a77d]">{element.tone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
