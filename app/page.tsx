import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { OrbitGlyph } from "@/components/OrbitGlyph";
import { PageShell } from "@/components/PageShell";
import { productPrice } from "@/lib/site-content";

const valueCards = [
  {
    title: "Four Pillars Archive",
    body: "A structured view of year, month, day, and hour pillars prepared for cultural reflection."
  },
  {
    title: "Elemental Rhythm",
    body: "A visual summary of Wood, Fire, Earth, Metal, and Water balance for self-observation."
  },
  {
    title: "Image-Ready Book",
    body: "The complete book is designed to be saved as a polished personal archive."
  }
];

const litModules = ["Origin", "Rhythm"];

const lockedModules = [
  "Wealth Gate — locked",
  "Relationship Pattern — locked",
  "Hidden Friction — locked",
  "Year Ahead — locked"
];

export default function Home() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.34em] text-[#c89b3c]">
            Premium BaZi Destiny Archive
          </p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-tight text-[#f8efd7] sm:text-6xl lg:text-7xl">
            Your birth moment became a map.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dac896] sm:text-xl">
            Open your personal BaZi Destiny Book and explore your elemental rhythm,
            inner structure, relationship patterns, wealth tendencies, and the year
            ahead.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/preview">Open My Destiny Book</Button>
            <Button href="/checkout" variant="secondary">
              Unlock Full Book · {productPrice}
            </Button>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#b9a77d]">
            One-time unlock. No subscription. Save your Destiny Book as an image.
          </p>
        </div>
        <div className="relative">
          <OrbitGlyph />
        </div>
      </section>

      <section className="grid items-start gap-5 py-8 lg:grid-cols-[0.82fr_1.18fr]">
        <BaziInputForm />
        <div className="grid gap-5">
          <section className="grid gap-4 lg:grid-cols-3">
            {valueCards.map((card) => (
              <Card className="min-h-44" key={card.title}>
                <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
                  Archive Layer
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[#f0d492]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#c9b37b]">{card.body}</p>
              </Card>
            ))}
          </section>

          <Card className="overflow-hidden">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
                  Preview Teaser
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-[#f0d492]">
                  Light the first pages
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#b9a77d]">
                  Start with a compact preview, then unlock the full archive when the
                  structure feels worth keeping.
                </p>
              </div>
              <Button className="w-full sm:w-auto" href="/preview" variant="secondary">
                Preview My Chart
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {litModules.map((module) => (
                <div
                  className="border border-[#f0d492]/40 bg-[#c89b3c]/10 p-4 text-sm font-semibold text-[#f0d492]"
                  key={module}
                >
                  {module}
                </div>
              ))}
              {lockedModules.map((module) => (
                <div
                  className="border border-[#c89b3c]/18 bg-black/20 p-4 text-sm text-[#9f8c61]"
                  key={module}
                >
                  {module}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
