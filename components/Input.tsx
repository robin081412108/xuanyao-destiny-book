import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="grid gap-2 text-sm text-[#f5ebd2]" htmlFor={inputId}>
      <span className="text-[#b9a77d]">{label}</span>
      <input
        {...props}
        id={inputId}
        className="min-h-12 w-full border border-[#c89b3c]/30 bg-[#090806]/92 px-4 text-[#f5ebd2] outline-none transition placeholder:text-[#786846] focus:border-[#f0d492] focus:ring-1 focus:ring-[#f0d492]/35"
      />
    </label>
  );
}
