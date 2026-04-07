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
    id: 'at-pirker',
    country: 'Österreich',
    countryEn: 'Austria',
    company: 'Ecotech Styria GmbH',
    contactPerson: 'Günther Pirker',
    role: 'CSO',
    street: 'Judenburgerstraße 176',
    postalCode: 'A-8580',
    city: 'Köflach',
    phone: '+43 664 155 4896',
    email: 'g.pirker@ecotechstyria.com',
    website: 'https://ecotechstyria.com',
  },
  {
    id: 'at-leitner',
    country: 'Österreich',
    countryEn: 'Austria',
    company: 'Ecotech Styria GmbH',
    contactPerson: 'Heinz Leitner',
    role: 'CEO',
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
  { de: 'Deutschland – Bayern', en: 'Germany – Bavaria' },
  { de: 'Deutschland – Nord', en: 'Germany – North' },
  { de: 'Slowenien', en: 'Slovenia' },
  { de: 'Kroatien', en: 'Croatia' },
  { de: 'Ungarn', en: 'Hungary' },
  { de: 'Tschechien', en: 'Czech Republic' },
  { de: 'Polen', en: 'Poland' },
  { de: 'Serbien', en: 'Serbia' },
  { de: 'Bosnien und Herzegowina', en: 'Bosnia and Herzegovina' },
  { de: 'Frankreich', en: 'France' },
  { de: 'Finnland', en: 'Finland' },
];
