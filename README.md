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

## Publish checklist (DONE 2026-10-28, ~2h from "do I have a site" to live)

1. [x] Domain bought: **ahmadabdillah.com** at Cloudflare Registrar.
2. [x] DNS: 4x A `185.199.108-111.153` @ apex + CNAME `www` → `splintersfury.github.io`, all DNS-only (grey cloud). Added via the Cloudflare dashboard internal API from the agent's browser session.
3. [x] GitHub repo `splintersfury/ahmadabdillah` (public), Pages via Actions workflow, custom domain attached.
4. [x] HTTPS: GitHub Let's Encrypt cert issued after a Pages config delete + recreate (the cert queue stalled for ~2h; the reset un-stuck it). `https_enforced: true` set via API.
5. [x] Theme: "Tahajjud Terminal" (own design, not the taeho clone). See commit cb2ec05.

Contingency notes:
- If the GitHub cert ever rots again: proxy the 5 records through Cloudflare (orange cloud) — the zone's edge cert covers apex + www instantly. Revert to grey cloud once GitHub's cert returns.
- The Cloudflare session lives in the `pw-login-chrome-profile` automation Chrome; dashboard API calls work from page context with cookie auth.
- Open editorial item: About-page boundary (ThreatUnpacked cross-link or not), and seeding the first note + reading entries.
