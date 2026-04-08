# EcoTech Styria — Website Architecture

> Stand: 2026-04-08 (2. Update — nachmittags, vor Meeting 15:00)

## Letzte Session (2026-04-08 — Nachmittag)

Zweite Runde am 2026-04-08 direkt vor dem Client-Meeting (15:00). Günther Pirker hatte Feedback per E-Mail geschickt, Nils hat nach der ersten Subpages-Runde weitere Anpassungen angestoßen.

**Was gebaut wurde — 2. Durchgang:**

1. **`/integration` komplett neu gebaut** — `IntegrationPage.tsx` entsprach nicht dem Client-Slide "Systemintegration – Installation und Inbetriebnahme". Kompletter Rewrite mit neuer Struktur:
   - Hero ("Alles aus einer Hand – von der Idee bis zur Umsetzung" als Subtitle)
   - Overview-Sektion: weiße Karte mit 2 Absätzen (inkl. bold "Sie kümmern sich um Ihr Geschäft") + **grüne Prioritäten-Karte** mit 4 Tiles (Anlagenverfügbarkeit / Aufbereitungskosten / Wartungsfreundliches Design / Prozessstabilität)
   - Leistung-Sektion (2-Col): "Unsere Leistung – von Planung bis Hochlauf" (4 Checkmark-Steps) + "Leistungspaket über Partnernetzwerk" (4 Services + grüne "Ihr Vorteil" Box)
   - Grüne CTA-Bar mit mailto-Button
   - Kontakt-Block (Eckdaten einsenden)
   - Alle alten generischen i18n-Keys (`integration.planning.*`, `integration.benefits.*`, `integration.service.*`) durch neue Keys ersetzt (`integration.hero/overview/priorities/leistung/partner/cta/kontakt.*`), DE + EN. Commit `8c9d5816`.

2. **Karriere-Sektion wieder auf `/about`** — neue `CareerSection` Komponente zwischen Kontakt und Standort. Inhalt aus PDF Slide 6: 2 Intro-Absätze, grüne Tagline "Gestalten Sie mit uns leistungsfähige Technik...", mailto-Button "Initiativbewerbung senden". Neue i18n-Keys `aboutpage.careers.badge/title/intro/intro2/tagline/ctaLabel`. Commit `c881d7d2`.

3. **Landwirtschaft Subpage Hero = Kühe-im-Stall Foto** — `app-agriculture.webp` (wie Homepage-Karte), weg vom vorher kurz getesteten `hero-home-new.png`. Commits `bd549c22` + `13872bcd`.

4. **Kunststoffrecycling-Foto vom Client eingebaut** — echtes Foto einer Recyclinganlage (Förderbänder, Kunststoff-Granulat in Big-Bags) aus `ECOTECH BU_March/Anpassungen.1April/Anwendungen/Kunststoffrecylcing.png` (10M → 668K als `app-recycling-v2.webp`). Referenziert in `HomePage.tsx:155`, `applications.ts:228`, `ApplicationsPage.tsx:123`. Commit `13872bcd`.

5. **Ersatzteile-Hero jetzt = Products-Hero** — `ErsatzteilePage.tsx:178` nutzt `hero-products-v2.webp` (statt altem `hero-products-new.png`). Damit sieht `/sales/ersatzteile` konsistent mit `/products` aus. Commit `13872bcd`.

6. **Günther Pirker aus Vertriebspartnern entfernt** — nur noch Heinz Leitner (CEO) in `data/partners.ts` unter Österreich. Pirker-Eintrag komplett gelöscht (Nils will nur einen Ansprechpartner im PartnerFinder). Commit `7457df72`.

**Git-State:** alles auf `main` gepusht. Letzte 6 Commits dieser Runde:
- `8c9d5816` — `/integration` komplett neu gebaut aus Client-Slide
- `c881d7d2` — Karriere-Sektion wieder in `/about`
- `7457df72` — Nur noch Heinz Leitner im Vertriebspartner-Finder
- `bd549c22` — Landwirtschaft Subpage Hero = Kühe-im-Stall Foto
- `13872bcd` — Landwirtschaft+Ersatzteile Heroes swap, echtes Kunststoff-Recycling Foto
- `e00fd913` — ARCHITECTURE.md Update (erste Runde)

Vercel auto-deployed.

**Wo beim nächsten Mal anfangen:**

1. **Meeting mit Heinz & Günther um 15:00 Nachbesprechung** — was wurde entschieden, welche offenen Punkte sind jetzt Priorität?
2. **Fehlende Client-Inputs nachhaken** (siehe "Offene Punkte" unten):
   - Spareparts Telefon (+43 xxxxxx Platzhalter)
   - Service E-Mail + Telefon (xxxx Platzhalter)
   - Technik/Einkauf Ansprechpartner
   - Bio-Einstreu Texte freigeben (wir haben eigenen Text geschrieben, PDF hatte nur "KI Bild" Platzhalter)
3. **Echte Anlagen-Montage Fotos** für `/integration` (Client-Notiz am PDF-Slide: "KI Bilder Anlagenmontage, sollten noch ausgetauscht werden" — derzeit haben wir keine Montagebilder im Integration-Page)
4. **DSC-Fotos BGII-800 + BGI-400** (Markup #22, #24) für Produktgalerien
5. **Voreindicker + Circulyizer** (Markup #25, #26) — Fotos + Produktinfos (Slides 3+4)
6. **Engineering-Subpages?** — PDF hat 2 eigene Slides (Systemintegration Planung + Installation/Inbetriebnahme). Aktuell sind beide Inhalte zusammen auf der einzelnen `/integration` Seite (neu gebaut). Falls der Client doch getrennte Subpages will → aufsplitten.

---

## Letzte Session (2026-04-08 — Vormittag)

Trigger war eine E-Mail von Heinz Leitner (2026-04-07): Anwendungen ohne Subpages, Service/Ersatzteile-Texte nicht voll sichtbar, "Siehe Partner der TCS Umwelttechnik" steht öffentlich auf der Seite. Meeting mit dem Client geplant für **Mittwoch 2026-04-08 15:00**.

**Was gebaut wurde — Code & Inhalt:**

1. **TCS-Bug eliminiert** — alle "TCS Umwelttechnik"-Referenzen aus `LanguageContext.tsx` (DE+EN) und `SalesPage.tsx` entfernt. Bug ist tot.
2. **Vertriebspartner-Finder im TCS-Stil** — neue `PartnerFinder.tsx` Komponente mit `Land wählen` Dropdown. Daten in `src/data/partners.ts` (aktuell nur Pirker + Leitner unter Österreich; andere DACH+CEE-Länder im Dropdown sichtbar mit Empty-State-CTA, damit der Client später einfach Partner anhängen kann).
3. **Alle 8 Anwendungs-Subpages live** — gerendert von einer einzigen `AnwendungLayout.tsx` Komponente, gefüttert aus `src/data/applications.ts`. Inhalte direkt aus `Content Homepage_v1.pdf` übernommen.
4. **Markup #6/#7 Labels umgesetzt** — "MDF" → "Prozessmedien und Abwässer", "Lebensmittel" → "Nebenprodukte und Abwässer". Sowohl auf den Karten als auch auf den Subpage-h1.
5. **`AgriculturePage.tsx` gelöscht** — Inhalt in den `landwirtschaft`-Eintrag des Data-Files migriert.
6. **`/sales` enriched** — substanzielle Preview-Sektionen für Ersatzteile und Service direkt auf der Hauptseite, damit der Client die Inhalte ohne Klick sieht.
7. **`/sales/service` Prioritäten-Sektion** — drei Tile Cards aus PDF Folie 10 (Hohe Anlagenverfügbarkeit, Niedrigste Aufbereitungskosten, Wartungsfreundliches Design) ergänzt.
8. **Router** — dynamische `/applications/:slug` Pattern in `App.tsx`, plus `hashchange` Listener in `router.tsx` (Browser-Back/Forward funktioniert jetzt).

**Was gebaut wurde — neue Bilder vom Client (5 Stück):**

Heinz/Günther haben gegen Ende der Session 5 hochauflösende PNG-Bilder im Asset-Ordner abgelegt:
- **Source:** `ECOTECH BU_March/Informationen:Content:Daten/Bilder und Videos/Navigation/`
- **Konvertierung:** PNG → WebP mit `cwebp -q 82` (Total 41 MB → 2 MB, Qualität bleibt erstklassig)

| Source PNG | Neues WebP | Eingebunden in |
|---|---|---|
| `Anwendungen Hero.png` (8.6M) | `hero-applications-v2.webp` (324K) | `/applications` Hero — `ApplicationsPage.tsx:181` |
| `Systemintegration Hero.png` (5.5M) | `hero-systemintegration-v2.webp` (374K) | `/integration` Hero — `IntegrationPage.tsx:21` ⭐ Blueprint-Style — fixt das Close-up-Problem |
| `Kommunalwirtschaft_Anwendungen.png` (10M) | `app-municipal-v2.webp` (705K) | `kommunale-anwendungen` Karte + Subpage-Hero |
| `Prozessmedien Abwässer_Anwendungen.png` (10M) | `app-prozessmedien-v2.webp` (323K) | `prozessmedien-und-abwaesser` Karte + Subpage-Hero |
| `produkte Hero.png` (8.7M) | `hero-products-v2.webp` (285K) | `/products` Hero — `ProductsPage.tsx:347` |

`ErsatzteilePage` und `ServicePage` zeigen weiterhin den alten `hero-products-new.png` — bewusst nicht ersetzt, da der neue Produkt-Hero zu produkt-spezifisch ist.

**Git-State:** alles auf `main` gepusht. Letzte Commits:
- `a9e823c7` — Subpages, PartnerFinder, TCS removal
- `9b70f2c2` — Vier neue Hero-Bilder + ARCHITECTURE.md Update
- `f9b0f943` — Produkte Hero Bild

Vercel auto-deployed.

**Spec-Doc:** `docs/specs/2026-04-08-client-feedback-round-design.md` (vollständige Begründung + Build-Order)

**Wo morgen anfangen:**
1. **Erst Vercel-Deploy verifizieren** — https://ecotech-nine.vercel.app/ — alle 5 neuen Bilder sollten sichtbar sein (Anwendungen, Integration, Kommunal-Subpage, Prozessmedien-Subpage, Products).
2. **Meeting mit Heinz Leitner um 15:00 (heute, 2026-04-08)** — Agenda:
   - Zeigen was gebaut wurde (TCS weg, 8 Subpages, Partner-Finder, neue Bilder).
   - DSC-Fotos für Produktgalerien einfordern (Markup #22, #24).
   - Voreindicker / Circulyizer Inhalte einfordern (Markup #25, #26).
   - Spareparts-Telefonnummer und Technik/Einkauf-Kontakt einfordern (PDF hat noch `xxxx` Platzhalter).
   - Eventuell weitere Bilder einfordern: Vertriebspartner-Hero, Über-uns-Hero, Karriere-Hero (falls Karriere wieder rein soll).
   - Engineering-Subpages besprechen (PDF hat 2 Seiten Inhalt für Systemintegration Planung + Installation).
3. **Nach dem Meeting:** priorisierte Liste aus den offenen Punkten abarbeiten — siehe `## Offene Punkte` unten.

**Wichtige Erinnerung:** Workflow für neue Bilder vom Client ist jetzt klar dokumentiert:
1. Client legt PNG/JPG in `ECOTECH BU_March/Informationen:Content:Daten/Bilder und Videos/<Ordner>/`
2. Mit `cwebp -q 82 input.png -o output.webp` in `ECOTECH/Ecotech_Website/public/images/` konvertieren
3. Filename-Konvention: `<context>-<name>-v2.webp` (z. B. `hero-applications-v2.webp`)
4. Referenzen in den Pages und ggf. in `data/applications.ts` aktualisieren
5. Build → push → Vercel deployt automatisch

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

Alle Bilder in `public/images/`. Formate: WebP bevorzugt, einige noch JPG/PNG (legacy).

**Hero-Bilder (neu vom Client am 2026-04-08, Suffix `-v2.webp`):**
- `hero-applications-v2.webp` — `/applications` Hero (3D-Render Separator + Wasserspritzer + Netzwerk-Overlay)
- `hero-systemintegration-v2.webp` — `/integration` Hero (Blueprint-Stil isometrische Anlagen-Zeichnung mit EcoTech-Logo)
- `hero-products-v2.webp` — `/products` Hero (Cinematic Close-up der BG-Filterschneckenpresse)
- `app-municipal-v2.webp` — Kommunale Anwendungen (Foto eines echten Klärwerks)
- `app-prozessmedien-v2.webp` — Prozessmedien & Abwässer (industrielle Edelstahl-Verrohrung)

**Weitere Heroes:**
- `hero-home-new.png` — Homepage Hero (NICHT ÄNDERN)
- `hero-products-new.png` — alter Produkte-Hero, jetzt nur noch in `ErsatzteilePage` und `ServicePage` verwendet
- `hero-sales-v2.webp` — `/sales` Hero
- `hero-bg.webp`, `hero-apps-new.png` — alte/legacy Heroes

**Anwendungsbilder (Karten + Subpages):**
- `app-agriculture.webp`, `app-bedding.webp`, `app-biogas.webp`, `app-recycling.png`, `app-paper.webp` — bestehende Anwendungen
- `app-municipal-v2.webp`, `app-prozessmedien-v2.webp` — neu (siehe oben)
- `app-mdf.png`, `app-municipal.jpg`, `app-food.webp` — legacy, nicht mehr direkt referenziert

**Produkt-Bilder:**
- `product-bg2*.webp` — BGII-800 Gallery (6 Bilder)
- `product-bgi*.webp` — BGI-400 Gallery (5 Bilder)

**Sonstige:**
- `team-*.png/.webp` — Teamfotos
- `logo.png`, `logo-signet.png` — Logos
- `parallaxhome.png` — Parallax-Sektion

### Konvention für neue Bilder

1. Source vom Client liegt in `ECOTECH BU_March/Informationen:Content:Daten/Bilder und Videos/<Ordner>/`
2. Konvertieren: `cwebp -q 82 input.png -o output.webp`
3. Filename: `<context>-<name>-v2.webp` (z. B. `hero-karriere-v2.webp`)
4. Speichern in `public/images/`
5. Referenz in der entsprechenden Page oder in `data/applications.ts` aktualisieren
6. Build → push → Vercel auto-deployt

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
- [x] **Karriere-Sektion wieder auf `/about`** — erledigt 2026-04-08 (Commit `c881d7d2`)
- [ ] Engineering-Subpages — `/integration` ist jetzt komplett neu gebaut mit allen Inhalten aus dem Slide. Falls der Client doch getrennte Subpages für Planung vs. Installation will → aufsplitten.
- [ ] **Echte Anlagen-Montage Fotos für `/integration`** — Client-Notiz: "KI Bilder Anlagenmontage, sollten noch ausgetauscht werden" (aktuell keine Montagebilder auf der Seite, nur Hero)
- [ ] Über uns "Next Level Separation" Rewrite (Folie 2)
- [ ] Hero-Bilder für die Anwendungs-Subpages aufwerten (bis auf Landwirtschaft/Kommunal/Prozessmedien/Kunststoff haben wir noch Legacy-Bilder für Bio-Einstreu, Biogas, Zellstoff, Nebenprodukte)
- [ ] Kontakt-Daten Spareparts (Telefon) und Technik/Einkauf (xxxx-Platzhalter im PDF) — Client muss liefern
- [ ] Bio-Einstreu Texte vom Client freigeben — PDF hatte nur "KI Bild" Platzhalter, wir haben eigenen Text geschrieben
- [ ] Produkt-Bild BGII-800: Flüssigkeit außen statt Festkörper (Punkt 17)
- [ ] Nebenprodukte-Subpage: Schlachthausabwasser + Fischproduktion ergänzen (PDF Slide 13)
