import { calculateFallbackBaziChart } from "./fallback-engine";
import type { BaziChart, BirthProfile, CalendarType, FocusArea } from "./types";

export type SearchParamValue = string | string[] | undefined;

const calendarTypes = new Set<CalendarType>(["solar", "lunar"]);
const focusAreas = new Set<FocusArea>([
  "overall",
  "career",
  "wealth",
  "relationship",
  "year-ahead"
]);

function firstValue(value: SearchParamValue) {
  return Array.isArray(value) ? value[0] : value;
}

function clean(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function cleanCalendar(value?: string): CalendarType {
  const cleaned = clean(value);
  return cleaned && calendarTypes.has(cleaned as CalendarType)
    ? (cleaned as CalendarType)
    : "solar";
}

function cleanFocus(value?: string): FocusArea {
  const cleaned = clean(value);
  return cleaned && focusAreas.has(cleaned as FocusArea)
    ? (cleaned as FocusArea)
    : "overall";
}

export function birthProfileFromSearchParams(
  searchParams: Record<string, SearchParamValue> = {}
): BirthProfile {
  return {
    nickname: clean(firstValue(searchParams.nickname)),
    gender: clean(firstValue(searchParams.gender)),
    date: clean(firstValue(searchParams.date)),
    time: clean(firstValue(searchParams.time)),
    calendar: cleanCalendar(firstValue(searchParams.calendar)),
    location: clean(firstValue(searchParams.location)),
    focus: cleanFocus(firstValue(searchParams.focus))
  };
}

export function calculateBaziChart(input: BirthProfile = {}): BaziChart {
  // Current implementation uses a deterministic fallback engine.
  // Real BaZi calculation engine will replace this adapter later.
  // UI should depend on calculateBaziChart, not fallback engine directly.
  return calculateFallbackBaziChart(input);
}
