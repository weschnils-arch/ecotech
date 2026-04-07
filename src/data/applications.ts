// Anwendungen — single source of truth for all application subpages.
// Content lifted from "Content Homepage_ Ecotech Styria_v1.pdf".
// Add a new Anwendung by appending an object. Slug = URL segment after /applications/.
// Each string carries a `de` + `en` variant; pickLang() in the layout reads the active language.

export type Bilingual = { de: string; en: string };

export interface Application {
  slug: string;
  // Card label on the Anwendungen list (markup #6/#7 enforce these on the cards too)
  cardTitle: Bilingual;
  cardDesc: Bilingual;
  // Subpage hero
  badge: Bilingual;
  title: Bilingual;
  subtitle: Bilingual;
  heroImage: string;
  heroImagePosition?: string;
  // Body
  intro: Bilingual[];          // paragraphs
  kurzfakten: Bilingual[];     // sidebar bullets
  vorteile: Bilingual[];       // "Ihre Vorteile" list
  typischeAnwendungen: Bilingual[];
  // Final CTA box
  ctaTitle: Bilingual;
  ctaDesc: Bilingual;
  ctaLabel: Bilingual;
}

export const applications: Application[] = [
  // 1. Landwirtschaft (Gülleseparation) — replaces the old AgriculturePage
  {
    slug: 'landwirtschaft',
    cardTitle: { de: 'Landwirtschaft', en: 'Agriculture' },
    cardDesc: {
      de: 'Gülle separieren, Nährstoffe gezielt einsetzen — bis zu 30 % weniger Lagerbedarf.',
      en: 'Separate slurry, target nutrients precisely — up to 30 % less storage capacity.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Landwirtschaft – Gülle separieren, Nährstoffe gezielt einsetzen',
      en: 'Agriculture — Slurry Separation, Targeted Nutrient Use',
    },
    subtitle: {
      de: 'Gülle ist ein wertvoller Rohstoff und ausgezeichneter biologischer Dünger. Die mechanische Separation reduziert Kosten, vereinfacht Lagerung und Ausbringung und steigert die Düngewirkung nachhaltig.',
      en: 'Slurry is a valuable resource and excellent organic fertilizer. Mechanical separation cuts costs, simplifies storage and application, and sustainably improves fertilizer effectiveness.',
    },
    heroImage: '/images/hero-agriculture-higgs.png',
    heroImagePosition: 'object-[95%_center]',
    intro: [
      {
        de: 'Durch die Separation wird Gülle in eine flüssige und feste Phase getrennt. Das vereinfacht Lagerung, Transport und Ausbringung und ermöglicht eine gezielte Nutzung der enthaltenen Nährstoffe.',
        en: 'Separation splits slurry into a liquid and solid phase. This simplifies storage, transport and application, and enables targeted use of the contained nutrients.',
      },
      {
        de: 'Ein wesentlicher Vorteil ist die Reduktion des benötigten Lagerbedarfs um bis zu 30 %. Dadurch sinken Platzbedarf und Investitionskosten für Güllegruben deutlich. Die separierten Feststoffe eignen sich als Naturdünger, Kompost oder Bio-Einstreumaterial.',
        en: 'A key benefit is reducing required storage by up to 30 %. Footprint and investment costs for slurry pits drop significantly. The separated solids work as natural fertilizer, compost or bio-bedding material.',
      },
      {
        de: 'Separierte Gülle bildet kaum Sink- oder Schwimmschichten. Aufrühren und Ausbringen werden einfacher und gleichmäßiger. Die dünne Phase dringt rasch in den Boden ein und stellt Nährstoffe schnell zur Verfügung. Zusätzlich werden Geruchsemissionen deutlich reduziert.',
        en: 'Separated slurry barely forms sinking or floating layers. Stirring and spreading become easier and more uniform. The thin phase rapidly infiltrates the soil and delivers nutrients quickly. Odor emissions are also significantly reduced.',
      },
    ],
    kurzfakten: [
      { de: 'Bis zu 30 % weniger Lagerkapazität', en: 'Up to 30 % less storage capacity' },
      { de: 'Feststoffe als Dünger, Kompost oder Bio-Einstreu nutzbar', en: 'Solids usable as fertilizer, compost or bio-bedding' },
      { de: 'Flüssige Phase: schnelle Infiltration', en: 'Liquid phase: rapid infiltration' },
      { de: 'Weniger Rührerwartung', en: 'Less stirrer maintenance' },
      { de: 'Reduzierte Geruchsemissionen', en: 'Reduced odor emissions' },
    ],
    vorteile: [
      { de: 'Bis zu 30 % weniger Lagerbedarf', en: 'Up to 30 % less storage required' },
      { de: 'Geringere Investitionskosten für Güllegruben', en: 'Lower investment costs for slurry pits' },
      { de: 'Kaum Sink- oder Schwimmschichten im Lager', en: 'Barely any sinking or floating layers in storage' },
      { de: 'Einfacheres Aufrühren und gleichmäßige Ausbringung', en: 'Easier stirring and uniform spreading' },
      { de: 'Gezielte Nutzung von flüssiger und fester Phase', en: 'Targeted use of liquid and solid phase' },
      { de: 'Reduzierter Mineraldüngereinsatz', en: 'Reduced mineral fertilizer use' },
      { de: 'Schnellere Nährstoffaufnahme im Boden', en: 'Faster nutrient absorption in soil' },
      { de: 'Feststoffe platzsparend transportierbar', en: 'Solids transportable in compact form' },
      { de: 'Deutlich geringere Geruchsemissionen', en: 'Significantly reduced odor emissions' },
    ],
    typischeAnwendungen: [
      { de: 'Rinder- und Schweinegülle', en: 'Cattle and pig slurry' },
      { de: 'Grünland- und Ackerbau', en: 'Grassland and arable farming' },
      { de: 'Bio-Einstreuherstellung', en: 'Bio-bedding production' },
      { de: 'Kompostierung', en: 'Composting' },
      { de: 'Nährstoffverbringung', en: 'Nutrient distribution' },
    ],
    ctaTitle: { de: 'Gemeinsam zur optimalen Lösung', en: 'Together to the optimal solution' },
    ctaDesc: {
      de: 'Wir unterstützen Sie bei Auslegung und Integration des passenden Separators – für stabile Prozesse, niedrige Betriebskosten und maximale Nährstoffeffizienz.',
      en: 'We support you with sizing and integration of the right separator — for stable processes, low operating costs and maximum nutrient efficiency.',
    },
    ctaLabel: { de: 'Jetzt Kontakt aufnehmen', en: 'Get in touch' },
  },

  // 2. Bio-Einstreu
  {
    slug: 'bio-einstreu',
    cardTitle: { de: 'Bio-Einstreu', en: 'Bio Bedding' },
    cardDesc: {
      de: 'Bio-Einstreu aus eigener Produktion — gesunde Kühe, höhere Milchleistung, weniger Kosten.',
      en: 'Bio bedding from your own production — healthier cows, more milk, lower costs.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Bio-Einstreu aus eigener Produktion',
      en: 'Bio Bedding from Your Own Production',
    },
    subtitle: {
      de: 'Immer mehr Milchviehbetriebe produzieren die benötigte Einstreu selbst. Betriebseigenes Bio-Einstreu senkt Kosten, verbessert die Stallhygiene und steigert das Wohlbefinden der Tiere – die Basis für gesunde Kühe und hohe Milchleistungen.',
      en: 'More dairy farms are producing their own bedding. On-farm bio-bedding lowers costs, improves stable hygiene and boosts animal welfare — the foundation for healthy cows and strong milk yields.',
    },
    heroImage: '/images/app-bedding.webp',
    intro: [
      {
        de: 'Für Einstreu aus separierter Gülle ist ein konstanter Trockensubstanzgehalt von > 38 % entscheidend. Dadurch bleibt die Einstreu trocken und weist eine geringe Verkeimung auf – Euterentzündungen können zuverlässig vermieden werden.',
        en: 'Bedding made from separated slurry needs a consistent dry matter content of >38 %. This keeps the bedding dry, low in germs, and reliably prevents mastitis.',
      },
      {
        de: 'Mit Ecotech Separatoren lässt sich diese konstante Qualität sicherstellen – mit kalkulierbaren Kosten und minimalem Aufwand direkt am Betrieb.',
        en: 'Ecotech separators ensure this consistent quality — with calculable costs and minimal effort directly on the farm.',
      },
    ],
    kurzfakten: [
      { de: '12–14 h Liegezeit pro Kuh und Tag', en: '12–14 h lying time per cow per day' },
      { de: 'Bis zu +1 Liter Milch pro zusätzlicher Liegestunde', en: 'Up to +1 L of milk per additional lying hour' },
      { de: 'Staubarm, trocken & keimreduziert', en: 'Low-dust, dry & germ-reduced' },
      { de: 'Täglich frisch am Betrieb verfügbar', en: 'Fresh on-farm every day' },
      { de: 'Weniger Güllevolumen & Lagerbedarf', en: 'Less slurry volume & storage need' },
    ],
    vorteile: [
      { de: 'Wegfall von Zukaufkosten', en: 'No more bedding purchase costs' },
      { de: 'Keine Einschleppung fremder Keime in den Stall', en: 'No introduction of foreign germs into the stable' },
      { de: 'Mehr Kuhkomfort und höhere Milchleistung', en: 'More cow comfort and higher milk yield' },
      { de: 'Verbesserte Stallhygiene und sauberere Tiere', en: 'Better stable hygiene and cleaner animals' },
      { de: 'Reduzierter Lagerplatz durch tägliche Produktion', en: 'Reduced storage need through daily production' },
      { de: 'Nachhaltige Kreislaufwirtschaft am Betrieb', en: 'Sustainable on-farm circular economy' },
    ],
    typischeAnwendungen: [
      { de: 'Liegeboxen in Milchviehställen', en: 'Cubicles in dairy stables' },
      { de: 'Laufställe mit separierter Gülle', en: 'Free-stall barns with separated slurry' },
      { de: 'Betriebe mit Fokus auf Tierwohl & Effizienz', en: 'Farms focused on animal welfare & efficiency' },
    ],
    ctaTitle: { de: 'Gemeinsam zur optimalen Einstreu-Lösung', en: 'Together to the optimal bedding solution' },
    ctaDesc: {
      de: 'Wir unterstützen Sie bei der Auslegung der passenden Separationstechnik für hochwertige Bio-Einstreu – effizient, wirtschaftlich und nachhaltig.',
      en: 'We support you in sizing the right separation technology for high-quality bio bedding — efficient, economical and sustainable.',
    },
    ctaLabel: { de: 'Jetzt Beratung anfragen', en: 'Request consultation' },
  },

  // 3. Biogas
  {
    slug: 'biogas',
    cardTitle: { de: 'Biogas', en: 'Biogas' },
    cardDesc: {
      de: 'Separieren. Stabilisieren. Effizienz steigern. Mehr aus jeder Kilowattstunde.',
      en: 'Separate. Stabilize. Boost efficiency. More from every kilowatt-hour.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Biogas: Separieren. Stabilisieren. Effizienz steigern.',
      en: 'Biogas: Separate. Stabilize. Boost Efficiency.',
    },
    subtitle: {
      de: 'Biogas ist ein zentraler Baustein beim Umstieg auf erneuerbare Energien – gleichzeitig ist der Kostendruck im Anlagenbetrieb hoch. Wer die Kosten pro kWh senken will, braucht reproduzierbare Prozessqualität und robuste Technik.',
      en: 'Biogas is a key pillar of the energy transition — and operating cost pressure is high. Lowering cost per kWh requires reproducible process quality and robust technology.',
    },
    heroImage: '/images/app-biogas.webp',
    intro: [
      {
        de: 'Technologisch ausgereifte Separatoren leisten einen entscheidenden Beitrag zu wirtschaftlichem und stabilem Anlagenbetrieb. Sie trennen feste und flüssige Bestandteile zuverlässig und helfen dabei, gezielt optimale Trockensubstanzgehalte der Reststoffe einzustellen – für bessere Verwertbarkeit, geringere Transport- und Lagerkosten sowie eine sichere Einhaltung von Umweltauflagen.',
        en: 'Mature separators make a decisive contribution to economical and stable plant operation. They reliably separate solid and liquid fractions and help target optimal dry matter content in residues — for better usability, lower transport and storage costs, and reliable compliance with environmental regulations.',
      },
      {
        de: 'Da jede Biogasanlage individuelle Anforderungen und Prozessbedingungen aufweist, analysieren wir Ihre Anlage gemeinsam und entwickeln eine passgenaue Separationslösung – für maximale Wirtschaftlichkeit und Betriebssicherheit.',
        en: 'Since every biogas plant has unique requirements, we analyze your installation together and develop a tailored separation solution — for maximum profitability and operational reliability.',
      },
    ],
    kurzfakten: [
      { de: 'Einsatz vor oder nach dem Fermenter möglich', en: 'Use possible before or after the fermenter' },
      { de: 'Optimierte TS-Gehalte senken Transport- und Lagerkosten', en: 'Optimized DS contents reduce transport & storage costs' },
      { de: 'Stabile Trennleistung für robuste Prozessführung', en: 'Stable separation for robust process control' },
      { de: 'Effiziente Substrat- und Gärrestaufbereitung', en: 'Efficient substrate & digestate processing' },
      { de: 'Unterstützt die Einhaltung von Umweltauflagen', en: 'Supports compliance with environmental regulations' },
    ],
    vorteile: [
      { de: 'Erhöhung der Anlageneffizienz durch stabile Prozessführung', en: 'Increased plant efficiency through stable process control' },
      { de: 'Maximierung der Biogasproduktion durch optimierte Substrat- und Gärrestaufbereitung', en: 'Maximized biogas production through optimized substrate & digestate processing' },
      { de: 'Reduktion von Betriebsproblemen und Stillstandszeiten', en: 'Fewer operational issues and downtime' },
      { de: 'Umweltfreundliche und wirtschaftliche Gärrestentsorgung', en: 'Eco-friendly and economical digestate disposal' },
      { de: 'Sichere Einhaltung gesetzlicher Umweltauflagen', en: 'Reliable compliance with environmental regulations' },
      { de: 'Flexible Einsatzmöglichkeiten an verschiedenen Punkten der Anlage', en: 'Flexible deployment at various points in the plant' },
    ],
    typischeAnwendungen: [
      { de: 'Vor dem Fermenter zur Substrat-/Faseraufbereitung', en: 'Before the fermenter for substrate/fiber processing' },
      { de: 'Nach dem Fermenter zur Gärrest-Separation', en: 'After the fermenter for digestate separation' },
      { de: 'Am Gärrestlager zur Volumenreduktion und besseren Handhabung', en: 'At digestate storage for volume reduction and easier handling' },
      { de: 'Am Güllespeicher zur Aufbereitung und Prozessstabilisierung', en: 'At the slurry tank for processing and stabilization' },
      { de: 'Zur Einstellung definierter TS-Gehalte für Verwertung oder Ausbringung', en: 'To set defined DS contents for utilization or spreading' },
    ],
    ctaTitle: { de: 'Gemeinsam zur optimalen Lösung', en: 'Together to the optimal solution' },
    ctaDesc: {
      de: 'Jede Biogasanlage ist individuell. Wir analysieren Ihre Anlage und definieren gemeinsam Einsatzpunkt, Ziel-TS und Auslegung – für maximale Wirtschaftlichkeit und Betriebssicherheit.',
      en: 'Every biogas plant is unique. We analyze yours and define the entry point, target DS and sizing — for maximum profitability and operational reliability.',
    },
    ctaLabel: { de: 'Anlage analysieren lassen', en: 'Get your plant analyzed' },
  },

  // 4. Kunststoffrecycling
  {
    slug: 'kunststoffrecycling',
    cardTitle: { de: 'Kunststoffrecycling', en: 'Plastic Recycling' },
    cardDesc: {
      de: 'Rezyklat im Wettbewerb mit Primärkunststoff — Kostenoptimierung entscheidet.',
      en: 'Recyclate competing with virgin plastic — cost optimization decides.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Kunststoff Recycling',
      en: 'Plastic Recycling',
    },
    subtitle: {
      de: 'Kunststoffrecycling ist ein essenzieller Bestandteil der Kreislaufwirtschaft und gewinnt weltweit stetig an Bedeutung. Gleichzeitig steht recyceltes Material in starkem Preiswettbewerb mit Primärkunststoffen – daher hat die Kostenoptimierung des Aufbereitungsprozesses höchste Priorität.',
      en: 'Plastic recycling is an essential part of the circular economy and is gaining importance worldwide. At the same time, recycled material competes intensely on price with virgin plastics — making cost optimization of the recycling process a top priority.',
    },
    heroImage: '/images/app-recycling.png',
    intro: [
      {
        de: 'Der Aufbereitungsprozess umfasst typischerweise: Aufbereiten, Waschen, Trennen, Sortieren, Entwässern, Weiterverarbeiten sowie das Rückgewinnen von Rohstoffen, Prozessmedien und Abwässern. Genau hier setzen Ecotech Separatoren an.',
        en: 'The recycling process typically includes preparation, washing, separation, sorting, dewatering, further processing, and recovering raw materials, process media and wastewater. This is exactly where Ecotech separators add value.',
      },
      {
        de: 'Ecotech Separatoren werden dabei je nach Prozessstufe eingesetzt – zum Filtern, Sedimentieren, Flotieren, Zentrifugieren oder Pressen. Vielfach können energie- und wartungsintensive Aggregate (z. B. klassische Zentrifugen) ersetzt werden. Grundlage ist eine gründliche Analyse Ihrer Anlage.',
        en: 'Ecotech separators are deployed at various process steps — filtering, sedimenting, flotation, centrifuging or pressing. They often replace energy- and maintenance-intensive equipment such as classical centrifuges. The starting point is a thorough analysis of your plant.',
      },
    ],
    kurzfakten: [
      { de: 'Rezyklat im Preiswettbewerb mit Primärmaterial — Kosten pro Tonne sind entscheidend', en: 'Recyclate competes on price — cost per tonne is decisive' },
      { de: 'TS-Anhebung um wenige % senkt Entsorgungs- und Transportkosten signifikant', en: 'Raising DS by a few % significantly reduces disposal & transport costs' },
      { de: 'Wertstoffe aus Abwässern separieren und wiederverwenden', en: 'Separate valuable materials from wastewater for reuse' },
      { de: 'Abrasive Bestandteile (z. B. Sand) entfernen — weniger Verschleiß & Instandhaltung', en: 'Remove abrasive components (e.g. sand) — less wear & maintenance' },
    ],
    vorteile: [
      { de: 'Reduktion von Deponie- und Transportkosten durch Volumen- und Gewichtsreduktion', en: 'Lower landfill and transport costs through volume and weight reduction' },
      { de: 'Signifikant geringere Entsorgungskosten durch höhere TS-Gehalte', en: 'Significantly lower disposal costs through higher DS content' },
      { de: 'Rückgewinnung wertvoller Rohstoffe aus Abwässern zur Wiederverwendung', en: 'Recovery of valuable raw materials from wastewater for reuse' },
      { de: 'Schutz nachgelagerter Komponenten durch Abscheidung abrasiver Stoffe (z. B. Sand)', en: 'Protection of downstream components through removal of abrasives' },
      { de: 'Weniger Energie- und Wartungsaufwand durch potenziellen Ersatz klassischer Zentrifugen', en: 'Lower energy & maintenance via potential replacement of classical centrifuges' },
    ],
    typischeAnwendungen: [
      { de: 'Abwasserbehandlung aus Wasch- und Reinigungsstufen (Filtern / Sedimentieren)', en: 'Wastewater treatment from washing & cleaning stages (filtering / sedimenting)' },
      { de: 'Entwässerung von Störstoffen und Feststoffen zur Volumen-/Gewichtsreduktion', en: 'Dewatering of contaminants and solids for volume/weight reduction' },
      { de: 'Abscheidung abrasiver Bestandteile (z. B. Sand) zum Schutz der Anlagenkomponenten', en: 'Removal of abrasive components (e.g. sand) to protect plant components' },
      { de: 'Rückgewinnung von Wertstoffen aus Prozessmedien und Abwässern', en: 'Recovery of valuable materials from process media and wastewater' },
      { de: 'Einsatz im Gut-Strom in Wasch- und Trockenstufen zur Qualitätssteigerung', en: 'Use in clean-stream washing & drying stages to improve quality' },
    ],
    ctaTitle: { de: 'Lassen Sie uns Ihren Aufbereitungsprozess evaluieren', en: 'Let us evaluate your recycling process' },
    ctaDesc: {
      de: 'Wir prüfen gemeinsam Inputmaterial, Störstoffspektrum, Medienführung und Ziel-TS – und identifizieren die optimale Einsatzstelle für Ecotech Separatorentechnologie. Ergebnis: stabile Prozesse, höhere Qualität und messbare Kostensenkung.',
      en: 'We jointly review input material, contaminant spectrum, media flow and target DS — and identify the optimal deployment for Ecotech separator technology. Result: stable processes, higher quality and measurable cost reduction.',
    },
    ctaLabel: { de: 'Prozess evaluieren', en: 'Evaluate process' },
  },

  // 5. Kommunale Anwendungen
  {
    slug: 'kommunale-anwendungen',
    cardTitle: { de: 'Kommunale Anwendungen', en: 'Municipal Applications' },
    cardDesc: {
      de: 'Effiziente Separation für nachhaltige Kreisläufe — Ressourcenschutz auf hohem ökologischen Niveau.',
      en: 'Efficient separation for sustainable cycles — resource protection at the highest ecological level.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Kommunale Anwendungen',
      en: 'Municipal Applications',
    },
    subtitle: {
      de: 'Ressourcenschutz, die Rückführung wiederverwertbarer Stoffe in den Wirtschaftskreislauf und eine kostengünstige Entsorgung auf hohem ökologischen Niveau prägen den kommunalen Alltag. Separationstechnologie unterstützt dabei, komplexe Stoffströme effizient und wirtschaftlich zu behandeln.',
      en: 'Resource protection, returning recyclable materials to the economic cycle, and cost-effective disposal at high ecological standards define municipal operations. Separation technology helps handle complex material streams efficiently and economically.',
    },
    heroImage: '/images/app-municipal.jpg',
    intro: [
      {
        de: 'Kommunale Betriebe arbeiten entlang komplexer Verfahrensketten: mechanisches Aufbereiten, Zerkleinern sowie mehrstufiges Sieben und Filtern bilden die Grundlage für eine hochwertige Aufbereitung der Abfallstoffe. Strenge Reglementierungen erfordern robuste Technik und zuverlässige Prozessqualität.',
        en: 'Municipal operations work along complex process chains: mechanical preparation, shredding, and multi-stage screening and filtering form the basis for high-quality waste processing. Strict regulations demand robust technology and reliable process quality.',
      },
      {
        de: 'Separatoren kommen erfolgreich in Kläranlagen zur effizienten Klärschlammentwässerung ebenso wie in Abfallwirtschaftszentren zum Einsatz. Sie ermöglichen eine deutliche Volumenreduktion, verbessern die Weiterverwertbarkeit der Feststoffe und senken nachhaltig Entsorgungs- und Betriebskosten.',
        en: 'Separators are successfully used in wastewater treatment plants for efficient sludge dewatering, as well as in waste management centers. They enable significant volume reduction, improve solid reuse, and sustainably reduce disposal and operating costs.',
      },
      {
        de: 'Aufgrund der Vielfältigkeit der zu separierenden Materialien muss die Konfiguration der Maschinen exakt abgestimmt werden: beispielsweise werden in Klärschlämmen oftmals Kunststoffschnecken statt Stahlschnecken verwendet – mit adaptierten Steigungen und Spaltmaßen.',
        en: 'Given the variety of materials to be separated, machine configurations must be precisely adapted: in sewage sludge, for example, plastic screws are often used instead of steel screws — with adapted pitches and gap dimensions.',
      },
    ],
    kurzfakten: [
      { de: 'Ressourcenschutz & Kreislaufwirtschaft', en: 'Resource protection & circular economy' },
      { de: 'Prozesskette: Aufbereiten – Zerkleinern – Sieben – Filtern', en: 'Process chain: preparation – shredding – screening – filtering' },
      { de: 'Fokus: sichere Prozesse trotz strenger Reglementierungen', en: 'Focus: safe processes despite strict regulations' },
    ],
    vorteile: [
      { de: 'Reduktion von Volumen- und Transportaufwand durch wirksame Entwässerung', en: 'Reduced volume and transport via effective dewatering' },
      { de: 'Verbesserte Weiterverwertbarkeit separierter Feststoffe', en: 'Improved reusability of separated solids' },
      { de: 'Kostensenkung bei Entsorgung und Betrieb – bei hohem ökologischen Standard', en: 'Lower disposal & operating costs — at high ecological standards' },
      { de: 'Zuverlässige Prozesse auch bei wechselnden Stoffzusammensetzungen', en: 'Reliable processes even with varying material composition' },
      { de: 'Unterstützung bei der Einhaltung strenger Vorgaben und Dokumentationspflichten', en: 'Support with compliance and documentation requirements' },
    ],
    typischeAnwendungen: [
      { de: 'Kläranlagen: Klärschlammentwässerung zur Volumenreduktion und effizienten Logistik', en: 'WWTPs: sludge dewatering for volume reduction & efficient logistics' },
      { de: 'Abfallwirtschaftszentren: Separation und Entwässerung organischer bzw. gemischter Stoffströme', en: 'Waste centers: separation & dewatering of organic or mixed streams' },
      { de: 'Mechanische Aufbereitungslinien: Nachbehandlung nach Sieb- und Filterstufen', en: 'Mechanical processing lines: post-treatment after screening & filtering' },
    ],
    ctaTitle: { de: 'Gemeinsam zur optimalen Lösung', en: 'Together to the optimal solution' },
    ctaDesc: {
      de: 'Beschreiben Sie uns Ihren kommunalen Stoffstrom (Material, Durchsatz, TS-Gehalt, Zielsetzung) – wir melden uns mit einer passenden Separationslösung.',
      en: 'Describe your municipal material stream (material, throughput, DS, target) — we will respond with a tailored separation solution.',
    },
    ctaLabel: { de: 'Anfrage senden', en: 'Send request' },
  },

  // 6. Zellstoff & Papier
  {
    slug: 'zellstoff-papier',
    cardTitle: { de: 'Zellstoff & Papier', en: 'Pulp & Paper' },
    cardDesc: {
      de: 'Mechanische Abwasserreinigung mit hoher Feststoffabscheidung – inklusive Mikroplastik – bei reduziertem Einsatz von Flockungsmitteln.',
      en: 'Mechanical wastewater treatment with high solid removal — including microplastics — with reduced use of flocculants.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Zellstoff & Papier',
      en: 'Pulp & Paper',
    },
    subtitle: {
      de: 'Die Papierproduktion zählt zu den wasserintensivsten Industrieprozessen. Pro Tonne Papier fallen in modernen Fabriken bis zu 50 m³ Abwasser an. Ecotech Styria Separatoren übernehmen bei der Abwasserreinigung eine wichtige Rolle.',
      en: 'Paper production is one of the most water-intensive industrial processes. Modern paper mills generate up to 50 m³ of wastewater per tonne of paper. Ecotech Styria separators play an important role in treating that water.',
    },
    heroImage: '/images/app-paper.webp',
    intro: [
      {
        de: 'Für Herstellung, Hilfs- und Reinigungszwecke fallen pro Tonne Papier in modernen Fabriken bis zu 50 m³ Abwasser an – die Menge variiert je nachdem, ob Recyclingpapier oder Papier aus frischem Zellstoff produziert wird.',
        en: 'Up to 50 m³ of wastewater are produced per tonne of paper for manufacturing, auxiliary and cleaning purposes — the volume varies depending on whether recycled or virgin-pulp paper is produced.',
      },
      {
        de: 'Ecotech Styria Separatoren übernehmen bei der Abwasserreinigung eine wichtige Rolle: Sie separieren einen hohen Anteil fester Stoffe – darunter auch Mikroplastik – mechanisch aus den Abwässern. Gleichzeitig kann der Einsatz von Flockungsmitteln wie Polyacrylamid deutlich reduziert werden.',
        en: 'Ecotech Styria separators play a key role in wastewater treatment: they mechanically remove a high share of solids — including microplastics. At the same time, flocculant use such as polyacrylamide can be significantly reduced.',
      },
      {
        de: 'Mit Ecotech Styria Separatoren sichern Zellstoff- und Papierfabriken eine wirtschaftliche, ressourcenschonende und umweltgerechte Abwasserbehandlung – und stärken gleichzeitig ihre Zukunftsfähigkeit.',
        en: 'With Ecotech Styria separators, pulp and paper mills secure economical, resource-efficient and environmentally sound wastewater treatment — strengthening their long-term competitiveness.',
      },
    ],
    kurzfakten: [
      { de: 'Bis 50 m³ Abwasser pro Tonne Papier', en: 'Up to 50 m³ of wastewater per tonne of paper' },
      { de: 'Mechanische Feststoffabscheidung inkl. Mikroplastik', en: 'Mechanical solid removal incl. microplastics' },
      { de: 'Reduzierter Bedarf an Flockungsmitteln (z. B. Polyacrylamid)', en: 'Reduced need for flocculants (e.g. polyacrylamide)' },
    ],
    vorteile: [
      { de: 'Beste Ergebnisse bei gleichzeitig geringem Energieaufwand', en: 'Best results with simultaneously low energy use' },
      { de: 'Kundenfreundliche Bedienbarkeit und kompakte Bauweise', en: 'User-friendly operation and compact design' },
      { de: 'Hohe Verarbeitungsqualität und Lebensdauer', en: 'High processing quality and service life' },
      { de: 'Einsparung von Investitions- und Betriebskosten durch Reduktion oder Entfall von Voreindickungsaggregaten dank der Befüllung mit niedrigen TS-Konzentrationen', en: 'Savings in investment and operating costs by reducing or eliminating pre-thickening units thanks to feeding at low DS concentrations' },
      { de: 'Höhere Abscheidungsrate im Vergleich zu Siebbandpressen', en: 'Higher separation rate compared to belt presses' },
      { de: 'Höherer Trockengehalt im Feststoff → reduzierte Transport- & Entsorgungskosten oder verbesserter Heizwert bei Monoverbrennung', en: 'Higher solid dry content → reduced transport & disposal costs or improved calorific value in mono-incineration' },
    ],
    typischeAnwendungen: [
      { de: 'Entwässerung von Rejekten der Stoffaufbereitung', en: 'Dewatering of rejects from stock preparation' },
      { de: 'Ersatz von Siebbandpressen und Zentrifugen', en: 'Replacement of belt presses and centrifuges' },
      { de: 'Entwässerung von Pulper-Rejekten (Spuckstoffe)', en: 'Dewatering of pulper rejects (tailings)' },
      { de: 'Rückgewinnung von Rohstoffen aus Abwässern', en: 'Recovery of raw materials from wastewater' },
      { de: 'Entwässerung von faserhaltigen Schlämmen (Primärschlamm)', en: 'Dewatering of fibrous sludge (primary sludge)' },
    ],
    ctaTitle: { de: 'Interesse an einer Auslegung für Ihre Anlage?', en: 'Interested in sizing for your plant?' },
    ctaDesc: {
      de: 'Sprechen Sie mit uns über Durchsatz, TS-Bereich und Zielwerte – wir unterstützen Sie bei der Auswahl des passenden Separators und der Integration in Ihren Prozess.',
      en: 'Talk to us about throughput, DS range and target values — we will support you in selecting the right separator and integrating it into your process.',
    },
    ctaLabel: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
  },

  // 7. Prozessmedien und Abwässer (renamed from MDF/Holzfaserplatten per markup #6)
  {
    slug: 'prozessmedien-und-abwaesser',
    cardTitle: { de: 'Prozessmedien und Abwässer', en: 'Process Media & Wastewater' },
    cardDesc: {
      de: 'Saubere Stoffströme für stabile Prozesse — Entfernung von Kunststoffen und Metallen aus Altpapier-Aufbereitung.',
      en: 'Clean material streams for stable processes — removal of plastics and metals from waste paper recycling.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Prozessmedien und Abwässer',
      en: 'Process Media and Wastewater',
    },
    subtitle: {
      de: 'In der Hartfaserplattenproduktion ist die zuverlässige Entfernung von Störstoffen entscheidend. Moderne Separationstechnologie stellt saubere Rohstoffströme sicher und senkt gleichzeitig Entsorgungs- und Betriebskosten.',
      en: 'In hardboard production, reliable removal of contaminants is critical. Modern separation technology ensures clean material streams and simultaneously reduces disposal and operating costs.',
    },
    heroImage: '/images/app-mdf.png',
    intro: [
      {
        de: 'Für die Herstellung von Hartfaserplatten werden große Mengen an Altpapier eingesetzt. Bevor dieses Material in den Produktionsprozess eingebracht werden kann, müssen Verunreinigungen wie Kunststofffolien, Kunststoffstreifen oder metallische Bestandteile zuverlässig entfernt werden. Nur so lassen sich Anlagenstörungen vermeiden und eine gleichbleibend hohe Produktqualität sicherstellen.',
        en: 'Hardboard production uses large quantities of waste paper. Before this material enters the production process, contaminants like plastic films, plastic strips, or metallic parts must be reliably removed. Only then can plant disruptions be avoided and consistent product quality ensured.',
      },
      {
        de: 'Der Einsatz einer leistungsfähigen Rejectpresse hat sich hierbei besonders bewährt. Die ausgeschiedenen Störstoffe werden stark entwässert, wodurch Trockengehalte mit über 40 % TS erreicht werden. Das reduzierte Volumen senkt Transport- und Entsorgungskosten deutlich.',
        en: 'A high-performance reject press has proven particularly effective. Contaminants are heavily dewatered, achieving dry contents above 40 % DS. The reduced volume significantly cuts transport and disposal costs.',
      },
      {
        de: 'Die Aufbereitung industrieller Stoffströme erfolgt über mehrere aufeinander abgestimmte Prozessschritte. Dazu zählen das Aufbereiten und Waschen der Materialien, das gezielte Trennen und Sortieren unterschiedlicher Fraktionen sowie das anschließende Entwässern. Die Kombination dieser Methoden lässt sich für hohe Abscheideleistungen und stabile Prozessbedingungen realisieren.',
        en: 'Processing industrial material streams follows multiple coordinated steps: preparation and washing of materials, targeted separation and sorting of different fractions, and subsequent dewatering. Combining these methods enables high separation rates and stable process conditions.',
      },
    ],
    kurzfakten: [
      { de: 'Altpapier als zentraler Rohstoff', en: 'Waste paper as a key raw material' },
      { de: 'Entfernung von Kunststoffen und Metallen', en: 'Removal of plastics and metals' },
      { de: 'Reject-Entwässerung mit > 40 % TS', en: 'Reject dewatering with >40 % DS' },
      { de: 'Reduzierte Transport- und Entsorgungskosten', en: 'Reduced transport and disposal costs' },
    ],
    vorteile: [
      { de: 'Hohe Prozessstabilität', en: 'High process stability' },
      { de: 'Saubere Stoffströme', en: 'Clean material streams' },
      { de: 'Geringere Stillstandszeiten', en: 'Reduced downtime' },
      { de: 'Wirtschaftliche Entwässerung', en: 'Economical dewatering' },
      { de: 'Robuste Technik für den Dauerbetrieb', en: 'Robust technology for continuous operation' },
    ],
    typischeAnwendungen: [
      { de: 'Hartfaserplatten- / MDF-Produktion', en: 'Hardboard / MDF production' },
      { de: 'Reject-Aufbereitung in Stoffaufbereitungslinien', en: 'Reject processing in stock preparation lines' },
      { de: 'Filterung und Entwässerung von Prozessmedien', en: 'Filtering and dewatering of process media' },
      { de: 'Behandlung industrieller Abwässer mit hohem Feststoffanteil', en: 'Treatment of industrial wastewater with high solid content' },
    ],
    ctaTitle: { de: 'Gemeinsam zur optimalen Lösung', en: 'Together to the optimal solution' },
    ctaDesc: {
      de: 'Wir unterstützen Sie bei Auslegung, Integration und Inbetriebnahme – abgestimmt auf Ihre Stoffströme und betrieblichen Anforderungen.',
      en: 'We support you with sizing, integration and commissioning — tailored to your material streams and operational requirements.',
    },
    ctaLabel: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
  },

  // 8. Nebenprodukte und Abwässer (renamed from Lebensmittelindustrie per markup #7)
  {
    slug: 'nebenprodukte-und-abwaesser',
    cardTitle: { de: 'Nebenprodukte und Abwässer', en: 'By-products & Wastewater' },
    cardDesc: {
      de: 'Effiziente Entwässerung von Nebenprodukten und Abwässern — aus Wertstoffen werden Einsparpotenziale.',
      en: 'Efficient dewatering of by-products and wastewater — turn waste streams into savings.',
    },
    badge: { de: 'Anwendung', en: 'Application' },
    title: {
      de: 'Nebenprodukte und Abwässer',
      en: 'By-products and Wastewater',
    },
    subtitle: {
      de: 'Separation trennt Nebenprodukte und Abwässer zuverlässig in Fest- und Flüssigphase, reduziert Volumen und schafft die Grundlage für eine wirtschaftliche Weiterverwertung.',
      en: 'Separation reliably splits by-products and wastewater into solid and liquid phases, reducing volume and creating the foundation for economical reuse.',
    },
    heroImage: '/images/app-food.webp',
    intro: [
      {
        de: 'In der Lebensmittelindustrie fallen entlang der gesamten Wertschöpfungskette große Mengen an feuchten Nebenprodukten, Rückständen und Abwässern an. Moderne Separationstechnik ermöglicht hier eine wirtschaftliche und ressourcenschonende Aufbereitung.',
        en: 'The food industry generates large quantities of moist by-products, residues and wastewater along the entire value chain. Modern separation technology enables economical and resource-efficient processing.',
      },
      {
        de: 'Der Nutzen ist klar messbar: Durch die mechanische Trennung in feste und flüssige Phasen lässt sich das Abfallvolumen deutlich reduzieren – in vielen Fällen um bis zu 30 %. Das vereinfacht die Entsorgung erheblich, senkt Transport- und Entsorgungskosten und eröffnet neue Möglichkeiten zur Weiterverwertung der separierten Stoffe.',
        en: 'The benefit is clearly measurable: mechanical separation into solid and liquid phases significantly reduces waste volume — often by up to 30 %. Disposal becomes much easier, transport and disposal costs drop, and new reuse possibilities open up.',
      },
      {
        de: 'Die anfallenden Feststoffe müssen nicht zwangsläufig entsorgt werden. Je nach Zusammensetzung können sie als Dünger in der Landwirtschaft eingesetzt oder als wertvoller Rohstoff zur Tierfutterherstellung weiterverarbeitet werden. Die flüssige Phase wird häufig als Prozess- oder Waschwasser erneut in den Produktionskreislauf eingebunden.',
        en: 'Resulting solids do not necessarily have to be disposed of. Depending on composition, they can be used as agricultural fertilizer or processed into valuable feed materials. The liquid phase is often reintegrated into the production cycle as process or wash water.',
      },
    ],
    kurzfakten: [
      { de: 'Abfallvolumenreduktion häufig bis zu 30 %', en: 'Waste volume reduction often up to 30 %' },
      { de: 'Mechanische Trennung ohne chemische Zusätze', en: 'Mechanical separation without chemical additives' },
      { de: 'Feststoffe als Dünger oder Tierfutter nutzbar', en: 'Solids usable as fertilizer or animal feed' },
      { de: 'Flüssigphase als Prozess- oder Waschwasser rückführbar', en: 'Liquid phase reusable as process/wash water' },
    ],
    vorteile: [
      { de: 'Reduziertes Abfallvolumen', en: 'Reduced waste volume' },
      { de: 'Weniger Entsorgungskosten', en: 'Lower disposal costs' },
      { de: 'Wertstoffnutzung', en: 'Use of valuable materials' },
      { de: 'Wasserrückführung', en: 'Water recirculation' },
    ],
    typischeAnwendungen: [
      { de: 'Obst- und Gemüseverarbeitung', en: 'Fruit and vegetable processing' },
      { de: 'Olivenrückstände nach Zweiphasendekanter', en: 'Olive residues after two-phase decanter' },
      { de: 'Getreideschlempe in Brennereien', en: 'Grain mash in distilleries' },
      { de: 'Treber in Brauereien', en: 'Spent grain in breweries' },
      { de: 'Rückstände aus Palmöl- und Stärkeproduktion', en: 'Residues from palm oil and starch production' },
    ],
    ctaTitle: { de: 'Sie möchten Ihren Stoffstrom wirtschaftlich entwässern?', en: 'Want to dewater your material stream economically?' },
    ctaDesc: {
      de: 'Teilen Sie uns Medium, Durchsatz und gewünschte Ziel-TS mit – wir erstellen ein passendes Separationskonzept.',
      en: 'Share medium, throughput and target DS — we will draft a tailored separation concept.',
    },
    ctaLabel: { de: 'Anfrage senden', en: 'Send request' },
  },
];

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find(a => a.slug === slug);
}
