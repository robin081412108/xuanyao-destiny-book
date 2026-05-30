import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 border px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#f0d492] focus:ring-offset-2 focus:ring-offset-black";

const variants = {
  primary:
    "border-[#f0d492]/80 bg-[#c89b3c] text-black shadow-[0_0_38px_rgba(200,155,60,0.26)] hover:bg-[#f0d492]",
  secondary:
    "border-[#c89b3c]/45 bg-[#0a0805]/86 text-[#f0d492] shadow-[inset_0_0_0_1px_rgba(240,212,146,0.05)] hover:border-[#f0d492]/80 hover:bg-[#151007]",
  ghost:
    "border-[#c89b3c]/24 bg-transparent text-[#d9c798] hover:border-[#f0d492]/60 hover:text-[#f0d492]"
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = ""
}: ButtonProps) {
  const resolvedClassName = `${baseClassName} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={resolvedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={resolvedClassName} type={type}>
      {children}
    </button>
  );
}
