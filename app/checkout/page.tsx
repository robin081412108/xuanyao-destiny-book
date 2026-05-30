import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { productPrice } from "@/lib/site-content";

const includedModules = [
  "Four Pillars Archive",
  "Elemental Rhythm",
  "Origin and Rhythm",
  "Wealth Gate",
  "Relationship Pattern",
  "Hidden Friction",
  "Year Ahead",
  "Image-ready book page"
];

export default function CheckoutPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89b3c]">
            Preview unlock flow
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#f0d492] sm:text-5xl">
            Unlock your complete Destiny Book.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d9c798]">
            Open the sealed sections and save the complete image-ready archive.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#b9a77d]">
            Payment integration is not enabled in this preview build.
          </p>
        </div>

        <Card className="relative overflow-hidden p-0">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d492]/60 to-transparent"
          />
          <div className="grid gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-[#c89b3c]/20 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
                  Secure checkout placeholder
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#f8efd7]">
                  XuanYao Destiny Book
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#b9a77d]">
                  One-time unlock
                </p>
              </div>
              <p className="text-3xl font-semibold text-[#f0d492]">
                {productPrice}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
                Included
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {includedModules.map((module) => (
                  <div
                    className="border border-[#c89b3c]/18 bg-black/20 px-4 py-3 text-sm font-semibold text-[#d9c798]"
                    key={module}
                  >
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full" href="/result/preview-token">
              Continue to Result Preview
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
