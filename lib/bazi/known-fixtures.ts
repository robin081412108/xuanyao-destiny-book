export type KnownBaziFixture = {
  id: string;
  description: string;
  input: {
    date: string;
    time?: string;
    calendar: "solar" | "lunar";
    location?: string;
    timezone?: string;
  };
  expected?: {
    yearPillar?: string;
    monthPillar?: string;
    dayPillar?: string;
    hourPillar?: string;
    dayMaster?: string;
  };
  notes: string;
  verificationStatus: "pending" | "verified";
};

const pendingNote =
  "Pending verification against authoritative calendar references and at least two independent BaZi tools before expected values are accepted.";

export const knownBaziFixtures: KnownBaziFixture[] = [
  {
    id: "solar-beijing-midday-1990",
    description: "Solar calendar profile in Beijing with a clear midday time.",
    input: {
      date: "1990-01-01",
      time: "12:30",
      calendar: "solar",
      location: "Beijing, China",
      timezone: "Asia/Shanghai"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-new-york-dst-1990",
    description: "New York profile during daylight saving time.",
    input: {
      date: "1990-07-15",
      time: "09:10",
      calendar: "solar",
      location: "New York, United States",
      timezone: "America/New_York"
    },
    notes: `${pendingNote} DST handling must be explicit.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-london-winter-1988",
    description: "London winter profile outside daylight saving time.",
    input: {
      date: "1988-12-21",
      time: "23:05",
      calendar: "solar",
      location: "London, United Kingdom",
      timezone: "Europe/London"
    },
    notes: `${pendingNote} Late-night hour pillar needs careful boundary review.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-singapore-wealth-focus",
    description: "Singapore profile for a stable UTC+8 location.",
    input: {
      date: "1988-08-08",
      time: "08:08",
      calendar: "solar",
      location: "Singapore",
      timezone: "Asia/Singapore"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-taipei-midnight-boundary",
    description: "Taipei profile near the midnight boundary.",
    input: {
      date: "1992-03-04",
      time: "00:05",
      calendar: "solar",
      location: "Taipei, Taiwan",
      timezone: "Asia/Taipei"
    },
    notes: `${pendingNote} Day and hour boundary behavior must be reviewed.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-tokyo-noon-2001",
    description: "Tokyo profile with standard Japan timezone handling.",
    input: {
      date: "2001-09-09",
      time: "12:00",
      calendar: "solar",
      location: "Tokyo, Japan",
      timezone: "Asia/Tokyo"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-sydney-summer-dst",
    description: "Sydney profile during southern hemisphere daylight saving time.",
    input: {
      date: "1995-01-20",
      time: "17:45",
      calendar: "solar",
      location: "Sydney, Australia",
      timezone: "Australia/Sydney"
    },
    notes: `${pendingNote} DST and longitude policy must be documented.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-los-angeles-before-dawn",
    description: "Los Angeles profile before dawn.",
    input: {
      date: "1985-06-30",
      time: "04:20",
      calendar: "solar",
      location: "Los Angeles, United States",
      timezone: "America/Los_Angeles"
    },
    notes: `${pendingNote} Solar time adjustment policy is a later decision.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-vancouver-year-end",
    description: "Vancouver profile near Gregorian year end.",
    input: {
      date: "1979-12-31",
      time: "22:40",
      calendar: "solar",
      location: "Vancouver, Canada",
      timezone: "America/Vancouver"
    },
    notes: `${pendingNote} Year pillar rule around solar terms must be checked.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-before-lichun-1988",
    description: "Profile just before the common Li Chun boundary window.",
    input: {
      date: "1988-02-03",
      time: "21:00",
      calendar: "solar",
      location: "Shanghai, China",
      timezone: "Asia/Shanghai"
    },
    notes: `${pendingNote} Year and month pillar transition rules are high risk.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-after-lichun-1988",
    description: "Profile just after the common Li Chun boundary window.",
    input: {
      date: "1988-02-05",
      time: "09:00",
      calendar: "solar",
      location: "Shanghai, China",
      timezone: "Asia/Shanghai"
    },
    notes: `${pendingNote} Must compare against the before-boundary fixture.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-leap-day-2000",
    description: "Leap day solar calendar profile.",
    input: {
      date: "2000-02-29",
      time: "13:14",
      calendar: "solar",
      location: "Hong Kong",
      timezone: "Asia/Hong_Kong"
    },
    notes: `${pendingNote} Leap day conversion should be covered.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-missing-time",
    description: "Solar profile without birth time.",
    input: {
      date: "1979-11-23",
      calendar: "solar",
      location: "Kuala Lumpur, Malaysia",
      timezone: "Asia/Kuala_Lumpur"
    },
    notes: `${pendingNote} Hour pillar should remain unset or explicitly handled.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-missing-location",
    description: "Solar profile with date and time but no location.",
    input: {
      date: "1993-05-16",
      time: "19:45",
      calendar: "solar"
    },
    notes: `${pendingNote} Default timezone behavior must be a product decision.`,
    verificationStatus: "pending"
  },
  {
    id: "lunar-new-year-1996",
    description: "Lunar calendar profile near a lunar new year period.",
    input: {
      date: "1996-01-01",
      time: "06:15",
      calendar: "lunar",
      location: "Guangzhou, China",
      timezone: "Asia/Shanghai"
    },
    notes: `${pendingNote} Lunar-to-solar conversion needs authoritative review.`,
    verificationStatus: "pending"
  },
  {
    id: "lunar-midmonth-1984",
    description: "Lunar calendar midmonth profile.",
    input: {
      date: "1984-06-15",
      time: "11:30",
      calendar: "lunar",
      location: "Taipei, Taiwan",
      timezone: "Asia/Taipei"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "lunar-year-end-2002",
    description: "Lunar calendar profile near lunar year end.",
    input: {
      date: "2002-12-29",
      time: "20:20",
      calendar: "lunar",
      location: "Beijing, China",
      timezone: "Asia/Shanghai"
    },
    notes: `${pendingNote} Lunar year rollover must be checked.`,
    verificationStatus: "pending"
  },
  {
    id: "lunar-leap-month-policy",
    description: "Lunar profile reserved for leap-month policy validation.",
    input: {
      date: "1995-08-01",
      time: "10:10",
      calendar: "lunar",
      location: "Chengdu, China",
      timezone: "Asia/Shanghai"
    },
    notes: `${pendingNote} A future schema may need an explicit leap-month flag.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-paris-summer",
    description: "Paris summer profile with European daylight saving time.",
    input: {
      date: "1991-07-22",
      time: "15:35",
      calendar: "solar",
      location: "Paris, France",
      timezone: "Europe/Paris"
    },
    notes: `${pendingNote} Timezone database handling should be fixed.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-dubai-standard-time",
    description: "Dubai profile in a non-DST region.",
    input: {
      date: "1999-04-18",
      time: "18:25",
      calendar: "solar",
      location: "Dubai, United Arab Emirates",
      timezone: "Asia/Dubai"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-bangkok-evening",
    description: "Bangkok profile in UTC+7.",
    input: {
      date: "1982-10-10",
      time: "21:50",
      calendar: "solar",
      location: "Bangkok, Thailand",
      timezone: "Asia/Bangkok"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-seoul-morning",
    description: "Seoul profile with Korea timezone handling.",
    input: {
      date: "2004-03-01",
      time: "07:05",
      calendar: "solar",
      location: "Seoul, South Korea",
      timezone: "Asia/Seoul"
    },
    notes: pendingNote,
    verificationStatus: "pending"
  },
  {
    id: "solar-manila-afternoon",
    description: "Manila profile in UTC+8 outside China.",
    input: {
      date: "1975-05-05",
      time: "14:55",
      calendar: "solar",
      location: "Manila, Philippines",
      timezone: "Asia/Manila"
    },
    notes: `${pendingNote} Longitude and civil-time policy should be explicit.`,
    verificationStatus: "pending"
  },
  {
    id: "solar-honolulu-date-line",
    description: "Honolulu profile for date-line and timezone policy review.",
    input: {
      date: "1987-09-17",
      time: "23:30",
      calendar: "solar",
      location: "Honolulu, United States",
      timezone: "Pacific/Honolulu"
    },
    notes: `${pendingNote} Date-line behavior must be compared carefully.`,
    verificationStatus: "pending"
  }
];
