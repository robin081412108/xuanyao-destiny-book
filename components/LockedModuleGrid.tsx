const openModules = ["Origin", "Rhythm"];

const sealedModules = [
  "Wealth Gate",
  "Relationship Pattern",
  "Hidden Friction",
  "Year Ahead"
];

export function LockedModuleGrid() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.24em] text-[#c89b3c]">
        Book Modules
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-[#f0d492]">
        First layers open
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {openModules.map((module) => (
          <div
            className="border border-[#f0d492]/40 bg-[#c89b3c]/10 p-4"
            key={module}
          >
            <p className="text-sm font-semibold text-[#f0d492]">{module}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#c89b3c]">
              Open
            </p>
          </div>
        ))}
        {sealedModules.map((module) => (
          <div
            className="border border-[#c89b3c]/18 bg-black/20 p-4"
            key={module}
          >
            <p className="text-sm font-semibold text-[#d9c798]">{module}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#9f8c61]">
              Sealed
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
