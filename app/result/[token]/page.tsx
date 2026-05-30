import { BookSection } from "@/components/BookSection";
import { Card } from "@/components/Card";
import { ChartPillars } from "@/components/ChartPillars";
import { FiveElementsBars } from "@/components/FiveElementsBars";
import { ResultActions } from "@/components/ResultActions";
import { ResultBookCover } from "@/components/ResultBookCover";
import { PageShell } from "@/components/PageShell";
import { calculateBaziChart, type BirthProfile, type FocusArea } from "@/lib/bazi";

type ResultPageProps = {
  params: Promise<{
    token: string;
  }>;
};

const focusAreas: FocusArea[] = [
  "overall",
  "career",
  "wealth",
  "relationship",
  "year-ahead"
];

const bookSections = [
  {
    title: "Origin",
    body: "This opening layer frames the birth record as a cultural reference point, giving the archive a calm foundation for self-reflection."
  },
  {
    title: "Rhythm",
    body: "The rhythm layer traces how elemental themes move across the chart, showing where pace, reserve, and expression may concentrate."
  },
  {
    title: "Wealth Gate",
    body: "This section reads material patterns as habits of stewardship, timing, and decision structure rather than fixed outcomes."
  },
  {
    title: "Relationship Pattern",
    body: "Relationship themes are presented as patterns of attention, communication, and mutual pacing for reflective review."
  },
  {
    title: "Hidden Friction",
    body: "This layer names subtle tensions in structure and rhythm, keeping the language measured so the archive stays useful and grounded."
  },
  {
    title: "Year Ahead",
    body: "The year-ahead section offers a cultural reference for observing momentum, renewal, and practical focus across the coming cycle."
  },
  {
    title: "Practical Adjustment Notes",
    body: "These notes translate the archive into small observation prompts around cadence, boundaries, recovery, and steady review."
  }
];

function seedFromToken(token: string) {
  return [...token].reduce((total, character) => {
    return total + character.charCodeAt(0);
  }, 0);
}

function profileFromToken(token: string): BirthProfile {
  const seed = seedFromToken(token);
  const year = 1984 + (seed % 24);
  const month = String((seed % 12) + 1).padStart(2, "0");
  const day = String((seed % 27) + 1).padStart(2, "0");
  const hour = String(seed % 24).padStart(2, "0");
  const minute = String((seed * 7) % 60).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hour}:${minute}`,
    calendar: "solar",
    focus: focusAreas[seed % focusAreas.length]
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { token } = await params;
  const bookId = token.slice(-6).replace(/^[-_]+/, "").toUpperCase();
  const chart = calculateBaziChart(profileFromToken(token));

  return (
    <PageShell>
      <section className="py-10 sm:py-14">
        <div
          className="mx-auto max-w-5xl bg-[#030302] text-[#f5ebd2]"
          id="destiny-book-capture"
        >
          <ResultBookCover bookId={bookId} />

          <div className="grid gap-6 border-x border-b border-[#c89b3c]/24 p-5 sm:p-8">
            <Card className="grid gap-6 bg-[#050403]/78">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
                    Complete Archive
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#f8efd7]">
                    {chart.displayName}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b9a77d]">
                    A polished Destiny Book page shaped for cultural reference,
                    personal structure, and image-ready saving.
                  </p>
                </div>
                <div className="border border-[#c89b3c]/24 bg-black/24 px-4 py-3">
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
            </Card>

            <section>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c89b3c]">
                Complete Sections
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f0d492]">
                Sealed pages opened
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {bookSections.map((section) => (
                  <BookSection
                    body={section.body}
                    key={section.title}
                    title={section.title}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        <ResultActions />
      </section>
    </PageShell>
  );
}
