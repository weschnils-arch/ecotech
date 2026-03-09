import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.sales': 'Vertrieb & Aftersales',
    'nav.applications': 'Anwendungen',
    'nav.products': 'Produkte',
    'nav.integration': 'Systemintegration',
    'nav.news': 'News & Medien',

    // Footer
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Impressum',
    'footer.dealers': 'Händler',

    // Hero
    'hero.headline': 'Next Level Separation',
    'hero.subheadline': 'Innovative Lösungen zur Fest-Flüssig-Trennung',
    'hero.cta': 'Mehr erfahren',

    // About Section
    'about.title': 'Über uns',
    'about.description': 'Gegründet 2024. Kernkompetenz: Lösungen zur fest-flüssig Trennung. Kernprodukt: Filterschneckenpresse. Mit mehr als 15 Jahren Erfahrung in der Entwicklung und technischen Anwendungen im Maschinenbau und Anlagenaufbau mit einem Schwerpunkt Separations- und Umwelttechnik.',
    'about.link': 'Zur Unternehmensseite',

    // Applications Section
    'applications.title': 'Anwendungen',
    'applications.learnMore': 'Mehr erfahren',
    'applications.agriculture.title': 'Landwirtschaft',
    'applications.agriculture.desc': 'Gülle von Nutztieren, Gärreste aus Biogasanlagen',
    'applications.bedding.title': 'Einstreuerzeugung',
    'applications.bedding.desc': 'Separation zur Einstreu- und Düngerproduktion',
    'applications.biogas.title': 'Biogas',
    'applications.biogas.desc': 'Gärreste aus Biogasanlagen',
    'applications.recycling.title': 'Kunststoff Recycling',
    'applications.recycling.desc': 'Abwasser aus Depackinganlagen und Kunststoffrecyclinganlagen',
    'applications.municipal.title': 'Kommunalwirtschaft',
    'applications.municipal.desc': 'Primär- und Sekundärschlämme aus Kläranlagen',
    'applications.paper.title': 'Papierindustrie',
    'applications.paper.desc': 'Rejekte und Sekundärschlämme',
    'applications.mdf.title': 'MDF',
    'applications.mdf.desc': 'Produktionsabwässer',
    'applications.food.title': 'Lebensmittelindustrie',
    'applications.food.desc': ' ',

    // Products Section
    'products.title': 'Produkte',
    'products.viewDetails': 'Zu den Details',
    'products.bg2.name': 'Filterschneckenpresse BGII-800',
    'products.bg2.feature1': 'Bis zu 75m³/h Durchsatz',
    'products.bg2.feature2': 'Bis zu 75% TS-Gehalt',
    'products.bg2.feature3': 'Edelstahlkonstruktion',
    'products.bgi400.name': 'Filterschneckenpresse BGI-400',
    'products.bgi400.feature1': 'Bis zu 20m³/h Durchsatz',
    'products.bgi400.feature2': 'Kompakte Bauweise',
    'products.bgi400.feature3': 'Plug & Play Lösung',

    // Why Separation Section
    'why.title': 'Warum separieren?',
    'why.point1': 'Verringerung von Lagervolumen',
    'why.point2': 'Wiederverwendung der Feststoffe',
    'why.point3': 'Reduktion der Entsorgungskosten',
    'why.point4': 'Wiederverwendung der Flüssigphase als Prozesswasser',
    'why.point5': 'Einhaltung von Umweltvorgaben',
    'why.point6': 'Verbesserte Eigenschaften der separierten Phasen',

    // News Section
    'news.title': 'News & Erfolgsgeschichten',
    'news.readMore': 'Weiterlesen',

    // About Page
    'aboutpage.intro.title': 'Wer sind wir?',
    'aboutpage.vision.title': 'Vision & Mission',
    'aboutpage.vision.label': 'Vision:',
    'aboutpage.vision.text': 'Separationstechnik auf den nächsten Level zu bringen',
    'aboutpage.slogan.label': 'Slogan:',
    'aboutpage.slogan.text': 'Next Level Separation',
    'aboutpage.mission.label': 'Mission:',
    'aboutpage.mission.text': 'Hohe Vielfalt in den Anwendungen, etablierte Prozesse im Sinne der Kunden weiterentwicklung mit deutlich höherer Effizienz in den unterschiedlichen Anwendungen und Prozessen mit niedrigeren TCO (weniger Energie, weniger Verschleiß). Optimierungen nicht nur aufzeigen sondern auch realisieren!',
    'aboutpage.team.title': 'Unser Team',
    'aboutpage.team.ceo.name': 'Heinz Leitner',
    'aboutpage.team.ceo.role': 'CEO',
    'aboutpage.team.ceo.bio': '10 Jahre Erfahrung in der Leitung von R&D-Projekten im Bereich der Automobilindustrie und des Sondermaschinenbaus. CEO der Komptech Gruppe für 15 Jahre (bis Ende 2023). CEO Inno2lead GmbH: Strategieberatung für Unternehmen im Bereich Maschinenbau und Recycling.',
    'aboutpage.team.coo.name': 'Gernot Pauger',
    'aboutpage.team.coo.role': 'COO',
    'aboutpage.team.coo.bio': 'Eigentümer Pauger Maschinenbau GmbH. Langjährige Erfahrung im Bereich Sondermaschinenbau und Umwelttechnik.',
    'aboutpage.team.cto.name': 'Thomas Kampl',
    'aboutpage.team.cto.role': 'CTO',
    'aboutpage.team.cto.bio': '14 Jahre Erfahrung in der Entwicklung von Schneckenpressen als Produktmanager und Konstruktionsleiter.',
    'aboutpage.team.cso.name': 'Günther Pirker',
    'aboutpage.team.cso.role': 'CSO',
    'aboutpage.team.cso.bio': 'Langjährige Erfahrung in Management- und Vertriebspositionen bei Komptech / Farmtech. CEO Farmtech – Slowenien.',

    // Partner Section
    'aboutpage.partner.title': 'Ecotech Styria - Partner',
    'aboutpage.partner.exclusive': 'exklusiver Produktionspartner',
    'aboutpage.partner.ecotech.subtitle': 'Fest-Flüssig-Trennung',
    'aboutpage.partner.ecotech.bullet1': 'F&E',
    'aboutpage.partner.ecotech.bullet2': 'Produktmanagement',
    'aboutpage.partner.ecotech.bullet3': 'Vertrieb',
    'aboutpage.partner.ecotech.bullet4': 'Kundendienst',
    'aboutpage.partner.pauger.subtitle': 'Engineering & Produktion',
    'aboutpage.partner.pauger.bullet1': 'Engineering & Design',
    'aboutpage.partner.pauger.bullet2': 'Produktion von Maschinen und Komponenten',
    'aboutpage.partner.pauger.bullet3': 'Ersatzteillager',

    'aboutpage.contact.title': 'Kontakt',
    'aboutpage.location.title': 'Standort',
    'aboutpage.careers.title': 'Karriere – offene Stellen',
    'aboutpage.careers.text': 'Wir suchen talentierte und motivierte Fachkräfte. Bitte senden Sie Ihre Bewerbung an: office@ecotechstyria.com',

    // Sales Page
    'sales.findPartner.title': 'Vertriebspartner finden',
    'sales.findPartner.desc': 'Unsere Vertriebspartner sind spezialisiert auf Separationstechnologie und bieten lokale Unterstützung und Expertise.',
    'sales.becomePartner.title': 'Sie möchten unser Vertriebspartner werden?',
    'sales.spareparts.title': 'Ersatzteile',
    'sales.spareparts.desc': 'Wir bieten ein umfassendes Sortiment an Ersatzteilen für alle unsere Maschinen. Kontaktieren Sie uns für ein Angebot.',
    'sales.service.title': 'Service',
    'sales.service.desc': 'Unser erfahrenes Service-Team steht Ihnen bei Wartung, Reparatur und technischer Unterstützung zur Verfügung.',

    // Products Page
    'productpage.bg2.title': 'Filterschneckenpresse BGII-800',
    'productpage.bg2.desc': 'Die Filterschneckenpresse BGII-800 ist unsere Flaggschiff-Maschine für Hochleistungs-Separationen. Mit patentierter Geometrie und automatischer Wascheinrichtung bietet sie optimale Effizienz und minimalen Verschleiß.',

    // BG2 PDF Content
    'productpage.bg2.applications.ind.title': 'Anwendungen Industrie',
    'productpage.bg2.applications.ind.items': 'Kunststoffrecycling|Pulp & Paper|Schlachthofabwässer|Kommunale Abwässer|Lebensmittelverarbeitung',
    'productpage.bg2.applications.agr.title': 'Anwendungen Landwirtschaft',
    'productpage.bg2.applications.agr.items': 'Gülle von Nutztieren|Gärreste aus Biogasanlagen',
    'productpage.bg2.benefits.title': 'Vorteile',
    'productpage.bg2.benefits.items': 'Reduktion von Entsorgungskosten|Wiederverwendung der Feststoffe|Wiederverwendung der flüssigen Phase|Einfacheres Nährstoffmanagement|Höhere Prozesseffizienz',
    'productpage.bg2.features.title': 'Merkmale',
    'productpage.bg2.features.items': 'Edelstahl-Konstruktion|Geringer Spalt zwischen Sieb und Schnecke|Bis zu 0,5 bar Zulaufdruck|Geschlossenes System, automatische Wascheinrichtung|Steuerungen mit offener Schnittstelle (ProfiNet etc.) für einfache Einbindung|Verminderter Verschleiß und höherer Durchsatz durch patentierte Schneckengeometrie und Stützkonstruktion im Pressbereich|Vollautomatische Regelung des Trockensubstanz-Gehaltes im Feststoff|Überwachung des Betriebszustands (Variation im Zulauf, Leckagen, Drehmoment, Ölqualität etc.)|Höchst abrasionsbeständige Schneckenbeschichtung',
    'productpage.bg2.tech.title': 'Technische Daten',
    'productpage.bg2.tech.drive': 'Antrieb',
    'productpage.bg2.tech.drive.val': '5,5 - 11,0 kW',
    'productpage.bg2.tech.throughput': 'Durchsatz',
    'productpage.bg2.tech.throughput.val': 'bis zu 75m³/h',
    'productpage.bg2.tech.gap': 'Spaltweite',
    'productpage.bg2.tech.gap.val': '100 - 1000 µm',
    'productpage.bg2.tech.dry_org': 'Trockensubstanz Organische Fasern',
    'productpage.bg2.tech.dry_org.val': 'bis zu 40%',
    'productpage.bg2.tech.dry_inorg': 'Trockensubstanz Anorganische Fasern',
    'productpage.bg2.tech.dry_inorg.val': 'bis zu 75%',
    'productpage.bg2.tech.disclaimer': 'Die Leistungsdaten hängen von Zusammensetzung und Viskosität des Mediums ab.',
    'productpage.bgi400.title': 'Filterschneckenpresse BGI-400',
    'productpage.bgi400.desc': 'Die kompakte Filterschneckenpresse BGI-400 ist ideal für Agrar-Anwendungen. Mit ihrer Plug-and-Play-Lösung und hohem TS-Gehalt im Feststoff bietet sie eine kostengünstige Lösung für Gülleseparation und Einstreu-Produktion.',
    'productpage.bgi400.availability': 'Verfügbar ab Q4/25',

    // Integration Page
    'integration.planning.title': 'Integrationsplanung',
    'integration.planning.desc': 'Wir planen die Integration unserer Maschinen in Ihre bestehenden Anlagen. Unsere Experten analysieren Ihre Prozesse und entwickeln maßgeschneiderte Lösungen.',
    'integration.installation.title': 'Installation & Inbetriebnahme',
    'integration.installation.desc': 'Unser erfahrenes Team führt die Installation und Inbetriebnahme durch und stellt sicher, dass alles optimal funktioniert.',

    // News Page
    'newspage.title': 'News & Medien',
    'newspage.downloads.title': 'Download',
    'newspage.downloads.desc': 'Bilder, Renderings, Prospekte',
    'newspage.downloads.text': 'Laden Sie unsere Produktbroschüren, technischen Datenblätter und Bilder herunter.',

    // Legal Pages
    'legal.terms.title': 'Allgemeine Geschäftsbedingungen',
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.imprint.title': 'Impressum',
    'legal.dealers.title': 'Unsere Händler',

    // Contact Form
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.subject': 'Betreff',
    'form.message': 'Nachricht',
    'form.submit': 'Absenden',
    'form.sendApplication': 'Bewerbung senden',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.sales': 'Sales & Aftersales',
    'nav.applications': 'Applications',
    'nav.products': 'Products',
    'nav.integration': 'System Integration',
    'nav.news': 'News & Media',

    // Footer
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.dealers': 'Dealers',

    // Hero
    'hero.headline': 'Next Level Separation',
    'hero.subheadline': 'Innovative Solid-Liquid Separation Solutions',
    'hero.cta': 'Learn More',

    // About Section
    'about.title': 'About Us',
    'about.description': 'Founded in 2024. Core competence: Solid-liquid separation solutions. Core product: Filter Screw Press / Separator. With more than 15 years of experience in the development of technical applications in mechanical engineering and plant construction with a focus on separation and environmental technology.',
    'about.link': 'To Company Page',

    // Applications Section
    'applications.title': 'Applications',
    'applications.learnMore': 'Learn More',
    'applications.agriculture.title': 'Agriculture',
    'applications.agriculture.desc': 'Manure from livestock, fermentation residues from biogas plants',
    'applications.bedding.title': 'Green Bedding',
    'applications.bedding.desc': 'Separation for bedding and fertilizer production',
    'applications.biogas.title': 'Biogas',
    'applications.biogas.desc': 'Fermentation residues from biogas plants',
    'applications.recycling.title': 'Plastic Recycling',
    'applications.recycling.desc': 'Wastewater from depacking and plastic recycling plants',
    'applications.municipal.title': 'Municipal',
    'applications.municipal.desc': 'Primary and secondary sludge from sewage treatment plants',
    'applications.paper.title': 'Pulp & Paper',
    'applications.paper.desc': 'Rejects and secondary sludge',
    'applications.mdf.title': 'MDF',
    'applications.mdf.desc': 'Production wastewater',
    'applications.food.title': 'Food Industry',
    'applications.food.desc': ' ',

    // Products Section
    'products.title': 'Products',
    'products.viewDetails': 'View Details',
    'products.bg2.name': 'Filter Press Screw BGII-800',
    'products.bg2.feature1': 'Up to 75m³/h throughput',
    'products.bg2.feature2': 'Up to 75% dry matter content',
    'products.bg2.feature3': 'Stainless steel construction',
    'products.bgi400.name': 'Filter Press Screw BGI-400',
    'products.bgi400.feature1': 'Up to 20m³/h throughput',
    'products.bgi400.feature2': 'Compact design',
    'products.bgi400.feature3': 'Plug & Play solution',

    // Why Separation Section
    'why.title': 'Why Separation?',
    'why.point1': 'Reduction of storage volume',
    'why.point2': 'Reuse of the solids',
    'why.point3': 'Reduction of disposal costs',
    'why.point4': 'Reuse of the effluent as process water',
    'why.point5': 'Compliance with environmental regulations',
    'why.point6': 'Improved properties of the individual phases after separation',

    // News Section
    'news.title': 'News & Success Stories',
    'news.readMore': 'Read More',

    // About Page
    'aboutpage.intro.title': 'Who Are We?',
    'aboutpage.vision.title': 'Vision & Mission',
    'aboutpage.vision.label': 'Vision:',
    'aboutpage.vision.text': 'To bring separation technology to the next level',
    'aboutpage.slogan.label': 'Slogan:',
    'aboutpage.slogan.text': 'Next Level Separation',
    'aboutpage.mission.label': 'Mission:',
    'aboutpage.mission.text': 'High variety in applications, established processes in the sense of customer further development with significantly higher efficiency in the different applications and processes with lower TCO (less energy, less wear). Not only show optimizations but also realize them!',
    'aboutpage.team.title': 'Our Team',
    'aboutpage.team.ceo.name': 'Heinz Leitner',
    'aboutpage.team.ceo.role': 'CEO',
    'aboutpage.team.ceo.bio': '10 years of experience in leading R&D projects in the field of automotive industry and special machinery construction. CEO of Komptech group for 15 years (till end of 2023). CEO Inno2lead GmbH: strategy consulting for companies in the field of mechanical engineering and recycling.',
    'aboutpage.team.coo.name': 'Gernot Pauger',
    'aboutpage.team.coo.role': 'COO',
    'aboutpage.team.coo.bio': 'Owner Pauger Maschinenbau GmbH. Many years of experience in the field of special machine construction and environmental machinery.',
    'aboutpage.team.cto.name': 'Thomas Kampl',
    'aboutpage.team.cto.role': 'CTO',
    'aboutpage.team.cto.bio': '14 years of experience in the development of screw presses as a product manager, construction engineer and head of construction department.',
    'aboutpage.team.cso.name': 'Günther Pirker',
    'aboutpage.team.cso.role': 'CSO',
    'aboutpage.team.cso.bio': 'Many years of experience in Management and Sales positions at Komptech / Farmtech. CEO Farmtech – Slovenia.',

    // Partner Section
    'aboutpage.partner.title': 'Ecotech Styria - Partner',
    'aboutpage.partner.exclusive': 'exclusive Production Partner',
    'aboutpage.partner.ecotech.subtitle': 'Solid-Liquid Separation',
    'aboutpage.partner.ecotech.bullet1': 'R&D',
    'aboutpage.partner.ecotech.bullet2': 'Product Management',
    'aboutpage.partner.ecotech.bullet3': 'Sales',
    'aboutpage.partner.ecotech.bullet4': 'Customer Service',
    'aboutpage.partner.pauger.subtitle': 'Engineering & Production',
    'aboutpage.partner.pauger.bullet1': 'Engineering & Design',
    'aboutpage.partner.pauger.bullet2': 'Production of machines and components',
    'aboutpage.partner.pauger.bullet3': 'Spare parts warehouse',

    'aboutpage.contact.title': 'Contact',
    'aboutpage.location.title': 'Location',
    'aboutpage.careers.title': 'Careers – Open Positions',
    'aboutpage.careers.text': 'We are looking for talented and motivated professionals. Please send your application to: office@ecotechstyria.com',

    // Sales Page
    'sales.findPartner.title': 'Find a Sales Partner',
    'sales.findPartner.desc': 'Our sales partners are specialized in separation technology and provide local support and expertise.',
    'sales.becomePartner.title': 'Want to Become a Sales Partner?',
    'sales.spareparts.title': 'Spare Parts',
    'sales.spareparts.desc': 'We offer a comprehensive range of spare parts for all our machines. Contact us for a quote.',
    'sales.service.title': 'Service',
    'sales.service.desc': 'Our experienced service team is available for maintenance, repairs, and technical support.',

    // Products Page
    'productpage.bg2.title': 'Filter Press Screw BGII-800',
    'productpage.bg2.desc': 'The Filter Press Screw BGII-800 is our flagship machine for high-performance separations. With patented geometry and automatic washing device, it offers optimal efficiency and minimal wear.',

    // BG2 PDF Content
    'productpage.bg2.applications.ind.title': 'Industrial applications',
    'productpage.bg2.applications.ind.items': 'Plastic recycling|Pulp & Paper|Abattoir waste|Municipal waste water|Food industry',
    'productpage.bg2.applications.agr.title': 'Agricultural applications',
    'productpage.bg2.applications.agr.items': 'Manure from livestock|Digestates from biogas plants',
    'productpage.bg2.benefits.title': 'Benefits',
    'productpage.bg2.benefits.items': 'Reduction of disposal cost|Reuse of solids|Reuse of liquid fraction|Increased nutrient management|Increased process efficiency',
    'productpage.bg2.features.title': 'Key Features',
    'productpage.bg2.features.items': 'Stainless steel construction|Narrow gap between auger and screen|Up to 0.5 bar inlet pressure|Closed system, automatic washing device|Control units with open interface (ProfiNet etc.) for easy implementation|Low wear and increased throughput due to patented auger geometry and special screen basket housing in the pressing zone|Full Auto Control of the dry matter content in the solids|Monitoring of operation status (change in inlet consistency, leakages, torque, oil quality etc.)|Higly abrasion-resistant auger coating',
    'productpage.bg2.tech.title': 'Technical Data',
    'productpage.bg2.tech.drive': 'Drive power',
    'productpage.bg2.tech.drive.val': '5.5 - 11.0 kW',
    'productpage.bg2.tech.throughput': 'Throughput',
    'productpage.bg2.tech.throughput.val': 'up to 75m³/h',
    'productpage.bg2.tech.gap': 'Screen slot',
    'productpage.bg2.tech.gap.val': '100 - 1000 µm',
    'productpage.bg2.tech.dry_org': 'Dry matter organic fibers',
    'productpage.bg2.tech.dry_org.val': 'up to 40%',
    'productpage.bg2.tech.dry_inorg': 'Dry matter inorganic fibers',
    'productpage.bg2.tech.dry_inorg.val': 'up to 75%',
    'productpage.bg2.tech.disclaimer': 'Performance data depends on the consistency and viscosity of the medium to be separated.',
    'productpage.bgi400.title': 'Filter Press Screw BGI-400',
    'productpage.bgi400.desc': 'The compact Filter Press Screw BGI-400 is ideal for agricultural applications. With its plug-and-play solution and high dry matter content in solids, it offers a cost-effective solution for manure separation and bedding production.',
    'productpage.bgi400.availability': 'Available in Q4/25',

    // Integration Page
    'integration.planning.title': 'Integration Planning',
    'integration.planning.desc': 'We plan the integration of our machines into your existing systems. Our experts analyze your processes and develop customized solutions.',
    'integration.installation.title': 'Installation & Commissioning',
    'integration.installation.desc': 'Our experienced team handles installation and commissioning, ensuring everything works optimally.',

    // News Page
    'newspage.title': 'News & Media',
    'newspage.downloads.title': 'Downloads',
    'newspage.downloads.desc': 'Images, Renderings, Brochures',
    'newspage.downloads.text': 'Download our product brochures, technical data sheets, and images.',

    // Legal Pages
    'legal.terms.title': 'Terms & Conditions',
    'legal.privacy.title': 'Privacy Policy',
    'legal.imprint.title': 'Legal Notice',
    'legal.dealers.title': 'Our Dealers',

    // Contact Form
    'form.name': 'Name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.sendApplication': 'Send Application',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[language][key as keyof typeof translations.de];
    return translation || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
