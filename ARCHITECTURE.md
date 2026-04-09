# EcoTech Styria — Website Architecture

> Stand: 2026-04-09 (Session: Anpassungen-Dokument 08.04 + Übersetzungs-Sweep)

## Letzte Session (2026-04-09)

Massive Session: Übersetzungs-Sweep über die gesamte Website + alle Punkte aus dem Client-Dokument `Anpassungen Homepage Ecotech_08.04.2026.docx` abgearbeitet.

### 1. Vollständiger Übersetzungs-Sweep

Alle hardcoded deutschen Strings auf der gesamten Website durch `t()` i18n-Keys ersetzt. ~85 neue Key-Paare (DE + EN) in `LanguageContext.tsx`.

**Betroffene Dateien:**
- `NewsPage.tsx` — Hero-Subtitle, Section-Headings, Downloads-Array, Expand/Collapse-Buttons
- `LegalPages.tsx` — kompletter Rewrite: TermsPage (8 Sektionen), PrivacyPage (7 Sektionen), ImprintPage (alle Labels), DealersPage (Intro, Länder, CTAs)
- `SalesPage.tsx` — beide Preview-Sektionen (Spare Parts + Service) voll übersetzt
- `HomePage.tsx` — 4 Section-Labels (Bereiche/Produkte/Vorteile/Aktuelles)
- `AboutPage.tsx` — Team/Kontakt/Standort Labels + Form-Submit Alert
- `ApplicationsPage.tsx` — "Mehr erfahren" in ApplicationCard
- `ProductsPage.tsx` — BGI-400 Technical Data Array + "Technische Daten" Heading
- `Header.tsx` — Mobile Menu "Language:" Label
- `Footer.tsx` — Social Media / Links / Navigation Headings + "All rights reserved"

### 2. Anpassungen aus Client-Dokument (08.04.2026)

**Über uns:**
- [x] Günther Pirker komplett entfernt (Foto + Text) — nur noch 3 Personen (Leitner, Pauger, Kampl)
- [x] Rollen (CEO, CTO, COO) bei den Personen rausgelöscht
- [x] Grid von 4-Col auf 3-Col mit `max-w-5xl mx-auto` angepasst

**Anwendungen:**
- [x] **Landwirtschaft:** Güllewürste + Futterverschmutzung Text hinzugefügt (3 neue Paragraphen aus Content-Präsentation, DE + EN)
- [x] **Kunststoffrecycling:** "Zentrifugieren" aus Prozessschritten entfernt, "Einsatz im Gut-Strom" als ersten Bullet nach oben
- [x] **Kommunale Anwendungen:** Hero-Subtitle ersetzt mit Client-Text (Städte/Gemeinden + Prozessketten)
- [x] **Zellstoff & Papier:** alle 3 Mikroplastik-Mentions entfernt (cardDesc, Intro, Kurzfakten)
- [x] **Prozessmedien und Abwässer → MDF Platten:** Titel, Slug (`mdf-platten`), Hero-Image (neues `app-mdf-v2.webp`), alle Referenzen in HomePage/ApplicationsPage
- [x] **Nebenprodukte und Abwässer → Lebensmittelindustrie:** Titel, Slug (`lebensmittelindustrie`), Hero-Image (neues `app-lebensmittel-v2.webp`), alle Referenzen
- [x] **Lebensmittelindustrie Intro:** 4 fehlende Textpassagen ergänzt (Einsatzbereiche-Beispiele, Investitionskosten, Frischwasserbedarf, Closing Tagline)
- [x] **Lebensmittelindustrie Highlight-Box:** Neues `highlightBox` Feature in `AnwendungLayout` — optionale Box "Mehr Wirtschaftlichkeit durch Separation" mit 3 Paragraphen (nur auf Lebensmittelindustrie aktiv)

**Vertrieb und Aftersales:**
- [x] CEO-Label von Heinz Leitner entfernt
- [x] Deutschland Bayern → Deutschland Süd + Nord
- [x] Länderliste von 11 auf **45 Länder** erweitert (DACH, West-/Süd-/Nord-/Ost-Europa, International)
- [x] Vertriebspartner-Grafik (Weltkarte) neben Partner-Karten platziert (rechte Spalte, lg+)
- [x] Ecotech Styria GmbH Partner-Karte bleibt auf ALLEN Ländern sichtbar (kein Empty-State mehr)
- [x] Layout: 2-Spalten (Heading+Selector+Cards links, Bild rechts) — Bild top-aligned mit "Vertriebspartner finden"
- [x] Schneckenaufbereitung: SEPFLEX 400 Foto (`schnecke-sepflex400.webp`) in Schnecken-Card auf `/sales/ersatzteile`

**Produkte:**
- [x] **BGII-800 Datenblatt:** Reverted auf offizielle Broschüren-Werte (5,5-11,0 kW, 75m³/h, 75% inorganic) — früherer Update auf 15kW/330gpm/80% war falsches Datenblatt
- [x] **BGI-400:** Description + Features reinformuliert — konkreter Durchsatz (20 m³/h), spezifische Anwendungen statt generisch "günstig für Agrar"
- [x] **Voreindicker:** Coming Soon Treatment (Badge + Tagline "Demnächst verfügbar" + Intro-Text + Inquiry-Button), left-aligned
- [x] **Circulyizer:** Gleiche Coming Soon Behandlung wie Voreindicker, left-aligned

**Systemintegration:**
- [x] Neues Anlagenfoto (`hero-systemintegration-v3.webp`) als eigene Sektion zwischen Leistung und CTA platziert (full-width glass-card)

**News & Medien:**
- [x] "EcoTech Styria GmbH gegründet" News-Item entfernt
- [x] Datengetriebene News/Events aus `src/data/news.ts` (single source of truth)
- [x] **News-Subpages:** dynamische `/news/:slug` Route mit `NewsDetailPage.tsx` — Placeholder-Content + "Bericht folgt" Hinweis
- [x] Neues Event: Wisconsin Dairy Expo hinzugefügt
- [x] Alle Karten verlinken jetzt auf ihre Subpage statt nur Text zu expandieren

**Allgemein:**
- [x] Sticky WhatsApp-Button (bottom-right, alle Seiten) — Link zu `wa.me/43314470477`

### Neue Dateien

- `src/data/news.ts` — News + Events Daten (6 Items: 2 News, 4 Events)
- `src/pages/NewsDetailPage.tsx` — Detail-Seite für einzelne News/Events
- `public/images/app-mdf-v2.webp` (223K) — MDF Platten Hero
- `public/images/app-lebensmittel-v2.webp` (223K) — Lebensmittelindustrie Hero
- `public/images/hero-systemintegration-v3.webp` (344K) — Anlage-Foto für Integration-Seite
- `public/images/schnecke-sepflex400.webp` (216K) — SEPFLEX 400 für Schneckenaufbereitung
- `public/images/vertriebspartner-graphic.webp` (169K) — Weltkarte für Vertrieb

### Git Commits

- `538bec9c` — Full translation sweep, client doc edits, UX improvements
- `a8b1dec2` — News subpages, Circulyizer Coming Soon, WhatsApp button, BGII-800 datasheet fix

Vercel auto-deployed.

### Wo beim nächsten Mal anfangen

1. **BGI-400 Datenblatt** — Nils klärt im Call ob das 15kW/330gpm/80% Datenblatt für die BGI-400 ist
2. **News-Subpages füllen** — Nachberichte Agritechnica + Wisconsin (Günther muss erstellen), IFAT Ausblick, Erfolgsgeschichten
3. **Wisconsin Event Bild** — Nils hat ein Messestand-Foto gezeigt (SEPFLEX 400 mit Farmtech Banner), muss noch als WebP ins Repo
4. **IFAT Event Bild** — ebenfalls von Nils gezeigt, muss noch ins Repo
5. **WhatsApp Nummer prüfen** — aktuell Büro-Nummer +43 3144 70477, evtl. eigene WhatsApp-Nummer?
6. **Homepage "Bewegte Bilder"** — Client wünscht automatisch durchlaufende News/Success Stories (siehe farmtech.eu als Referenz)
7. **Über uns Hauptfoto** — Client will anderes Bild (vielleicht mit Logo-Design)

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
- `ECOTECH BU_March/Anpassungen Homepage Ecotech_08.04.2026.docx` — Client-Änderungsliste
- `ECOTECH BU_March/Systemintegration/` — Anlagenfoto
- `ECOTECH BU_March/Vertriebspartner /` — Weltkarte-Grafik
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
| `/about` | AboutPage | Team (3 Personen, keine Rollen), Vision/Mission, Kontakt, Karriere, Standort |
| `/applications` | ApplicationsPage | 8 Anwendungsbereiche mit Overlay-Animationen |
| `/applications/:slug` | AnwendungPage | **Dynamische Subpage** für jede Anwendung |
| `/sales` | SalesPage | Vertriebspartner-Finder (2-Spalten mit Weltkarte), CTAs, Ersatzteile- & Service-Preview |
| `/sales/ersatzteile` | ErsatzteilePage | Ersatzteile + Schneckenaufbereitung (mit SEPFLEX 400 Bild) |
| `/sales/service` | ServicePage | Service & Inbetriebnahme + Prioritäten-Tiles |
| `/products` | ProductsPage | BGII-800, BGI-400, Voreindicker (Coming Soon), Circulyizer (Coming Soon) |
| `/integration` | IntegrationPage | Planung, Installation + Anlage-Foto-Sektion |
| `/news` | NewsPage | News + Events (datengetrieben aus `data/news.ts`) + Downloads |
| `/news/:slug` | NewsDetailPage | **Dynamische Subpage** für einzelne News/Events |
| `/terms` `/privacy` `/imprint` `/dealers` | LegalPages | Rechtliches (voll übersetzt) |

### Anwendungs-Slugs (8)

`landwirtschaft`, `bio-einstreu`, `biogas`, `kunststoffrecycling`, `kommunale-anwendungen`, `zellstoff-papier`, `mdf-platten` (ehem. prozessmedien-und-abwaesser), `lebensmittelindustrie` (ehem. nebenprodukte-und-abwaesser).

### News-Slugs (6)

`bgii-800-vorgestellt`, `vertriebsnetzwerk-expansion`, `agritechnica-2025`, `wisconsin-dairy-expo`, `ifat-muenchen-2026`, `eurotier-2026`.

## Dateistruktur

```
src/
├── App.tsx                    # Router + Layout (dynamic /applications/:slug + /news/:slug) + WhatsApp Button
├── router.tsx                 # Hash SPA Router with hashchange listener
├── context/
│   └── LanguageContext.tsx     # i18n (DE/EN) — ~900 Zeilen, alle Texte
├── components/
│   ├── Header.tsx             # Sticky Nav, Scroll-Erkennung, Mobile Menu
│   ├── Footer.tsx
│   ├── SubpageHero.tsx        # Wiederverwendbarer Hero mit diagonalem Cut
│   ├── PartnerFinder.tsx      # Vertriebspartner-Finder (2-Col mit Weltkarte) + Footer-CTAs
│   ├── AnwendungLayout.tsx    # Layout für Anwendungs-Subpages (+ optional highlightBox)
│   ├── BackgroundBlob.tsx
│   └── ui/                    # shadcn/ui (legacy)
├── data/
│   ├── applications.ts        # 8 Anwendungen (DE+EN inline, Bilingual Type)
│   ├── partners.ts            # Vertriebspartner (45 Länder) + Partner-Einträge
│   └── news.ts                # NEU — 6 News/Event Items für NewsPage + Detail-Subpages
├── hooks/
│   ├── useScrollAnimation.ts
│   └── use-mobile.ts
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx          # 3 Team-Mitglieder, keine Rollen
│   ├── ApplicationsPage.tsx
│   ├── AnwendungPage.tsx      # slug → data/applications.ts → AnwendungLayout
│   ├── SalesPage.tsx          # PartnerFinder + Ersatzteile/Service Preview (übersetzt)
│   ├── ErsatzteilePage.tsx    # Schnecken-Card mit SEPFLEX 400 Bild
│   ├── ServicePage.tsx
│   ├── ProductsPage.tsx       # BG2 + BGI400 + Voreindicker (Coming Soon) + Circulyizer (Coming Soon)
│   ├── IntegrationPage.tsx    # + AnlageImageSection
│   ├── NewsPage.tsx           # Datengetrieben aus news.ts, Cards → /news/:slug
│   ├── NewsDetailPage.tsx     # NEU — Detail-Seite mit Placeholder-Content
│   └── LegalPages.tsx         # Voll übersetzt (DE+EN)
└── index.css
```

## Patterns

### Datengetriebene Anwendungen
Alle 8 Anwendungs-Subpages aus `src/data/applications.ts`. Neuer Eintrag = neue Subpage, kein Router/Component/i18n-Änderung nötig. Optional: `highlightBox` Feld für extra Box-Sektion (aktuell nur Lebensmittelindustrie).

### Datengetriebene News/Events
Alle News/Event-Items aus `src/data/news.ts`. Cards auf `/news` + Detail-Subpages unter `/news/:slug`. Neues Item = Objekt anhängen, fertig.

### Datengetriebener Partner-Finder
`src/data/partners.ts` — Partner-Karten + `additionalCountries` für Dropdown. Aktuell: HQ-Karte immer sichtbar, kein Empty-State.

### Übersetzungssystem
`LanguageContext.tsx` — alle sichtbaren Texte über `t('key')`. Keine hardcoded Strings mehr (Sweep 2026-04-09). Anwendungen/News nutzen inline `Bilingual`-Objekte statt i18n-Keys.

## Hard Rules

- **Niemals deployen ohne explizite Erlaubnis von Nils.**
- **TCS Umwelttechnik darf NIRGENDS erscheinen.**
- **Anwendungs-Slugs beachten:** `mdf-platten` (nicht mehr prozessmedien), `lebensmittelindustrie` (nicht mehr nebenprodukte).
- **BGII-800 Datenblatt = offizielle Broschüre:** 5,5-11,0 kW, 75m³/h, 75% inorganic. NICHT die 15kW/330gpm/80% Werte (die gehören evtl. zur BGI-400 — noch offen).
- **Keine Mikroplastik-Mentions** auf Zellstoff & Papier.
- **Keine CEO/CTO/COO-Labels** im Team und nicht im Partner-Finder.
- **Günther Pirker taucht nirgends auf** (weder Team noch Partner).

## Offene Punkte

- [ ] BGI-400 Datenblatt klären (15kW/330gpm/80% — Call-Ergebnis abwarten)
- [ ] News-Subpages mit echtem Content füllen (Nachberichte Agritechnica + Wisconsin + IFAT Ausblick)
- [ ] Wisconsin + IFAT Event-Bilder als WebP einfügen
- [ ] Homepage "Bewegte Bilder" / automatisch durchlaufende News (Client-Wunsch, Referenz: farmtech.eu)
- [ ] Über uns Hauptfoto ändern (Client will neues Design, evtl. mit Logo)
- [ ] WhatsApp-Nummer prüfen (aktuell Büro-Nr, evtl. eigene WhatsApp-Nr)
- [ ] Kontakt-Daten Spareparts Telefon + Technik/Einkauf (xxxx-Platzhalter im PDF)
- [ ] Produkt-Bild BGII-800: Flüssigkeit außen statt Festkörper
- [ ] DSC-Fotos für Produktgalerien BG2 + BGI-400
- [ ] Hero-Bilder aufwerten für Bio-Einstreu, Biogas, Zellstoff, Lebensmittelindustrie Subpages
- [ ] Farmtech als Gülletechnik-Partner — Darstellung diskutieren
