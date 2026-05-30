import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageShell } from "@/components/PageShell";
import { productPrice } from "@/lib/site-content";

export default function CheckoutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-14">
        <Card>
          <p className="text-sm uppercase tracking-[0.3em] text-[#c89b3c]">Checkout</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#f0d492]">
            Unlock Full Book · {productPrice}
          </h1>
          <p className="mt-4 leading-8 text-[#d9c798]">
            One-time unlock. No subscription. Save your Destiny Book as an image.
          </p>
          <div className="mt-8 grid gap-4 border-t border-[#c89b3c]/20 pt-6">
            <div className="flex items-center justify-between text-[#d9c798]">
              <span>Personal Destiny Book</span>
              <span>{productPrice}</span>
            </div>
            <Button href="/result/demo-token">Unlock Full Book · {productPrice}</Button>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
