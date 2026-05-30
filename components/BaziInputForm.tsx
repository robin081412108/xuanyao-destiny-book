import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { Select } from "./Select";

type BaziInputFormProps = {
  action?: string;
  submitLabel?: string;
};

export function BaziInputForm({
  action = "/preview",
  submitLabel = "Open My Destiny Book"
}: BaziInputFormProps) {
  return (
    <Card className="relative w-full overflow-hidden p-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d492]/55 to-transparent"
      />
      <form className="relative grid gap-4 p-5 sm:p-6" action={action} method="get">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#c89b3c]">
            Archive Access
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#f0d492]">
            Open your birth record
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#b9a77d]">
            Start with a refined profile card. The preview uses these details only
            to shape a cultural reference archive.
          </p>
        </div>
        <Input label="Nickname (optional)" name="nickname" placeholder="How should the book address you?" />
        <Select
          label="Gender (optional)"
          name="gender"
          options={[
            { label: "Prefer not to say", value: "prefer-not-to-say" },
            { label: "Female", value: "female" },
            { label: "Male", value: "male" },
            { label: "Other", value: "other" }
          ]}
        />
        <Input label="Birth date" name="date" type="date" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Birth time (optional)" name="time" type="time" />
          <Select
            label="Calendar"
            name="calendar"
            required
            options={[
              { label: "Solar", value: "solar" },
              { label: "Lunar", value: "lunar" }
            ]}
          />
        </div>
        <Input
          label="Birth location (optional)"
          name="location"
          placeholder="City or region"
        />
        <Select
          label="Focus"
          name="focus"
          required
          options={[
            { label: "Overall", value: "overall" },
            { label: "Career", value: "career" },
            { label: "Wealth", value: "wealth" },
            { label: "Relationship", value: "relationship" },
            { label: "Year Ahead", value: "year-ahead" }
          ]}
        />
        <Button className="mt-1 w-full" type="submit">
          {submitLabel}
        </Button>
      </form>
    </Card>
  );
}
