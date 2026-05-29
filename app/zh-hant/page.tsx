import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { OrbitGlyph } from "@/components/OrbitGlyph";
import { PageShell } from "@/components/PageShell";
import { productPrice } from "@/lib/site-content";

export default function ZhHantPage() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#c89b3c]">
            玄曜命書
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-tight text-[#f5ebd2] sm:text-6xl">
            你的出生時刻，成為一張人生地圖。
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d9c798]">
            開啟你的個人八字命書。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/preview">開啟命書</Button>
            <Button href="/checkout">解鎖完整命書 · {productPrice}</Button>
          </div>
        </div>
        <OrbitGlyph />
      </section>
      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <BaziInputForm />
        <Card>
          <h2 className="text-2xl font-semibold text-[#f0d492]">首版定位</h2>
          <p className="mt-4 leading-8 text-[#d9c798]">
            以英文世界可理解的方式呈現八字、四柱、日主與五行結構，圍繞自我認識、
            行動節奏和長期規劃提供文化參考。
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
