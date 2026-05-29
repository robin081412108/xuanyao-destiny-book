import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { OrbitGlyph } from "@/components/OrbitGlyph";
import { PageShell } from "@/components/PageShell";
import { archiveSections, productPrice, routes, safeNotice } from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#c89b3c]">
            Premium BaZi Archive
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-tight text-[#f5ebd2] sm:text-6xl">
            Your birth moment became a map.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d9c798]">
            Open your personal BaZi Destiny Book.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/preview">Open My Destiny Book</Button>
            <Button href="/checkout">Unlock Full Book · {productPrice}</Button>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#b9a77d]">
            One-time unlock. No subscription. Save your Destiny Book as an image.
          </p>
        </div>
        <OrbitGlyph />
      </section>

      <section className="grid gap-5 py-8 lg:grid-cols-[0.85fr_1.15fr]">
        <BaziInputForm />
        <div className="grid gap-5">
          <Card>
            <h2 className="text-2xl font-semibold text-[#f0d492]">
              What your first book includes
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {archiveSections.map((section) => (
                <div
                  className="border border-[#c89b3c]/20 bg-[#0c0904] p-4 text-sm text-[#d9c798]"
                  key={section}
                >
                  {section}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-[#f0d492]">
              Explore calculators
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {routes.map((route) => (
                <a
                  className="border border-[#c89b3c]/20 p-4 text-sm text-[#d9c798] transition hover:border-[#f0d492]/60"
                  href={route.href}
                  key={route.href}
                >
                  {route.label}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <Card>
          <p className="text-sm leading-6 text-[#b9a77d]">{safeNotice}</p>
        </Card>
      </section>
    </PageShell>
  );
}
