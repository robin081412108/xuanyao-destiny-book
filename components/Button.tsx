import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
};

const className =
  "inline-flex min-h-12 items-center justify-center border border-[#f0d492]/70 bg-[#c89b3c] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(200,155,60,0.22)] transition hover:bg-[#f0d492] focus:outline-none focus:ring-2 focus:ring-[#f0d492] focus:ring-offset-2 focus:ring-offset-black";

export function Button({ children, href, type = "button" }: ButtonProps) {
  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
