// Vertriebspartner data — single source of truth.
// To add a partner: append a new object to `partners`.
// To make a country selectable in the dropdown without partners (placeholder),
// add it to `additionalCountries` — it will render the empty-state CTA.

export interface Partner {
  id: string;
  country: string;        // Display name in DE
  countryEn: string;      // Display name in EN
  company: string;
  contactPerson: string;
  role?: string;
  street: string;
  postalCode: string;
  city: string;
  phone: string;          // E.164 format preferred (e.g. +43 664 155 4896)
  email: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: 'at-leitner',
    country: 'Österreich',
    countryEn: 'Austria',
    company: 'Ecotech Styria GmbH',
    contactPerson: 'Heinz Leitner',
    street: 'Judenburgerstraße 176',
    postalCode: 'A-8580',
    city: 'Köflach',
    phone: '+43 664 120 8711',
    email: 'h.leitner@ecotechstyria.com',
    website: 'https://ecotechstyria.com',
  },
];

// Countries that should appear in the dropdown even without partners.
// Render the empty-state CTA when selected. Easy to extend later.
export const additionalCountries: { de: string; en: string }[] = [
  // DACH region
  { de: 'Deutschland – Nord', en: 'Germany – North' },
  { de: 'Deutschland – Süd', en: 'Germany – South' },
  { de: 'Schweiz', en: 'Switzerland' },
  { de: 'Liechtenstein', en: 'Liechtenstein' },
  // Western Europe
  { de: 'Frankreich', en: 'France' },
  { de: 'Belgien', en: 'Belgium' },
  { de: 'Niederlande', en: 'Netherlands' },
  { de: 'Luxemburg', en: 'Luxembourg' },
  { de: 'Vereinigtes Königreich', en: 'United Kingdom' },
  { de: 'Irland', en: 'Ireland' },
  // Southern Europe
  { de: 'Italien', en: 'Italy' },
  { de: 'Spanien', en: 'Spain' },
  { de: 'Portugal', en: 'Portugal' },
  { de: 'Griechenland', en: 'Greece' },
  { de: 'Malta', en: 'Malta' },
  { de: 'Zypern', en: 'Cyprus' },
  // Northern Europe
  { de: 'Dänemark', en: 'Denmark' },
  { de: 'Schweden', en: 'Sweden' },
  { de: 'Norwegen', en: 'Norway' },
  { de: 'Finnland', en: 'Finland' },
  { de: 'Island', en: 'Iceland' },
  // Central / Eastern Europe
  { de: 'Polen', en: 'Poland' },
  { de: 'Tschechien', en: 'Czech Republic' },
  { de: 'Slowakei', en: 'Slovakia' },
  { de: 'Ungarn', en: 'Hungary' },
  { de: 'Slowenien', en: 'Slovenia' },
  { de: 'Kroatien', en: 'Croatia' },
  { de: 'Serbien', en: 'Serbia' },
  { de: 'Bosnien und Herzegowina', en: 'Bosnia and Herzegovina' },
  { de: 'Montenegro', en: 'Montenegro' },
  { de: 'Nordmazedonien', en: 'North Macedonia' },
  { de: 'Albanien', en: 'Albania' },
  { de: 'Kosovo', en: 'Kosovo' },
  { de: 'Rumänien', en: 'Romania' },
  { de: 'Bulgarien', en: 'Bulgaria' },
  { de: 'Estland', en: 'Estonia' },
  { de: 'Lettland', en: 'Latvia' },
  { de: 'Litauen', en: 'Lithuania' },
  // Beyond EU / international
  { de: 'Türkei', en: 'Turkey' },
  { de: 'Ukraine', en: 'Ukraine' },
  { de: 'Vereinigte Arabische Emirate', en: 'United Arab Emirates' },
  { de: 'Israel', en: 'Israel' },
  { de: 'USA', en: 'USA' },
  { de: 'Kanada', en: 'Canada' },
  { de: 'Australien', en: 'Australia' },
  { de: 'Neuseeland', en: 'New Zealand' },
];
