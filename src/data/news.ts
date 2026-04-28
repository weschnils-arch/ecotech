export interface NewsItem {
  slug: string;
  type: 'news' | 'event';
  image: string;
  date: string;
  titleDe: string;
  titleEn: string;
  excerptDe: string;
  excerptEn: string;
  // Placeholder body paragraphs for the detail page
  bodyDe: string[];
  bodyEn: string[];
  // Optional photo gallery rendered below the body
  gallery?: string[];
  // When true, hides the "full report coming soon" placeholder
  published?: boolean;
}

export const newsItems: NewsItem[] = [
  // --- NEWS ---
  {
    slug: 'bgii-800-vorgestellt',
    type: 'news',
    image: '/images/product-bg2.jpg',
    date: '20. Januar 2025',
    titleDe: 'BGII-800: Unser Flaggschiff vorgestellt',
    titleEn: 'BGII-800: Our Flagship Unveiled',
    excerptDe: 'Die Filterschneckenpresse BGII-800 ist unser absolutes Flaggschiff im Bereich der effizienten Fest-Flüssig-Trennung – mit patentierter Geometrie, automatischer TS-Regelung und vollautomatischer Wascheinrichtung.',
    excerptEn: 'The BGII-800 filter screw press is our absolute flagship for efficient solid–liquid separation – featuring patented geometry, automatic dry-matter control and a fully automatic washing system.',
    bodyDe: [
      'Die Filterschneckenpresse BGII-800 ist unser absolutes Flaggschiff im Bereich der effizienten Fest-Flüssig-Trennung und gleichzeitig die nächste Evolutionsstufe im Bereich der Schneckenseparatoren. Entwickelt für höchste Ansprüche in industriellen Anwendungen, überzeugt sie durch ihre patentierte Geometrie, eine intelligente automatische TS-Regelung sowie eine vollautomatische Wascheinrichtung. Das Ergebnis: maximale Effizienz, hohe Prozesssicherheit und minimaler Verschleiß.',
      '__H__Ihre Vorteile auf einen Blick',
      '__SH__Patentierte Filterschneckengeometrie',
      'Die innovative und patentierte Filterschneckengeometrie mit zusätzlichen Schneckenflügeln im Filterbereich sorgt für einen gesteigerten spezifischen Durchsatz bei gleichzeitig reduziertem Verschleiß. Dadurch wird eine besonders wirtschaftliche und langlebige Betriebsweise ermöglicht.',
      '__SH__Patentiertes Stützgehäuse',
      'Das ebenfalls patentierte Stützgehäuse stützt den Presssieb zuverlässig und absorbiert den entstehenden Berstdruck. Dies ermöglicht einen höheren Pressdruck und damit einen höheren TS-Gehalt im Feststoff – bei gleichzeitig geringerem Materialverschleiß.',
      '__SH__Automatische TS-Regelung',
      'Die integrierte automatische TS-Regelung reagiert flexibel auf Veränderungen in Zulaufmenge und Konsistenz. So bleibt der Betriebszustand konstant, die Prozesssicherheit steigt, und die Anlage arbeitet jederzeit effizient und stabil.',
      '__SH__Vollautomatische Wascheinrichtung',
      'Die vollautomatische Wascheinrichtung mit leistungsstarken 360°-Sprühdüsen verhindert zuverlässig Anhaftungen und Verstopfungen an den Siebkörben. Die Reinigung erfolgt in automatischen Intervallen oder kann bei Bedarf manuell aktiviert werden.',
      '__H__Interesse geweckt?',
      'Sie möchten mehr über die BGII-800 erfahren oder haben Fragen zu Einsatzmöglichkeiten und technischen Details? Kontaktieren Sie uns gerne – wir beraten Sie persönlich und kompetent.',
    ],
    bodyEn: [
      'The BGII-800 filter screw press is our absolute flagship for efficient solid–liquid separation and at the same time the next evolutionary stage in screw separators. Designed for the highest demands in industrial applications, it delivers outstanding performance through its patented geometry, intelligent automatic dry-matter control and a fully automatic washing system. The result: maximum efficiency, high process reliability and minimal wear.',
      '__H__Your advantages at a glance',
      '__SH__Patented filter screw geometry',
      'The innovative and patented filter screw geometry with additional screw flights in the filter section delivers increased specific throughput with simultaneously reduced wear. This enables an exceptionally economical and long-lasting operation.',
      '__SH__Patented support housing',
      'The likewise patented support housing reliably supports the press screen and absorbs the bursting pressure that arises. This allows a higher pressing pressure and therefore a higher dry-matter content in the solid – with simultaneously lower material wear.',
      '__SH__Automatic dry-matter control',
      'The integrated automatic dry-matter control responds flexibly to changes in inlet volume and consistency. Operating conditions remain constant, process reliability increases, and the system operates efficiently and stably at all times.',
      '__SH__Fully automatic washing system',
      'The fully automatic washing system with powerful 360° spray nozzles reliably prevents build-up and blockages on the screen baskets. Cleaning takes place at automatic intervals or can be triggered manually when required.',
      '__H__Interested?',
      'Would you like to learn more about the BGII-800 or do you have questions about applications and technical details? Get in touch – we will advise you personally and competently.',
    ],
    published: true,
  },

  {
    slug: 'kooperation-circulyzer',
    type: 'news',
    image: '/images/news-circulyzer.webp',
    date: 'April 2026',
    titleDe: 'Kooperation Circulyzer powered by Ecotech Styria',
    titleEn: 'Circulyzer Cooperation – powered by Ecotech Styria',
    excerptDe: 'Ab April 2026 starten Ecotech Styria und Circulyzer ihre gemeinsame Zusammenarbeit im Bereich Kunststoffrecycling – mit innovativer Technologie zur nassen Dichtetrennung und Wäsche verschiedenster Reststoffgemische.',
    excerptEn: 'From April 2026, Ecotech Styria and Circulyzer launch their cooperation in plastic recycling – with innovative technology for wet density separation and washing of a wide range of residue mixtures.',
    bodyDe: [
      'Ab April 2026 starten Ecotech Styria und Circulyzer ihre gemeinsame Zusammenarbeit im Bereich des Kunststoffrecyclings. Mit dieser Partnerschaft erweitern wir unser Angebot um eine innovative Technologie zur nassen Dichtetrennung und Wäsche verschiedenster Reststoff- und Abfallgemische.',
      '__H__Innovative Technologie für höchste Trennqualität',
      'Der Circulyzer ist eine leistungsstarke Anlage zur effizienten Aufbereitung von Kunststoff- und Reststoffströmen. Das Kernstück der Anlage ist ein hochmoderner Zentrifugalkraftscheider, der eine besonders präzise Trennung ermöglicht.',
      'Mit einer Wertstoffreinheit und -ausbringung von über 95 % sowie Durchsätzen von bis zu 30 m³/h (9 t/h) setzt der Circulyzer neue Maßstäbe in der Recyclingbranche.',
      '__H__Ihre Vorteile auf einen Blick',
      '__BULLET__Höchste Trennqualität durch innovative Zentrifugalkrafttechnologie',
      '__BULLET__Über 95 % Wertstoffreinheit und -ausbringung',
      '__BULLET__Hohe Durchsatzleistung von bis zu 30 m³/h bzw. 9 t/h',
      '__BULLET__Effiziente Nasswäsche für unterschiedlichste Reststoff- und Abfallgemische',
      '__BULLET__Optimale Ergänzung zum bestehenden Produktportfolio von Ecotech Styria',
      'Dank dieser Technologie profitieren unsere Kunden von einer noch höheren Effizienz in der Materialtrennung, einer verbesserten Wertstoffrückgewinnung und einer wirtschaftlicheren Verarbeitung im Bereich des Kunststoffrecyclings.',
      '__H__Interesse geweckt?',
      'Sie möchten mehr über den Circulyzer und seine Einsatzmöglichkeiten erfahren? Kontaktieren Sie uns gerne – wir beraten Sie persönlich und finden die passende Lösung für Ihre Anforderungen.',
    ],
    bodyEn: [
      'From April 2026, Ecotech Styria and Circulyzer are launching their joint cooperation in the field of plastic recycling. With this partnership we are expanding our portfolio with an innovative technology for wet density separation and washing of a wide variety of residue and waste mixtures.',
      '__H__Innovative technology for highest separation quality',
      'The Circulyzer is a powerful system for the efficient treatment of plastic and residue streams. At the heart of the system is a state-of-the-art centrifugal force separator that enables exceptionally precise separation.',
      'With a recovered-material purity and yield of over 95 % and throughputs of up to 30 m³/h (9 t/h), the Circulyzer sets new standards in the recycling industry.',
      '__H__Your advantages at a glance',
      '__BULLET__Highest separation quality thanks to innovative centrifugal force technology',
      '__BULLET__Over 95 % recovered-material purity and yield',
      '__BULLET__High throughput capacity of up to 30 m³/h or 9 t/h',
      '__BULLET__Efficient wet washing for a wide range of residue and waste mixtures',
      '__BULLET__Perfect complement to the existing Ecotech Styria product portfolio',
      'Thanks to this technology, our customers benefit from even higher efficiency in material separation, improved recovery of valuable materials and more economical processing in the field of plastic recycling.',
      '__H__Interested?',
      'Would you like to learn more about the Circulyzer and its applications? Get in touch – we will advise you personally and find the right solution for your requirements.',
    ],
    published: true,
  },
  {
    slug: 'bgi-400-plug-and-play',
    type: 'news',
    image: '/images/product-bgi400-pnp-new1.webp',
    date: 'April 2026',
    titleDe: 'BGI-400 Plug & Play: Maximale Mobilität in der Separation',
    titleEn: 'BGI-400 Plug & Play: Maximum Mobility in Separation',
    excerptDe: 'Mit der BGI-400 Plug & Play präsentiert Ecotech Styria die nächste Evolutionsstufe der bewährten BGI-400 Serie – Anstecken und Loslegen für unterschiedlichste Fasersuspensionen.',
    excerptEn: 'With the BGI-400 Plug & Play, Ecotech Styria presents the next evolution of the proven BGI-400 series – plug in and go, for a wide range of fibre suspensions.',
    bodyDe: [
      'Mit der BGI-400 Plug & Play präsentiert Ecotech Styria die nächste Evolutionsstufe der bewährten BGI-400 Serie. Diese Erweiterung wurde speziell entwickelt, um den Anforderungen an Flexibilität und Geschwindigkeit in der modernen Landwirtschaft gerecht zu werden.',
      '__QUOTE__„Anstecken und Loslegen" – Die Plug & Play Lösung für unterschiedlichste Fasersuspensionen.',
      'Das Herzstück der Anlage ist die Montage auf einem mobilen Untergestell, wodurch die Maschine schnell und unkompliziert zwischen verschiedenen Einsatzorten bewegt werden kann. Dies macht sie zur idealen Lösung für landwirtschaftliche Betriebe, die mehrere Höfe oder räumlich getrennte Güllegruben bewirtschaften.',
      '__H__Technische Highlights im Überblick',
      '__BULLET__Eigenständige Drehkolbenpumpe: Inklusive integriertem Steinfangkasten zur Fremdkörperabscheidung für maximalen Maschinenschutz.',
      '__BULLET__Intelligente Steuerung: Die Kombination aus automatischer Überdrucküberwachung und Frequenzumrichtersteuerung regelt die ideale Zuführmenge völlig selbstständig.',
      '__BULLET__Flexibilität: Geeignet für verschiedenste Fasersuspensionen – optimiert für die Eigenmechanisierung mittelgroßer Betriebe.',
      'Die BGI-400 Plug & Play vereint technische Präzision mit praxisnaher Handhabung. Sie ermöglicht eine effiziente Gülleseparation genau dort, wo sie benötigt wird, ohne lange Rüstzeiten oder komplexe Installationen.',
    ],
    bodyEn: [
      'With the BGI-400 Plug & Play, Ecotech Styria presents the next evolution of the proven BGI-400 series. This extension has been developed specifically to meet the demand for flexibility and speed in modern agriculture.',
      '__QUOTE__"Plug in and go" – the Plug & Play solution for the widest range of fibre suspensions.',
      'At the heart of the system is its mounting on a mobile undercarriage, allowing the machine to be moved quickly and easily between different sites. This makes it the ideal solution for agricultural operations managing several farms or geographically separated slurry pits.',
      '__H__Technical highlights at a glance',
      '__BULLET__Dedicated rotary lobe pump: including an integrated stone trap for foreign-object separation for maximum machine protection.',
      '__BULLET__Intelligent control: the combination of automatic overpressure monitoring and frequency-converter control regulates the ideal feed rate fully automatically.',
      '__BULLET__Flexibility: suitable for a wide range of fibre suspensions – optimised for the in-house mechanisation of medium-sized operations.',
      'The BGI-400 Plug & Play combines technical precision with practical, hands-on handling. It enables efficient slurry separation exactly where it is needed – without long set-up times or complex installations.',
    ],
    gallery: [
      '/images/product-bgi400-pnp-new2.webp',
      '/images/product-bgi400-pnp-new3.webp',
      '/images/product-bgi400-pnp-new5.webp',
      '/images/product-bgi400-pnp-7997.webp',
    ],
    published: true,
  },

  // --- EVENTS ---
  {
    slug: 'agritechnica-2025',
    type: 'event',
    image: '/images/event-agritechnica.png',
    date: '09. – 15. November 2025',
    titleDe: 'Nachbericht Agritechnica – Erfolgreicher Messeauftritt mit Farmtech',
    titleEn: 'Agritechnica Report – Successful Trade Fair Appearance with Farmtech',
    excerptDe: 'Vom 09. bis 15. November 2025 präsentierte unser Vertriebspartner Farmtech in Hannover wegweisende Lösungen für die moderne Landwirtschaft – mit dem neuen Separator Seplex 400 als Highlight.',
    excerptEn: 'From November 9–15, 2025, our distribution partner Farmtech presented forward-looking solutions for modern agriculture in Hanover — with the new Seplex 400 separator as the highlight.',
    bodyDe: [
      'Ein starker Auftritt in Hannover: Vom 09. bis 15. November 2025 präsentierte unser Vertriebspartner Farmtech wegweisende Lösungen für die moderne Landwirtschaft.',
      'Neben innovativer Transport- und Gülletechnik stand ein Highlight im Fokus: der neue Separator Seplex 400. Die Premiere sorgte für reges Interesse und zahlreiche Fachgespräche am beeindruckenden Messestand.',
      'Wir gratulieren dem gesamten Team von Farmtech zu dieser hervorragenden Messepräsenz und freuen uns auf die weitere gemeinsame Erfolgsgeschichte!',
    ],
    bodyEn: [
      'A strong showing in Hanover: from November 9–15, 2025, our distribution partner Farmtech presented forward-looking solutions for modern agriculture.',
      'Alongside innovative transport and slurry technology, one highlight took center stage: the new Seplex 400 separator. Its premiere generated lively interest and numerous in-depth conversations at the impressive trade fair stand.',
      'We congratulate the entire Farmtech team on this outstanding trade fair presence and look forward to continuing our successful partnership.',
    ],
    published: true,
  },
  {
    slug: 'wps-farm-show-2026',
    type: 'event',
    image: '/images/event-wps-farm-show-1.webp',
    date: '24. – 26. März 2026',
    titleDe: 'WPS Farm Show: Ecotech Styria erobert den US-Markt',
    titleEn: 'WPS Farm Show: Ecotech Styria Conquers the US Market',
    excerptDe: 'Vom 24. bis 26. März präsentierte sich Ecotech Styria gemeinsam mit Vanderloop Equipment auf der WPS Farm Show in Oshkosh, Wisconsin – mit der US-Premiere der Filterschneckenpresse BGII-800.',
    excerptEn: 'From March 24–26, Ecotech Styria appeared together with Vanderloop Equipment at the WPS Farm Show in Oshkosh, Wisconsin — featuring the US premiere of the BGII-800 filter press screw.',
    bodyDe: [
      'Vom 24. bis 26. März präsentierte sich Ecotech Styria gemeinsam mit dem starken lokalen Vertriebspartner Vanderloop Equipment auf der renommierten WPS Farm Show in Oshkosh, Wisconsin. Als zweitgrößter Milchproduzent der USA bot Wisconsin den perfekten Rahmen für die Vorstellung unserer neuesten Technologien.',
      'Im Zentrum des Messeauftritts stand die US-Premiere der neuen Filterschneckenpresse BGII-800. Mit einem klaren Fokus auf die Produktion von hochwertiger Einstreu – dem sogenannten Comfort Bedding – traf die Anlage genau den Nerv der Zeit.',
      'In zahlreichen Fachgesprächen mit Betreibern von Milchviehbetrieben mit bis zu 12.000 Kühen wurde deutlich: Prozessverbesserung und maximale Effizienzsteigerung sind die zentralen Themen der US-Landwirtschaft. Die innovativen und patentierten Lösungen der BGII-800 sorgten hierbei für außerordentliches Aufsehen.',
      'Besonders die Stabilität und Qualität der Comfort-Bedding-Produktion stießen auf enormes Interesse, da dies für US-Großbetriebe ein entscheidender wirtschaftlicher Faktor ist. Die Ecotech Styria Lösungen bieten hier eine zuverlässige Antwort auf die hohen Anforderungen des Marktes.',
      'Ein herzliches Dankeschön und Gratulation gilt dem gesamten Team von Vanderloop Equipment für die erstklassige Organisation und den beeindruckenden Messestand. Wir freuen uns auf die weitere erfolgreiche Zusammenarbeit im US-Markt!',
    ],
    bodyEn: [
      'From March 24–26, Ecotech Styria appeared together with our strong local distribution partner Vanderloop Equipment at the renowned WPS Farm Show in Oshkosh, Wisconsin. As the second-largest dairy producer in the US, Wisconsin provided the perfect setting to present our latest technologies.',
      'At the heart of our trade fair appearance: the US premiere of the new BGII-800 filter press screw. With a clear focus on the production of high-quality bedding — known as comfort bedding — the system addressed exactly what the industry needs right now.',
      'In numerous in-depth conversations with operators of dairy farms with up to 12,000 cows, one thing became clear: process improvement and maximum efficiency are the central topics of US agriculture. The innovative and patented BGII-800 solutions generated extraordinary attention in this regard.',
      'The stability and quality of comfort bedding production drew particularly strong interest, since this is a decisive economic factor for large US operations. Ecotech Styria solutions offer a reliable answer to the market\'s high demands.',
      'A heartfelt thank you and congratulations to the entire team at Vanderloop Equipment for the first-class organization and the impressive trade fair stand. We look forward to continuing our successful collaboration in the US market!',
    ],
    gallery: [
      '/images/event-wps-farm-show-1.webp',
      '/images/event-wps-farm-show-2.webp',
      '/images/event-wps-farm-show-3.webp',
      '/images/event-wps-farm-show-4.webp',
    ],
    published: true,
  },
  {
    slug: 'ifat-muenchen-2026',
    type: 'event',
    image: '/images/event-ifat.png',
    date: '04. – 07. Mai 2026',
    titleDe: 'Save the Date: Ecotech Styria auf der IFAT 2026',
    titleEn: 'Save the Date: Ecotech Styria at IFAT 2026',
    excerptDe: 'Vom 04. bis 07. Mai öffnet die IFAT in München ihre Tore – und wir sind dabei. Besuchen Sie uns an Stand A1.527 und erfahren Sie alles über die Zukunft der Separationstechnik.',
    excerptEn: 'From May 4–7, IFAT in Munich opens its doors — and we will be there. Visit us at Stand A1.527 and learn all about the future of separation technology.',
    bodyDe: [
      'Vom 04. bis 07. Mai öffnet die IFAT in München ihre Tore – und wir sind dabei! Besuchen Sie uns an Stand A1.527.',
      'Erfahren Sie alles über die Zukunft der Separationstechnik und tauschen Sie sich mit unseren Experten vor Ort aus. Wir freuen uns auf interessante Gespräche und neue Impulse!',
      'Wo? Messe München, Stand A1.527 — Wann? 04. – 07. Mai 2026.',
      'Wir sehen uns in München!',
    ],
    bodyEn: [
      'From May 4–7, IFAT in Munich opens its doors — and we will be there. Visit us at Stand A1.527.',
      'Learn all about the future of separation technology and connect with our experts on site. We look forward to engaging conversations and fresh ideas.',
      'Where? Messe München, Stand A1.527 — When? May 4–7, 2026.',
      'See you in Munich!',
    ],
    published: true,
  },
];

export function getNewsItemBySlug(slug: string): NewsItem | undefined {
  return newsItems.find(n => n.slug === slug);
}
