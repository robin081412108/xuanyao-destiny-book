import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { PageShell } from "@/components/PageShell";

export default function RecoverPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-2xl py-14">
        <Card>
          <h1 className="text-4xl font-semibold text-[#f0d492]">Recover Your Book</h1>
          <p className="mt-4 leading-8 text-[#d9c798]">
            Enter your order reference to locate a saved Destiny Book.
          </p>
          <form className="mt-8 grid gap-4" action="/result/recovered-token">
            <Input label="Order reference" name="order" required />
            <Input label="Email" name="email" type="email" required />
            <Button type="submit">Recover Book</Button>
          </form>
        </Card>
      </section>
    </PageShell>
  );
}
