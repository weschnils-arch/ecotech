# EcoTech Styria — Client Feedback Round (2026-04-08)

**Status:** Spec — pending Nils approval before any code touches the repo.
**Trigger:** Email from Heinz Leitner on 2026-04-07. Meeting scheduled Wed 2026-04-08 15:00.
**Live site:** https://ecotech-nine.vercel.app/
**Codebase:** `work/websites/ECOTECH/Ecotech_Website/` (NOT `ECOTECH BU_March/` — that folder is the stale Feb version).

---

## 1. Client complaints (verbatim summary)

1. **Anwendungen still don't have subpages.** Only `/applications/agriculture` exists. The other 7 cards link to `/products`. The PDF `Content Homepage_ Ecotech Styria_v1.pdf` already contains the prepared text and layout for all 8 Anwendungen.
2. **Service & Ersatzteile content not fully visible.** Pages exist (`/sales/service`, `/sales/ersatzteile`) but they're missing the Schnecken-Aufbereitung block, the full "Ihre Vorteile" list, "Erstausrüster-Qualität über die ganze Maschinenlebensdauer", and the placeholder contact data slots.
3. **"Siehe Partner der TCS Umwelttechnik" is publicly visible.** That string was meant only as a hint for me, never to be on the live site. It currently lives hardcoded in `src/context/LanguageContext.tsx` line 134 (DE), line 268 (link key), and line 604 (EN).
4. **Markup tool issue** — comments and numbers got duplicated across pages. Not a code fix; just acknowledge in the meeting.

---

## 2. What we're building

### 2.1 TCS bug — kill it first

Smallest, highest-visible fix. One minute of work.
- Delete `'sales.partner.tcs.link'` (DE+EN) and any usage in `SalesPage.tsx`.
- Rewrite `'sales.findPartner.desc'` (DE+EN) to a clean line: *"Finden Sie unseren Vertriebspartner für Ihre Region. Kein passender Partner dabei? Sprechen Sie direkt mit unserer Zentrale."*
- Done before any other change ships, so even if the rest of this scope slips, the embarrassing line is gone.

### 2.2 Vertriebspartner finder — TCS-style country selector

Replace the current `BecomePartnerSection` block on `/sales` with a TCS-style architecture so EcoTech can extend the partner network later without code changes.

**Reference:** https://www.tcs-umwelttechnik.at/ueber-uns/vertriebspartner/

**Layout (top to bottom):**
1. Section header — "Vertriebspartner finden"
2. `Land wählen` dropdown — populated from the partners data file. Default: "Alle Länder".
3. Partner cards grid (2 columns desktop, 1 mobile). Each card:
   - Company name
   - Contact person
   - Address (street, postal code, city, country)
   - Phone (`tel:` link)
   - Email (`mailto:` link)
   - Website (when available)
4. **Fallback CTA #1** — "Sie haben keinen passenden Vertriebspartner gefunden?" → "Wenden Sie sich direkt an unsere Zentrale" → button "Kontakt aufnehmen". Shown when the selected country has zero partners (and as a permanent block below the grid).
5. **Fallback CTA #2** — "Sie möchten unser Vertriebspartner werden?" → existing partner-application form (the form we already have). Button label: "Partner werden".

**Initial data (`src/data/partners.ts`):**
- Only Austria filled in for now, with two cards:
  - **Günther Pirker** — CSO — T: +43 664 155 4896 — g.pirker@ecotechstyria.com
  - **Heinz Leitner** — CEO — T: +43 664 120 8711 — h.leitner@ecotechstyria.com
  - Both with company "Ecotech Styria GmbH", address "Judenburgerstraße 176, A-8580 Köflach"
- Country dropdown still includes the typical DACH+CEE countries from TCS so the structure is visible (Deutschland – Bayern, Deutschland – Nord, Slowenien, Kroatien, Ungarn, Tschechien, etc.) — selecting them shows the empty-state CTA. EcoTech can populate them by adding entries to the data file later.

**Architecture rule:** the page reads from `src/data/partners.ts` only. No hardcoded partners in JSX. Adding a partner = appending an object, nothing else.

### 2.3 Anwendungen subpages — one layout, eight pages

The current state is 1/8. The PDF delivers fully prepared content for all 8 — and every Anwendung in the PDF uses the **exact same template**: hero with green "Anwendung" badge → title + subtitle → two CTA buttons → intro paragraphs → Kurzfakten sidebar → Ihre Vorteile list → Typische Anwendungen list → final green CTA box ("Gemeinsam zur optimalen Lösung").

Build pattern: **one shared layout component fed from one data file**, not 8 hand-coded pages.

**New files:**
- `src/data/applications.ts` — array of 8 entries. Each entry has: `slug`, `title`, `badgeLabel`, `subtitle`, `heroImage`, `icon`, `intro` (string[]), `kurzfakten` (string[]), `vorteile` (string[]), `typischeAnwendungen` (string[]), `ctaBoxTitle`, `ctaBoxDesc`. Content lifted directly from the PDF.
- `src/components/AnwendungLayout.tsx` — renders the shared template from one entry. Reused by all 8 Anwendungen + the 2 Engineering pages.
- `src/pages/AnwendungPage.tsx` — single page component. Reads slug from route, looks up entry, passes to layout. Returns 404-style fallback if slug unknown.

**Router change:**
- Replace the static `'/applications/agriculture'` route with a `/applications/:slug` pattern. Slugs: `landwirtschaft`, `bio-einstreu`, `biogas`, `kunststoffrecycling`, `kommunale-anwendungen`, `zellstoff-papier`, `holzfaserplatten`, `lebensmittelindustrie`.
- ApplicationsPage cards: change each `Link to=` from `/products` to `/applications/<slug>`.

**Migrate AgriculturePage:**
- The existing manure/biogas split inside `AgriculturePage.tsx` becomes the `intro` + `vorteile` of the `landwirtschaft` entry. Delete the file after migration so all 8 feel like one product, not "the agriculture one + 7 others".

**Slug ↔ PDF mapping:**

| slug | PDF page title | hero image |
|---|---|---|
| `landwirtschaft` | "Landwirtschaft – Gülle separieren, Nährstoffe gezielt einsetzen" | reuse hero-agriculture-higgs.png |
| `bio-einstreu` | "Bio-Einstreu aus eigener Produktion" | app-bedding.webp |
| `biogas` | "Biogas: Separieren. Stabilisieren. Effizienz steigern." | app-biogas.webp |
| `kunststoffrecycling` | "Kunststoff Recycling" | app-recycling.png |
| `kommunale-anwendungen` | "Kommunale Anwendungen" | app-municipal.jpg |
| `zellstoff-papier` | "Zellstoff & Papier" | app-paper.webp |
| `prozessmedien-und-abwaesser` | "Prozessmedien und Abwässer" (body: PDF Holzfaserplatten content) | app-mdf.png |
| `nebenprodukte-und-abwaesser` | "Nebenprodukte und Abwässer" (body: PDF Lebensmittelindustrie content) | app-food.webp |

### 2.4 Anwendungen homepage card label fix (markup #6/#7)

Markup #6 said rename "MDF → Prozessmedien und Abwässer". Markup #7 said rename "Lebensmittel → Nebenprodukte und Abwässer". The PDF still calls the dedicated subpages "Holzfaserplatten" and "Lebensmittelindustrie".

**Decision (Nils, 2026-04-08):** Use the renamed versions everywhere — both the homepage card label AND the subpage h1.
- `mdf` slot → "Prozessmedien und Abwässer" (card + subpage h1 + slug `prozessmedien-und-abwaesser`)
- `food` slot → "Nebenprodukte und Abwässer" (card + subpage h1 + slug `nebenprodukte-und-abwaesser`)

The dedicated subpages still use the PDF's body content (Holzfaserplatten / Lebensmittelindustrie text) but framed under the more general headlines.

### 2.5 Service & Ersatzteile content fill

**ErsatzteilePage** — extend with content from PDF page 7-8:
- Full "Ihre Vorteile" list with "Erstausrüster-Qualität über die ganze Maschinenlebensdauer", "Immer am aktuellen Stand", "Bestes Preis-Leistungs-Verhältnis" with the longer descriptions.
- Schnecken-Aufbereitung block ("Aufbereitung von Schnecken – Qualität im Kern des Separators") — this is a major selling point currently completely missing from the live page.
- Kontakt block: "Ihr Kontakt für Ersatzteile bei Ecotech Styria" — Tel + spareparts@ecotechstyria.com + opening hours.

**ServicePage** — extend with content from PDF page 9-10:
- Full intro paragraphs from the PDF.
- "Regelmäßiger Service mit Ecotech Styria hilft" full bullet list (already mostly there).
- "Schlüsselfertige Installation Ihrer neuen Maschine oder Anlage" block.
- Three "Prioritäten" tile cards from PDF page 10 mockup: "Hohe Anlagenverfügbarkeit", "Niedrigste Aufbereitungskosten", "Wartungsfreundliches Design".
- Kontakt block with opening hours (Mo–Do 08:00–16:00, Fr 08:00–14:00).

**Note:** the PDF leaves several contact slots as `xxxx` (phone for spare parts, contact for technik/einkauf). Mark these as TODO comments in the data file so the client meeting can clarify.

### 2.6 Markup 3.april sweep

Memory says 18/27 markup items were done as of 2026-04-03. Re-walk the `Markup 3.april/` folder, list every still-open item, and resolve them inline with the build session. Most are likely small (reorder sections, swap images, fix labels).

### 2.7 architecture.md

Per the new mandatory rule (`feedback_maintain_architecture_md.md`), every active project must have a living `architecture.md` at root. ECOTECH/ already has `ARCHITECTURE.md` — verify it documents the new routes, the data-driven Anwendungen pattern, the partners data file pattern, and the deferred items (empty countries, missing contact data). Update it as the last step of the build session.

---

## 3. Build order

This is the sequence for the next session — not for now. Now is approval only.

1. **TCS bug killed** (~1 min) — biggest visible client complaint, ship-able on its own if everything else slips.
2. **Vertriebspartner finder rebuild** — country selector + cards + fallback CTAs + `partners.ts` data file.
3. **AnwendungLayout + applications.ts + dynamic /applications/:slug route** — the core lift.
4. **Migrate AgriculturePage into the layout** — delete the old file. Verify the existing card still points to the right slug.
5. **Apply markup #6/#7 label rename on the homepage cards** (per Nils's answer to the open question).
6. **Fill ServicePage + ErsatzteilePage content** from PDF.
7. **Sweep remaining Markup 3.april items.**
8. **Update ARCHITECTURE.md.**
9. **Build, verify locally, deploy ONLY after Nils explicitly says deploy.**

---

## 4. Out of scope for this round

- Engineering subpages (Systemintegration Planung + Installation/Inbetriebnahme) — the PDF has content for them but the client email didn't flag them. Defer to a follow-up round.
- Karriere page from PDF — same reasoning.
- Über uns "Next Level Separation" rewrite — same reasoning.
- Image swaps for Anwendungen heroes — keep the current images for speed; the meeting will determine which ones the client wants replaced.
- The markup tool duplication issue — that's a markup.io platform bug, not a code change. Acknowledge in the meeting and move on.

---

## 5. Decisions (locked 2026-04-08)

1. **Q1 — scope:** Full scope before Wed 15:00 meeting. High quality design + consistent spacing required.
2. **Q2 — labels:** Renamed versions everywhere (cards + subpage h1s). See section 2.4.

---

## 6. Files that will change in the build session

- `src/context/LanguageContext.tsx` — TCS strings removed/rewritten
- `src/router.tsx` — dynamic `/applications/:slug` route
- `src/pages/ApplicationsPage.tsx` — card links updated, two label renames
- `src/pages/SalesPage.tsx` — Vertriebspartner section replaced with new finder
- `src/pages/ServicePage.tsx` — content fill from PDF
- `src/pages/ErsatzteilePage.tsx` — content fill from PDF
- `src/pages/AgriculturePage.tsx` — DELETED (migrated into data)
- `src/pages/AnwendungPage.tsx` — NEW
- `src/components/AnwendungLayout.tsx` — NEW
- `src/components/PartnerFinder.tsx` — NEW
- `src/data/applications.ts` — NEW
- `src/data/partners.ts` — NEW
- `ARCHITECTURE.md` — updated
