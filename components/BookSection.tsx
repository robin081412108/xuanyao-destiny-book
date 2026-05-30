type BookSectionProps = {
  title: string;
  body: string;
};

export function BookSection({ title, body }: BookSectionProps) {
  return (
    <article className="border border-[#c89b3c]/20 bg-[#070604]/78 p-5 shadow-[inset_0_1px_0_rgba(240,212,146,0.08)]">
      <p className="text-xs uppercase tracking-[0.22em] text-[#c89b3c]">
        Destiny Book
      </p>
      <h3 className="mt-3 text-xl font-semibold text-[#f0d492]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#cdbb8a]">{body}</p>
    </article>
  );
}
