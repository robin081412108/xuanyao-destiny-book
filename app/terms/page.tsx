import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";

export default function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-14">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Terms of Service</h1>
          <p className="mt-6 leading-8 text-[#d9c798]">
            XuanYao Destiny Book provides a cultural reading product for reflection,
            study, and entertainment. Users are responsible for how they interpret and
            use the content.
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
