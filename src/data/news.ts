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

  // --- EVENTS ---
  {
    slug: 'agritechnica-2025',
    type: 'event',
    image: '/images/event-agritechnica.png',
    date: '12. - 18. November 2025',
    titleDe: 'Messeauftritt auf der Agritechnica',
    titleEn: 'Exhibition at Agritechnica',
    excerptDe: 'Besuchen Sie uns auf der Weltleitmesse für Landtechnik in Hannover. Wir präsentieren unsere neuesten Innovationen in der Separationstechnologie.',
    excerptEn: 'Visit us at the world\'s leading trade fair for agricultural machinery in Hanover. We will present our latest innovations in separation technology.',
    bodyDe: [
      'Besuchen Sie uns auf der Weltleitmesse für Landtechnik in Hannover. Wir präsentieren unsere neuesten Innovationen in der Separationstechnologie.',
      'Der Nachbericht wird in Kürze veröffentlicht.',
    ],
    bodyEn: [
      'Visit us at the world\'s leading trade fair for agricultural machinery in Hanover. We will present our latest innovations in separation technology.',
      'The post-event report will be published shortly.',
    ],
  },
  {
    slug: 'wisconsin-dairy-expo',
    type: 'event',
    image: '/images/hero-sales-new.png',
    date: '2025',
    titleDe: 'Messebericht World Dairy Expo Wisconsin',
    titleEn: 'World Dairy Expo Wisconsin Report',
    excerptDe: 'EcoTech Styria präsentierte die Filterschneckenpressen BGII-800 und BGI-400 auf der World Dairy Expo in Wisconsin, USA.',
    excerptEn: 'EcoTech Styria presented the BGII-800 and BGI-400 filter press screws at the World Dairy Expo in Wisconsin, USA.',
    bodyDe: [
      'EcoTech Styria präsentierte die Filterschneckenpressen BGII-800 und BGI-400 auf der World Dairy Expo in Wisconsin, USA.',
      'Der Messebericht wird in Kürze veröffentlicht.',
    ],
    bodyEn: [
      'EcoTech Styria presented the BGII-800 and BGI-400 filter press screws at the World Dairy Expo in Wisconsin, USA.',
      'The trade fair report will be published shortly.',
    ],
  },
  {
    slug: 'ifat-muenchen-2026',
    type: 'event',
    image: '/images/event-ifat.png',
    date: '10. - 14. Mai 2026',
    titleDe: 'EcoTech auf der IFAT München',
    titleEn: 'EcoTech at IFAT Munich',
    excerptDe: 'Die Weltleitmesse für Umwelttechnologien ist der perfekte Ort, um unsere leistungsstarken Filterschneckenpressen für die kommunale und industrielle Abwasserreinigung vorzustellen.',
    excerptEn: 'The world\'s leading trade fair for environmental technologies is the perfect place to present our high-performance filter screw presses for municipal and industrial wastewater treatment.',
    bodyDe: [
      'Die Weltleitmesse für Umwelttechnologien ist der perfekte Ort, um unsere leistungsstarken Filterschneckenpressen für die kommunale und industrielle Abwasserreinigung vorzustellen.',
      'Weitere Details zum Messeauftritt folgen in Kürze.',
    ],
    bodyEn: [
      'The world\'s leading trade fair for environmental technologies is the perfect place to present our high-performance filter screw presses for municipal and industrial wastewater treatment.',
      'More details about the exhibition will follow shortly.',
    ],
  },
  {
    slug: 'eurotier-2026',
    type: 'event',
    image: '/images/event-eurotier.png',
    date: '13. - 16. November 2026',
    titleDe: 'EuroTier 2026 Hannover',
    titleEn: 'EuroTier 2026 Hanover',
    excerptDe: 'Innovationen für die Tierhaltung und effiziente Gülle-Separation. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen für die Landwirtschaft.',
    excerptEn: 'Innovations for animal husbandry and efficient manure separation. Learn more about our tailor-made solutions for agriculture.',
    bodyDe: [
      'Innovationen für die Tierhaltung und effiziente Gülle-Separation. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen für die Landwirtschaft.',
      'Weitere Details folgen in Kürze.',
    ],
    bodyEn: [
      'Innovations for animal husbandry and efficient manure separation. Learn more about our tailor-made solutions for agriculture.',
      'More details will follow shortly.',
    ],
  },
];

export function getNewsItemBySlug(slug: string): NewsItem | undefined {
  return newsItems.find(n => n.slug === slug);
}
