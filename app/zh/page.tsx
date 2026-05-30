import { BaziInputForm } from "@/components/BaziInputForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { OrbitGlyph } from "@/components/OrbitGlyph";
import { PageShell } from "@/components/PageShell";
import { productPrice } from "@/lib/site-content";

export default function ZhPage() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#c89b3c]">
            玄曜命书
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-tight text-[#f5ebd2] sm:text-6xl">
            你的出生时刻，成为一张人生地图。
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d9c798]">
            开启你的个人八字命书。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/preview">开启命书</Button>
            <Button href="/checkout">解锁完整命书 · {productPrice}</Button>
          </div>
        </div>
        <OrbitGlyph />
      </section>
      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <BaziInputForm />
        <Card>
          <h2 className="text-2xl font-semibold text-[#f0d492]">首版定位</h2>
          <p className="mt-4 leading-8 text-[#d9c798]">
            以英文世界可理解的方式呈现八字、四柱、日主与五行结构，围绕自我认识、
            行动节奏和长期规划提供文化参考。
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
