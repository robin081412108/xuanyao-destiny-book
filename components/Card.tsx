type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`border border-[#c89b3c]/24 bg-black/42 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.32)] backdrop-blur ${className}`}
    >
      {children}
    </section>
  );
}
