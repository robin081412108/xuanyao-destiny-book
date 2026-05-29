import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { archiveSections } from "@/lib/site-content";

type ResultPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function ResultPage({ params }: ResultPageProps) {
  const { token } = await params;

  return (
    <PageShell>
      <section className="py-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#c89b3c]">
          Archive Token
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
          Your Destiny Book
        </h1>
        <p className="mt-4 max-w-2xl leading-8 text-[#d9c798]">
          Token ending: {token.slice(-6)}
        </p>
        <div className="mt-8">
          <Button href="/recover">Recover another book</Button>
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {archiveSections.map((section) => (
          <Card key={section}>
            <h2 className="text-xl font-semibold text-[#f0d492]">{section}</h2>
            <p className="mt-3 text-sm leading-6 text-[#b9a77d]">
              Saved in this complete book snapshot.
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
