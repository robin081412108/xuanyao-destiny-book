import type {
  BaziChart,
  BaziPillar,
  BirthProfile,
  FiveElementName,
  FiveElementScore
} from "./types";

const stems = [
  { stem: "Jia", element: "Wood" },
  { stem: "Yi", element: "Wood" },
  { stem: "Bing", element: "Fire" },
  { stem: "Ding", element: "Fire" },
  { stem: "Wu", element: "Earth" },
  { stem: "Ji", element: "Earth" },
  { stem: "Geng", element: "Metal" },
  { stem: "Xin", element: "Metal" },
  { stem: "Ren", element: "Water" },
  { stem: "Gui", element: "Water" }
];

const branches = [
  { branch: "Zi", element: "Water" },
  { branch: "Chou", element: "Earth" },
  { branch: "Yin", element: "Wood" },
  { branch: "Mao", element: "Wood" },
  { branch: "Chen", element: "Earth" },
  { branch: "Si", element: "Fire" },
  { branch: "Wu", element: "Fire" },
  { branch: "Wei", element: "Earth" },
  { branch: "Shen", element: "Metal" },
  { branch: "You", element: "Metal" },
  { branch: "Xu", element: "Earth" },
  { branch: "Hai", element: "Water" }
];

const pillarNotes = [
  "Sets the outer archive frame and early reference tone.",
  "Highlights the seasonal rhythm behind work and study patterns.",
  "Marks the inner structure used as the preview anchor.",
  "Adds a quiet view of timing, craft, and later momentum."
];

const elementTones: Record<FiveElementName, string> = {
  Wood: "Growth, planning, and long-form renewal.",
  Fire: "Visibility, warmth, and expressive momentum.",
  Earth: "Stability, boundaries, and practical holding power.",
  Metal: "Structure, refinement, and decisive clarity.",
  Water: "Reflection, memory, and adaptive movement."
};

const focusElement: Record<Required<BirthProfile>["focus"], FiveElementName> = {
  career: "Wood",
  wealth: "Metal",
  relationship: "Fire",
  "year-ahead": "Water",
  overall: "Earth"
};

const elementNames: FiveElementName[] = [
  "Wood",
  "Fire",
  "Earth",
  "Metal",
  "Water"
];

const pillarLabels: BaziPillar["label"][] = ["Year", "Month", "Day", "Hour"];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hashSeed(text: string) {
  let hash = 2166136261;

  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function calculateFallbackBaziChart(input: BirthProfile = {}): BaziChart {
  const profile: BirthProfile = {
    ...input,
    calendar: input.calendar ?? "solar",
    focus: input.focus ?? "overall"
  };
  const seedText =
    [
      profile.nickname,
      profile.gender,
      profile.date,
      profile.time,
      profile.calendar,
      profile.location,
      profile.focus
    ]
      .filter(Boolean)
      .join("|") || "fallback-chart";
  const seed = hashSeed(seedText);
  const dayStem = stems[(seed + 2) % stems.length];
  const displayName = profile.nickname
    ? `${profile.nickname.slice(0, 32)}'s Archive`
    : "Your Archive";
  const selectedFocus = profile.focus ?? "overall";
  const emphasizedElement = focusElement[selectedFocus];

  const pillars = pillarLabels.map((label, index) => {
    const stem = stems[(seed + index * 2) % stems.length];
    const branch = branches[(seed + index * 3 + 1) % branches.length];

    return {
      label,
      stem: stem.stem,
      branch: branch.branch,
      element:
        stem.element === branch.element ? stem.element : `${stem.element} / ${branch.element}`,
      note: pillarNotes[index]
    };
  });

  const fiveElements = elementNames.map((name, index): FiveElementScore => {
    const drift = (seed >>> (index * 5)) % 34;
    const emphasis = name === emphasizedElement ? 14 : 0;

    return {
      name,
      score: clamp(34 + drift + emphasis, 24, 86),
      tone: elementTones[name]
    };
  });

  const focusLabel = titleCase(selectedFocus);

  return {
    profile,
    displayName,
    dayMaster: `${dayStem.stem} ${dayStem.element}`,
    pillars,
    fiveElements,
    originPreview: `The origin layer frames ${displayName} through a ${profile.calendar} calendar record, with ${dayStem.element} as the central reference for self-reflection.`,
    rhythmPreview: `The rhythm layer gives ${focusLabel} a quiet emphasis, balancing elemental rhythm with a polished personal archive view.`,
    engine: {
      name: "fallback",
      version: "0.1.0",
      deterministic: true,
      realCalculation: false
    }
  };
}
