import Link from "next/link";

const links = [
  { href: "/", label: "EN" },
  { href: "/zh", label: "简" },
  { href: "/zh-hant", label: "繁" }
];

export function LanguageSwitcher() {
  return (
    <nav aria-label="Language" className="flex items-center border border-[#c89b3c]/25">
      {links.map((link) => (
        <Link
          className="min-w-11 px-3 py-2 text-center text-xs font-semibold text-[#f0d492] transition hover:bg-[#c89b3c]/15"
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
