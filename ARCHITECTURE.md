# EcoTech Styria — Website Architecture

> Stand: 2026-04-08

## Letzte Session (2026-04-08)

Trigger war eine E-Mail von Heinz Leitner (2026-04-07): Anwendungen ohne Subpages, Service/Ersatzteile-Texte nicht voll sichtbar, "Siehe Partner der TCS Umwelttechnik" steht öffentlich auf der Seite. Meeting mit dem Client geplant für **Mittwoch 2026-04-08 15:00**.

**Was gebaut wurde:**

1. **TCS-Bug eliminiert** — alle "TCS Umwelttechnik"-Referenzen aus `LanguageContext.tsx` (DE+EN) und `SalesPage.tsx` entfernt. Bug ist tot.
2. **Vertriebspartner-Finder im TCS-Stil** — neue `PartnerFinder.tsx` Komponente mit `Land wählen` Dropdown. Daten in `src/data/partners.ts` (aktuell nur Pirker + Leitner unter Österreich; andere DACH+CEE-Länder im Dropdown sichtbar mit Empty-State-CTA, damit der Client später einfach Partner anhängen kann).
3. **Alle 8 Anwendungs-Subpages live** — gerendert von einer einzigen `AnwendungLayout.tsx` Komponente, gefüttert aus `src/data/applications.ts`. Inhalte direkt aus `Content Homepage_v1.pdf` übernommen.
4. **Markup #6/#7 Labels umgesetzt** — "MDF" → "Prozessmedien und Abwässer", "Lebensmittel" → "Nebenprodukte und Abwässer". Sowohl auf den Karten als auch auf den Subpage-h1.
5. **`AgriculturePage.tsx` gelöscht** — Inhalt in den `landwirtschaft`-Eintrag des Data-Files migriert.
6. **`/sales` enriched** — substanzielle Preview-Sektionen für Ersatzteile und Service direkt auf der Hauptseite, damit der Client die Inhalte ohne Klick sieht.
7. **`/sales/service` Prioritäten-Sektion** — drei Tile Cards aus PDF Folie 10 (Hohe Anlagenverfügbarkeit, Niedrigste Aufbereitungskosten, Wartungsfreundliches Design) ergänzt.
8. **Router** — dynamische `/applications/:slug` Pattern in `App.tsx`, plus `hashchange` Listener in `router.tsx` (Browser-Back/Forward funktioniert jetzt).
9. **Zu GitHub gepusht** — Commit `a9e823c7` auf `main`. Vercel auto-deployed.

**Spec-Doc:** `docs/specs/2026-04-08-client-feedback-round-design.md` (vollständige Begründung + Build-Order)

**Wo morgen anfangen:**
1. Erst auf https://ecotech-nine.vercel.app/ checken ob der Vercel-Deploy sauber durchgelaufen ist.
2. Meeting mit Heinz Leitner um 15:00 — die offenen Punkte aus dem Markup-Sweep durchgehen (siehe `## Offene Punkte` unten). Vor allem klären: DSC-Fotos für Produktgalerien, Voreindicker/Circulyizer Inhalte, Spareparts-Telefonnummer, Technik/Einkauf-Kontakt.
3. Nach dem Meeting: priorisierte Liste aus den offenen Punkten abarbeiten.

---

## Projekt

- **Client:** EcoTech Styria GmbH (Köflach, Österreich) — Fest-Flüssig-Separation
- **Live:** https://ecotech-nine.vercel.app
- **Repo:** https://github.com/weschnils-arch/ecotech
- **Deploy:** Vercel (auto-deploy on push to main)

## WICHTIG: Richtige Codebase

```
work/websites/ECOTECH/Ecotech_Website     ← AKTIV (hier arbeiten!)
work/websites/ECOTECH BU_March/            ← BACKUP/ALT (nur für Assets/Client-Material)
```

Client-Materialien (Bilder, Präsentationen, Feedback):
- `ECOTECH BU_March/Informationen:Content:Daten/` — Rohdaten, Fotos, Broschüren
- `ECOTECH BU_March/Anpassungen.1April/` — Markup-Feedback, Screenshots, neue Bilder
- `ECOTECH BU_March/Anpassungen.1April/Anwendungen/` — Neue App-Bilder
- `ECOTECH BU_March/Content Homepage_ Ecotech Styria_v1.pptx - Google Präsentationen.pdf` — Präsentation als PDF

## Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7.3 |
| Styling | Tailwind CSS 3 (+ shadcn/ui Komponenten) |
| Routing | Custom hash-based SPA Router (`src/router.tsx`) |
| i18n | Custom LanguageContext (DE/EN) |
| Icons | Lucide React |
| Animations | CSS + IntersectionObserver (`useScrollAnimation`) |

## Routing

| Route | Page | Beschreibung |
|---|---|---|
| `/` | HomePage | Hero, About, Applications, Parallax, Why, Produkte, News |
| `/about` | AboutPage | Team, Vision/Mission, Kontakt, Standort |
| `/applications` | ApplicationsPage | 8 Anwendungsbereiche mit Overlay-Animationen |
| `/applications/:slug` | AnwendungPage | **Dynamische Subpage** für jede Anwendung — gerendert von `AnwendungLayout` aus `data/applications.ts` |
| `/sales` | SalesPage | Vertriebspartner-Finder (`PartnerFinder` mit Country-Selector), CTAs, Ersatzteile- & Service-Preview |
| `/sales/ersatzteile` | ErsatzteilePage | Vollständige Ersatzteile-Subpage (Folien 7-8) |
| `/sales/service` | ServicePage | Service & Inbetriebnahme + Prioritäten-Tiles (Folien 9-10) |
| `/products` | ProductsPage | BGII-800, BGI-400, Voreindicker, Circulyizer |
| `/integration` | IntegrationPage | Planung, Installation |
| `/news` | NewsPage | News, Downloads |
| `/terms` `/privacy` `/imprint` `/dealers` | LegalPages | Rechtliches |

### Anwendungs-Slugs (8)

`landwirtschaft`, `bio-einstreu`, `biogas`, `kunststoffrecycling`, `kommunale-anwendungen`, `zellstoff-papier`, `prozessmedien-und-abwaesser` (renamed von MDF), `nebenprodukte-und-abwaesser` (renamed von Lebensmittelindustrie).

## Dateistruktur

```
src/
├── App.tsx                    # Router + Layout (dynamic /applications/:slug match)
├── router.tsx                 # Hash SPA Router with hashchange listener for back/forward
├── context/
│   └── LanguageContext.tsx     # i18n (DE/EN)
├── components/
│   ├── Header.tsx             # Sticky Nav, Scroll-Erkennung, Mobile Menu
│   ├── Footer.tsx
│   ├── SubpageHero.tsx        # Wiederverwendbarer Hero mit diagonalem Cut
│   ├── PartnerFinder.tsx      # NEU — TCS-style Vertriebspartner-Finder + Footer-CTAs
│   ├── AnwendungLayout.tsx    # NEU — geteilte Layout-Komponente für alle Anwendungs-Subpages
│   ├── BackgroundBlob.tsx
│   └── ui/                    # shadcn/ui (legacy, sparingly used)
├── data/                       # NEU — datengetriebene Inhalte (single source of truth)
│   ├── applications.ts        # Alle 8 Anwendungen (DE+EN inline, kein i18n-Key-Management nötig)
│   └── partners.ts            # Vertriebspartner — appendable für neue Länder
├── hooks/
│   ├── useScrollAnimation.ts
│   └── use-mobile.ts
├── pages/
│   ├── HomePage.tsx           # liest Anwendungen aus data/applications.ts
│   ├── AboutPage.tsx
│   ├── ApplicationsPage.tsx   # liest aus data/applications.ts
│   ├── AnwendungPage.tsx      # NEU — generische Subpage, slug→entry→Layout
│   ├── SalesPage.tsx          # PartnerFinder + Preview-Sektionen (Ersatzteile/Service)
│   ├── ErsatzteilePage.tsx
│   ├── ServicePage.tsx        # mit Prioritäten-Tiles
│   ├── ProductsPage.tsx
│   ├── IntegrationPage.tsx
│   ├── NewsPage.tsx
│   └── LegalPages.tsx
└── index.css                  # Tailwind + Custom Styles + Animationen
```

## Bilder

Alle Bilder in `public/images/`. Formate: WebP bevorzugt, einige noch JPG/PNG.

- `hero-home-new.png` — Homepage Hero (NICHT ÄNDERN)
- `hero-*` — Subpage Heroes
- `app-*.webp` — Anwendungsbilder (5 neue vom 2026-04-03)
- `product-bg2*.webp` — BGII-800 Gallery (6 Bilder)
- `product-bgi*.webp` — BGI-400 Gallery (5 Bilder)
- `team-*.png/.webp` — Teamfotos
- `logo.png`, `logo-signet.png` — Logos
- `parallaxhome.png` — Parallax-Sektion

## Homepage Section-Reihenfolge

1. HeroSection (hero-home-new.png, Neon-Glow-Animation)
2. AboutSection (Text + diagonale grüne Form, KEIN Stats-Box)
3. ApplicationsSection (8 Karten, 4er Grid)
4. ParallaxSection (Parallax-Bild mit diagonalen Masken)
5. WhySection (6 Boxen "Warum separieren?")
6. ProductsSection (BGII-800 + BGI-400 Karten)
7. NewsSection (3 expandierbare News-Karten)

## Übersetzungssystem

`LanguageContext.tsx` enthält alle Texte als Key-Value in DE und EN.
Jeder sichtbare Text MUSS über `t('key')` eingebunden werden — keine hardcoded Strings.

Wichtige Namespaces:
- `hero.*`, `about.*` — Homepage
- `applications.*` — Anwendungen
- `products.*`, `productpage.*` — Produkte
- `why.*` — Warum separieren
- `aboutpage.*` — Über uns Seite
- `sales.*` — Vertrieb
- `ersatzteile.*` — Ersatzteile Subpage
- `service.*` — Service Subpage
- `integration.*` — Systemintegration
- `optimization.*` — Prozessoptimierung (Mission-Text)

## Markup.io Feedback

- **Invite Token:** `RgaT2kF_`
- **API:** `https://api.markup.io/api/v1/project/{id}/thread` mit Header `markup-invite: RgaT2kF_`
- **Client-Feedback:** Günther Pirker (CSO) + Heinz Leitner (CEO)
- **Feedback-Ordner:** `ECOTECH BU_March/Anpassungen.1April/Markup 3.april/` — Screenshots mit beschreibenden Dateinamen
- **Content-Slides:** `ECOTECH BU_March/Content Homepage_ Ecotech Styria_v1.pptx - Google Präsentationen.pdf`

## Patterns (wichtig zu verstehen, bevor man hier arbeitet)

### Datengetriebene Anwendungen
Alle 8 Anwendungs-Subpages werden aus `src/data/applications.ts` gerendert. Jeder Eintrag enthält DE+EN inline (kein LanguageContext-Roundtrip). Adding a 9th Anwendung = ein neuer Objekt-Eintrag in der Datei. KEINE neue Page-Komponente, KEIN neuer Router-Eintrag, KEIN neuer i18n-Key. Die Layout-Komponente (`AnwendungLayout.tsx`) bleibt unverändert.

### Datengetriebener Partner-Finder
`src/data/partners.ts` ist die einzige Quelle für Vertriebspartner-Karten. `additionalCountries` liefert leere Länder, die im Dropdown sichtbar sind und den Empty-State-CTA triggern. Neuen Partner hinzufügen = Eintrag anhängen. Architektur ist 1:1 dem TCS-Umwelttechnik Vertriebspartner-Pattern nachgebaut.

### Anwendungs-Routing
Statt 8 hardcoded Routen gibt es eine Pattern-Match in `App.tsx`: `path.startsWith('/applications/') && path !== '/applications'` → `<AnwendungPage slug={...} />`. Slug wird in `AnwendungPage` an `getApplicationBySlug()` aus dem data file weitergegeben. Unbekannte Slugs redirecten zurück zu `/applications`.

## Hard rules (gelernt aus vorherigen Iterationen)

- **Niemals deployen ohne explizite Erlaubnis von Nils.** Keine Ausnahmen.
- **TCS Umwelttechnik darf NIRGENDS auf der Seite erscheinen.** Der Hinweis im Pitch-Material ist nur eine Orientierungshilfe für uns, kein Inhalt.
- **Anwendungs-Karten verwenden die umbenannten Labels** (Markup #6/#7): „Prozessmedien und Abwässer" statt MDF, „Nebenprodukte und Abwässer" statt Lebensmittel — sowohl auf der Karte als auch auf der h1 der Subpage.

## Offene Punkte

- [ ] Markup #22/#24 — Click-through-Bilder für Produkte BG2 und BG1-400 (DSC-Fotos kommen vom Client)
- [ ] Markup #23 — Vorteile für BG1-400 produktspezifisch machen (Folien 35-38 der Präsentation)
- [ ] Markup #25/#26 — Voreindicker und Circulyizer als 3./4. Produkt mit Platzhalter-Infos
- [ ] Markup #28 — Über uns Sektion mit Folien 26-27 erweitern
- [ ] Markup #13 — Team-Texte für 4 Personen aus Folie 3 in About prüfen
- [ ] Karriere-Sektion (Folie 6) — entfernt, ggf. wiederherstellen
- [ ] Engineering-Subpages (Systemintegration Planung + Installation/Inbetriebnahme) — Inhalt im PDF, derzeit gemischt in `/integration`
- [ ] Über uns "Next Level Separation" Rewrite (Folie 2)
- [ ] Hero-Bilder für die neuen Anwendungs-Subpages aufwerten (KI / neue Fotos)
- [ ] Kontakt-Daten Spareparts (Telefon) und Technik/Einkauf (xxxx-Platzhalter im PDF) — Client muss liefern
- [ ] Produkt-Bild BGII-800: Flüssigkeit außen statt Festkörper (Punkt 17)
