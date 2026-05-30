import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

export default function WuXingElementsPage() {
  return (
    <PageShell>
      <section className="py-14">
        <h1 className="text-4xl font-semibold text-[#f0d492]">Wu Xing Elements</h1>
        <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
          A premium visual reference for the five-element balance used in the book.
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {elements.map((element) => (
          <Card key={element}>
            <h2 className="text-xl font-semibold text-[#f0d492]">{element}</h2>
            <p className="mt-3 text-sm leading-6 text-[#b9a77d]">
              A lens for temperament, pace, and practical focus.
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
