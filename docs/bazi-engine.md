# BaZi Engine Adapter

## Current Engine

The app currently uses a deterministic fallback engine behind the BaZi adapter. It is not a real BaZi calculation engine. The fallback exists so product pages can render stable chart-shaped data while the engine contract is designed and verified.

## Adapter Boundary

UI code should depend on `calculateBaziChart` from `lib/bazi`, not the fallback engine directly. This keeps pages and components isolated from the underlying calculation provider.

When the real engine is added later, the implementation inside the adapter can be replaced while preserving the `BaziChart` output shape used by the frontend.

## Model Boundary

Models must not directly calculate Four Pillars. Four Pillars data should come from the deterministic adapter contract and, later, from a verified calculation engine.

## Future Verification

The real BaZi calculation task should include fixed sample profiles with known expected pillars, day master values, calendar handling, and edge cases before product copy depends on those results.
