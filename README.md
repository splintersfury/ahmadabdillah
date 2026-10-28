# sujood-syscalls

Personal site of Ahmad Abdillah. Essay series: **Between Sujood and Syscalls**.

Stack mirrors `threatunpacked` (Astro 4, GitHub Pages on push to main) so the
editing muscle memory transfers. Three content layers per the taeho.io
structure: `essays/` (long-form), `notes/` (short captures), `reading/`
(logged sources with takeaways).

## Commands

    npm run dev      # local dev server
    npm run build    # static build to dist/
    npm run preview  # serve the build

Note: builds print a harmless warning while `notes/` and `reading/` are empty;
it disappears once the first entry lands in each.

## Provenance

Both launch essays were ported verbatim (series H1 stripped, everything else
intact) from `~/Documents/projects/blog/drafts/` on 2026-10-28. Those drafts
date to 2026-03-29 and stay in place as source material.

## Publish checklist (in order)

1. Buy the domain (sweep results 2026-10-28, all RDAP-unregistered):

   | Domain | Status | Note |
   |---|---|---|
   | ahmadabdillah.com | available | recommended canonical, standard price |
   | ahmad.me / ahmad.blog | available | short vanity option |
   | ahmad.io / abdillah.io | available | check checkout for premium pricing |
   | ahmadabdillah.sg / abdillah.sg | available | SGNIC verification required |
   | ahmad.dev / abdillah.dev / ahmad.com / abdillah.com / ahmad.sg | taken | |

2. Update `site` in `astro.config.mjs` to the bought domain.
3. Create a GitHub repo, push, copy `deploy.yml` from threatunpacked's
   `.github/workflows/`, enable GitHub Pages (Source: GitHub Actions).
4. Point DNS at Pages (A records for apex or CNAME for www), add the custom
   domain in repo Settings > Pages, enforce HTTPS.
5. Decide the about-page boundary before going live: how much real-world
   identity lives there, and whether ThreatUnpacked gets a cross-link.
