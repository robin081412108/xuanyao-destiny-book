const openModules = ["Origin", "Rhythm"];

const lockedModules = [
  "Wealth Gate — locked",
  "Relationship Pattern — locked",
  "Hidden Friction — locked",
  "Year Ahead — locked"
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
            className="border border-[#f0d492]/40 bg-[#c89b3c]/10 p-4 text-sm font-semibold text-[#f0d492]"
            key={module}
          >
            {module}
          </div>
        ))}
        {lockedModules.map((module) => (
          <div
            className="border border-[#c89b3c]/18 bg-black/20 p-4 text-sm text-[#9f8c61]"
            key={module}
          >
            {module}
          </div>
        ))}
      </div>
    </section>
  );
}
