import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { archiveSections, productPrice } from "@/lib/site-content";

export default function PreviewPage() {
  return (
    <PageShell>
      <section className="grid gap-8 py-14 lg:grid-cols-[1fr_0.75fr]">
        <div>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Destiny Book Preview</h1>
          <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
            Your sample archive is ready. Unlock the full book to save the complete
            image-ready version.
          </p>
          <div className="mt-8">
            <Button href="/checkout">Unlock Full Book · {productPrice}</Button>
          </div>
        </div>
        <Card>
          <h2 className="text-2xl font-semibold text-[#f0d492]">Preview summary</h2>
          <p className="mt-4 leading-7 text-[#b9a77d]">
            A balanced profile with strong planning rhythm and a steady wealth-habit theme.
          </p>
        </Card>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {archiveSections.map((section) => (
          <Card key={section}>
            <h2 className="text-lg font-semibold text-[#f0d492]">{section}</h2>
            <p className="mt-3 text-sm leading-6 text-[#b9a77d]">
              Locked in the full archive.
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
