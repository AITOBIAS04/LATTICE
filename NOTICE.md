# Notice: modified version of World Monitor

This repository is a **modified version** of [World Monitor](https://github.com/koala73/worldmonitor),
Copyright (C) 2024-2026 Elie Habib, licensed under the GNU Affero General Public License v3
(see [LICENSE](LICENSE)). The original copyright, licence and attribution notices are kept
unchanged. It is used by AITOBIAS04 (Echelon) as a self-hosted data component.

## Corresponding Source

The source code for a running deployment of this fork is this repository at the deployed commit.
A deployment reports that commit at `/api/source`, and the web app footer links to it
("Source (modified fork)"), when the build knows the commit; otherwise both point to the repository.
The Railway seeder services build from this repository's `main` branch. Repository: https://github.com/AITOBIAS04/LATTICE

## Modifications

Changes relative to upstream `koala73/worldmonitor` (last merged upstream commit `a17a3383`, 2026-04-22). Dates are author dates;
the April commits were rebased onto that upstream commit:

| Date | Commit | Change |
|------|--------|--------|
| 2026-04-14 | `a29f40fd` | `vercel.json`: removed `ignoreCommand` |
| 2026-04-21 | `d6b150b4`, `83ea341c` | `Dockerfile`: `npm ci` to `npm install` (a lockfile dedupe was tried and reverted) |
| 2026-04-21 | `0f5824f7` | `docker/build-handlers.mjs`: mark satori, @resvg and yoga-wasm-web as external |
| 2026-04-21 | `f1d84892`, `4959bd9f`, `536394d3` | `.vercelignore`: exclude Railway-only code from Vercel deploys |
| 2026-04-21 | `17a66df4`, `9319b3bf` | `middleware.ts`: access gate for Echelon-only hosts |
| 2026-04-22 | `64d71d28` | `middleware.ts`: Echelon-only hosts moved to lattice subdomains |
| 2026-05-31 | `10860e09` | `scripts/seed-fuel-prices.mjs`: tolerate NZ and MX source failures |
| 2026-05-31 | `fa2af513` | `Dockerfile.seeder`: image for the scheduled seeder cron |
| see git log | this change | `NOTICE.md`, README notice, `/api/source` endpoint and footer source link |

The full history is in this repository's git log.
