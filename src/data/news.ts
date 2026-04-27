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
    excerptDe: 'Die Filterschneckenpresse BGII-800 setzt neue Maßstäbe in der Industrie mit bis zu 75m³/h Durchsatz und patentierter Schneckengeometrie.',
    excerptEn: 'The Filter Press Screw BGII-800 sets new standards in the industry with up to 75m³/h throughput and patented auger geometry.',
    bodyDe: [
      'Die Filterschneckenpresse BGII-800 setzt neue Maßstäbe in der Industrie mit bis zu 75m³/h Durchsatz und patentierter Schneckengeometrie.',
      'Weitere Informationen folgen in Kürze.',
    ],
    bodyEn: [
      'The Filter Press Screw BGII-800 sets new standards in the industry with up to 75m³/h throughput and patented auger geometry.',
      'More information will follow shortly.',
    ],
  },
  {
    slug: 'vertriebsnetzwerk-expansion',
    type: 'news',
    image: '/images/hero-sales-new.png',
    date: '1. Februar 2025',
    titleDe: 'Expansion des Vertriebsnetzwerks',
    titleEn: 'Expansion of Distribution Network',
    excerptDe: 'Wir freuen uns, Farmtech d.o.o. (Slowenien), IWZ GmbH (Österreich) und Vanderloop Equipment (USA) als Vertriebspartner begrüßen zu dürfen.',
    excerptEn: 'We are pleased to welcome Farmtech d.o.o. (Slovenia), IWZ GmbH (Austria) and Vanderloop Equipment (USA) as distribution partners.',
    bodyDe: [
      'Wir freuen uns, Farmtech d.o.o. (Slowenien), IWZ GmbH (Österreich) und Vanderloop Equipment (USA) als Vertriebspartner begrüßen zu dürfen.',
      'Weitere Informationen folgen in Kürze.',
    ],
    bodyEn: [
      'We are pleased to welcome Farmtech d.o.o. (Slovenia), IWZ GmbH (Austria) and Vanderloop Equipment (USA) as distribution partners.',
      'More information will follow shortly.',
    ],
  },

  {
    slug: 'kooperation-circulyzer',
    type: 'news',
    image: '/images/news-circulyzer.webp',
    date: 'April 2026',
    titleDe: 'Kooperation Circulyzer',
    titleEn: 'Circulyzer Cooperation',
    excerptDe: 'Gemeinsam mit unseren Partnern stellen wir den Circulyzer vor – eine kompakte Separationseinheit für die nasse Dichtesortierung und Wäsche verschiedener Rückstände und Abfallgemische.',
    excerptEn: 'Together with our partners, we introduce the Circulyzer – a compact separation unit for wet density sorting and washing of various residues and waste mixtures.',
    bodyDe: [
      'Gemeinsam mit unseren Partnern stellen wir den Circulyzer vor – eine kompakte Separationseinheit für die nasse Dichtesortierung und Wäsche verschiedener Rückstände und Abfallgemische.',
      'Ausführliche Informationen und Berichterstattung folgen in Kürze.',
    ],
    bodyEn: [
      'Together with our partners, we introduce the Circulyzer – a compact separation unit for wet density sorting and washing of various residues and waste mixtures.',
      'Detailed information and reporting will follow shortly.',
    ],
  },
  {
    slug: 'bgi-400-plug-and-play',
    type: 'news',
    image: '/images/news-bgi400-pnp.webp',
    date: 'April 2026',
    titleDe: 'BGI-400 Plug & Play – Neuvorstellung',
    titleEn: 'BGI-400 Plug & Play – New Product',
    excerptDe: 'Mobile Einheit mit automatischer Drucküberwachung, verzinktem Stahlbau und Drehkolbenpumpe – die neue Plug & Play-Variante unserer kompakten Filterschneckenpresse.',
    excerptEn: 'Mobile unit with automatic pressure monitoring, galvanized steel construction, and rotary piston pump – the new Plug & Play variant of our compact filter screw press.',
    bodyDe: [
      'Mobile Einheit mit automatischer Drucküberwachung, verzinktem Stahlbau und Drehkolbenpumpe – die neue Plug & Play-Variante unserer kompakten Filterschneckenpresse.',
      'Ausführliche Berichterstattung folgt in Kürze.',
    ],
    bodyEn: [
      'Mobile unit with automatic pressure monitoring, galvanized steel construction, and rotary piston pump – the new Plug & Play variant of our compact filter screw press.',
      'Detailed reporting will follow shortly.',
    ],
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
