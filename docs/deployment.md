# Deployment

## Current Deployment Target

- Vercel preview deployment.
- No custom domain is included in this task.
- No production payment is included in this task.

## Required GitHub Repo

Use this repository:

`robin081412108/xuanyao-destiny-book`

## Vercel Setup Checklist

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Install command: `npm install` or `npm ci`.
6. Environment variables: none required for the current preview build.
7. Deploy.

## After Deployment

Open the generated Vercel preview URL and check:

- `/`
- `/preview`
- `/checkout`
- `/result/preview-token`
- `/bazi-calculator`

## Known Limitations

- No real payment.
- No persistence.
- No order verification.
- Result page uses deterministic fallback adapter.
- Real BaZi calculation later.
- Domain binding later.
