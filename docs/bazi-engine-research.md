# BaZi Engine Research

## Sources Checked

- `lunar-javascript`: https://github.com/6tail/lunar-javascript
- `lunar-typescript`: https://github.com/6tail/lunar-typescript
- `solarlunar`: https://github.com/yize/solarlunar
- `lunar-calendar`: https://github.com/rongyan6/LunarCalendar

No dependency is installed in this task. The purpose is to document candidate
directions, establish verification fixtures, and keep production UI on the
existing fallback adapter until a real engine can be accepted safely.

## Candidate Libraries / Approaches

### 1. Npm Chinese calendar / lunar calendar libraries

Examples reviewed:
- `lunar-javascript` / `lunar-typescript`: broad calendar libraries with solar,
  lunar, solar terms, stems/branches, BaZi, five elements, and related calendar
  metadata. The repositories are MIT licensed and maintained by the same author.
- `solarlunar`: a typed solar-lunar conversion library with stems/branches and
  24 solar terms support. The repository states ISC license and a 1900-2100
  calculation range.
- `lunar-calendar`: an older Node/browser calendar library with solar-lunar
  conversion, solar terms, and stems/branches over a documented 1891-2100 range.

Pros:
- Fastest route to a working real engine prototype.
- Some candidates already expose solar/lunar conversion, solar terms, and
  stems/branches.
- Avoids implementing large calendar tables from scratch in the first pass.

Cons:
- BaZi output policy may differ from our intended rules.
- Timezone, solar time, Li Chun, and hour boundary behavior may not match product
  expectations.
- Package APIs may be broad and include unrelated traditional calendar metadata
  that should not leak into product copy.

Maintenance risk:
- `lunar-javascript` and `lunar-typescript` appear active enough to evaluate, but
  we still need pinned versions and changelog review.
- Older packages may be stable but lightly maintained, which increases ownership
  burden if edge cases appear.

License risk:
- MIT and ISC are likely workable, but legal review should confirm package-level
  license files and any bundled data provenance before adoption.

Accuracy verification risk:
- High. A package claim is not enough. We need fixed fixtures with known outputs
  from authoritative references and at least two independent tools.

Timezone / solar time / lunar calendar risk:
- High. Civil timezone, daylight saving time, optional true solar time,
  lunar-to-solar conversion, leap lunar months, and solar term boundaries must be
  explicit in the adapter contract.

Why not install now:
- The project does not yet have verified expected results. Installing a package
  before fixture verification risks presenting unverified calculations as product
  truth.

### 2. Calendar conversion library + self-owned stem/branch calculation

Pros:
- Smaller dependency surface if the external package is limited to date
  conversion and solar terms.
- Gives us ownership over the Four Pillars policy layer.
- Easier to unit test rule decisions once expected fixtures are verified.

Cons:
- More implementation work.
- Requires careful documentation of year, month, day, and hour pillar rules.
- Still depends on the accuracy of the conversion and solar-term source.

Maintenance risk:
- Medium. We own more code, but fewer third-party APIs can drift under us.

License risk:
- Lower if we keep dependency scope small, but still requires review for calendar
  data tables and algorithms.

Accuracy verification risk:
- High. Self-owned calculations must be checked against known fixtures before
  enabling `realCalculation`.

Timezone / solar time / lunar calendar risk:
- High. This approach makes timezone and solar-time decisions our
  responsibility.

Why not install now:
- We need fixture coverage first, then a prototype branch can compare a conversion
  package against the fixture set.

### 3. Server-side deterministic implementation

Pros:
- Best long-term control over deterministic output and versioned calculation
  policy.
- Keeps calculation code away from browser bundles if desired.
- Can enforce a single timezone, solar time, and calendar conversion policy.

Cons:
- Highest implementation effort.
- Requires a reliable source of solar terms and lunar conversion data.
- Needs extensive fixture verification before release.

Maintenance risk:
- Medium to high. We own correctness and future calendar edge cases.

License risk:
- Depends on the data source. Public-domain or internally verified tables would
  be preferred.

Accuracy verification risk:
- High until fixture tests cover representative years, lunar dates, timezones,
  and boundary cases.

Timezone / solar time / lunar calendar risk:
- High but controllable because decisions live in one server-side module.

Why not build now:
- This task is research and fixture preparation only. A real implementation
  should wait until expected results are verified.

### 4. API service option

Pros:
- Potentially fastest integration if a reliable provider exists.
- Externalizes calendar complexity.

Cons:
- Opaque calculation policy.
- Service reliability, privacy, latency, cost, and data retention concerns.
- Harder to reproduce results if the provider changes behavior.

Maintenance risk:
- High because the project depends on a third party outside the codebase.

License risk:
- Service terms must be reviewed. Some providers may restrict commercial use,
  caching, or derived outputs.

Accuracy verification risk:
- High unless the provider exposes rule details and can be checked against our
  fixtures.

Timezone / solar time / lunar calendar risk:
- High if the API does not document timezone, solar time, lunar leap-month, and
  solar-term boundary rules.

Why not recommended for MVP:
- The MVP should be deterministic and auditable. An opaque service is a poor fit
  until product, privacy, and accuracy requirements are settled.

## Recommendation

Do not activate a real engine yet.

The next step should be:
1. Keep the current deterministic fallback adapter in production UI.
2. Build and review a known fixture set with pending expected values.
3. Verify expected values manually or with authoritative tools.
4. Prototype `lunar-typescript` or `lunar-javascript` behind the existing
   `calculateBaziChart` adapter in a non-production branch.
5. Compare prototype output against verified fixtures.
6. Only set `engine.realCalculation` to `true` after fixture verification passes
   and calculation policy is documented.

The safest likely path is a two-stage implementation: use a calendar library for
solar/lunar conversion and solar terms, then own the Four Pillars policy layer in
the adapter so edge-case decisions remain explicit and testable.
