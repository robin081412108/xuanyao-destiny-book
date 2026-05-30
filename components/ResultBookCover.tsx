type ResultBookCoverProps = {
  bookId: string;
};

export function ResultBookCover({ bookId }: ResultBookCoverProps) {
  return (
    <section className="relative overflow-hidden border border-[#c89b3c]/26 bg-[#050403] p-7 sm:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d492]/65 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute right-8 top-8 grid size-24 place-items-center border border-[#c89b3c]/24 text-[0.62rem] uppercase tracking-[0.28em] text-[#c89b3c]/70"
      >
        XY
      </div>
      <div className="relative max-w-3xl">
        <p className="text-xs uppercase tracking-[0.34em] text-[#c89b3c]">
          One-time digital book
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#f8efd7] sm:text-6xl">
          XuanYao Destiny Book
        </h1>
        <p className="mt-5 text-xl leading-8 text-[#d9c798]">
          Your complete archive is open.
        </p>
        <p className="mt-8 inline-flex border border-[#c89b3c]/28 bg-black/24 px-4 py-3 text-sm uppercase tracking-[0.2em] text-[#f0d492]">
          Book ID: {bookId}
        </p>
      </div>
    </section>
  );
}
