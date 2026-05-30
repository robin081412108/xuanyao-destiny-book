import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export function Select({ label, id, options, ...props }: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="grid gap-2 text-sm text-[#f5ebd2]" htmlFor={selectId}>
      <span className="text-[#b9a77d]">{label}</span>
      <select
        {...props}
        id={selectId}
        className="min-h-12 border border-[#c89b3c]/30 bg-[#090806] px-4 text-[#f5ebd2] outline-none transition focus:border-[#f0d492]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
