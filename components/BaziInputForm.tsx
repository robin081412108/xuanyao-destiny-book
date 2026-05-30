import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { Select } from "./Select";

export function BaziInputForm() {
  return (
    <Card className="w-full">
      <form className="grid gap-4" action="/preview">
        <div>
          <h2 className="text-xl font-semibold text-[#f0d492]">Birth Moment</h2>
          <p className="mt-2 text-sm leading-6 text-[#b9a77d]">
            Enter the details used to prepare a structured Four Pillars archive.
          </p>
        </div>
        <Input label="Birth date" name="date" type="date" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Birth time" name="time" type="time" />
          <Select
            label="Calendar"
            name="calendar"
            options={[
              { label: "Solar", value: "solar" },
              { label: "Lunar", value: "lunar" }
            ]}
          />
        </div>
        <Select
          label="Focus"
          name="focus"
          options={[
            { label: "Life Pattern", value: "life-pattern" },
            { label: "Career Path", value: "career-path" },
            { label: "Wealth Habits", value: "wealth-habits" },
            { label: "Yearly Rhythm", value: "yearly-rhythm" }
          ]}
        />
        <Button type="submit">Open My Destiny Book</Button>
      </form>
    </Card>
  );
}
