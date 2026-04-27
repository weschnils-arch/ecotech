import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { partners, additionalCountries } from '@/data/partners';
import { ChevronDown, MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const ALL = '__all__';

// Country name mapping for Farmtech countries (DE → EN)
const FARMTECH_COUNTRIES_EN: Record<string, string> = {
  'Österreich': 'Austria',
  'Deutschland': 'Germany',
  'Slowenien': 'Slovenia',
  'Kroatien': 'Croatia',
  'Ungarn': 'Hungary',
  'Slowakei': 'Slovakia',
  'Serbien': 'Serbia',
  'Schweiz': 'Switzerland',
};

function PartnerCard({ p, isDe, accentColor = 'green' }: { p: typeof partners[0]; isDe: boolean; accentColor?: 'green' | 'blue' }) {
  const isBlue = accentColor === 'blue';
  const accent = isBlue ? 'text-blue-600' : 'text-ecotech-green';
  const badgeBg = isBlue ? 'bg-blue-600/10 text-blue-600' : 'bg-ecotech-green/10 text-ecotech-green';
  const borderClass = isBlue
    ? 'border border-blue-600/25 hover:border-blue-600/50'
    : 'border border-ecotech-green/25 hover:border-ecotech-green/50';

  return (
    <article className={`rounded-2xl bg-white p-8 ${borderClass} transition-all duration-300 group`}>
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          {p.scope && (
            <span className={`inline-block px-2.5 py-1 ${badgeBg} text-xs font-bold uppercase tracking-wider rounded-full mb-3`}>
              {isDe ? p.scope : p.scopeEn}
            </span>
          )}
          {!p.scope && (
            <span className={`inline-block px-2.5 py-1 ${badgeBg} text-xs font-bold uppercase tracking-wider rounded-full mb-3`}>
              {isDe ? p.country : p.countryEn}
            </span>
          )}
          <h3 className="text-xl lg:text-2xl font-bold text-ecotech-grey leading-tight">
            {p.company}
          </h3>
        </div>
        {p.brand === 'farmtech' && (
          <img src="/images/logo-farmtech.svg" alt="Farmtech" className="h-10 w-auto flex-shrink-0" />
        )}
        {!p.brand && (
          <img src="/images/logo-signet.png" alt="EcoTech Styria" className="h-10 w-auto flex-shrink-0" />
        )}
      </div>

      <div className="space-y-4 text-sm">
        {p.contactPerson && p.contactPerson !== p.company && (
          <div>
            <p className="font-bold text-ecotech-grey">{p.contactPerson}</p>
            {p.role && <p className="text-ecotech-grey/60">{p.role}</p>}
          </div>
        )}

        <div className="flex items-start gap-3 text-ecotech-grey/70">
          <MapPin size={16} className={`${accent} flex-shrink-0 mt-0.5`} />
          <span>
            {p.street}
            <br />
            {p.postalCode} {p.city}
          </span>
        </div>

        <a
          href={`tel:${p.phone.replace(/\s/g, '')}`}
          className={`flex items-center gap-3 text-ecotech-grey/70 hover:${accent} transition-colors`}
        >
          <Phone size={16} className={`${accent} flex-shrink-0`} />
          <span>{p.phone}</span>
        </a>

        <a
          href={`mailto:${p.email}`}
          className={`flex items-center gap-3 text-ecotech-grey/70 hover:${accent} transition-colors break-all`}
        >
          <Mail size={16} className={`${accent} flex-shrink-0`} />
          <span>{p.email}</span>
        </a>

        {p.website && (
          <a
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 text-ecotech-grey/70 hover:${accent} transition-colors`}
          >
            <Globe size={16} className={`${accent} flex-shrink-0`} />
            <span>{p.website.replace(/^https?:\/\//, '')}</span>
          </a>
        )}

        {/* Countries list for Farmtech */}
        {p.countries && p.countries.length > 0 && (
          <div className="pt-3 mt-3 border-t border-ecotech-grey-light/50">
            <p className="text-xs font-bold text-ecotech-grey/50 uppercase tracking-wider mb-2">
              {isDe ? 'Aktiv in' : 'Active in'}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.countries.map((c) => (
                <span key={c} className={`inline-block px-2 py-0.5 ${isBlue ? 'bg-blue-50 text-blue-700' : 'bg-ecotech-green/5 text-ecotech-green'} text-xs rounded-md font-medium`}>
                  {isDe ? c : (FARMTECH_COUNTRIES_EN[c] || c)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function PartnerFinder() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedCountry, setSelectedCountry] = useState<string>(ALL);

  const isDe = language === 'de';

  // Build the unified country list: countries that have partners + placeholder countries.
  const countryOptions = useMemo(() => {
    const fromPartners = new Set(partners.filter(p => !p.countries).map(p => (isDe ? p.country : p.countryEn)));
    // Add Farmtech countries individually
    partners.filter(p => p.countries).forEach(p => {
      p.countries!.forEach(c => {
        fromPartners.add(isDe ? c : (FARMTECH_COUNTRIES_EN[c] || c));
      });
    });
    const fromPlaceholders = additionalCountries.map(c => (isDe ? c.de : c.en));
    const merged = Array.from(new Set([...fromPartners, ...fromPlaceholders]));
    return merged.sort((a, b) => a.localeCompare(b, isDe ? 'de' : 'en'));
  }, [isDe]);

  // Filter partners based on selected country
  const visiblePartners = useMemo(() => {
    if (selectedCountry === ALL) return partners;
    return partners.filter(p => {
      // Direct match
      const directMatch = (isDe ? p.country : p.countryEn) === selectedCountry;
      // Multi-country partner (Farmtech)
      const countryMatch = p.countries?.some(c =>
        (isDe ? c : (FARMTECH_COUNTRIES_EN[c] || c)) === selectedCountry
      );
      return directMatch || countryMatch;
    });
  }, [selectedCountry, isDe]);

  // Always show Ecotech HQ as fallback
  const ecotechHQ = partners.find(p => p.id === 'at-office')!;
  const showHQFallback = selectedCountry !== ALL && !visiblePartners.some(p => p.id === 'at-office');

  return (
    <section
      ref={ref}
      className="section-container py-20 lg:py-28 bg-white"
    >
      <div className="section-inner">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* LEFT COLUMN: heading, selector, partner cards */}
          <div className="flex flex-col">
            <div
              className={`max-w-3xl mb-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
                {t('sales.partner.label')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6 leading-tight">
                {t('sales.findPartner.title')}
              </h2>
              <p className="text-lg text-ecotech-grey/70 leading-relaxed">
                {t('sales.findPartner.desc')}
              </p>
            </div>

            {/* Country selector */}
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              <label className="block text-sm font-medium text-ecotech-grey/70 mb-3">
                {t('sales.partner.country.title')}
              </label>
              <div className="relative max-w-md">
                <select
                  value={selectedCountry}
                  onChange={e => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none px-5 py-4 pr-12 rounded-xl border border-ecotech-grey-light bg-white text-ecotech-grey font-medium focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all cursor-pointer hover:border-ecotech-green/50"
                >
                  <option value={ALL}>{t('sales.partner.country.all')}</option>
                  {countryOptions.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ecotech-green pointer-events-none"
                />
              </div>
            </div>

            {/* Partner cards */}
            <div
              className={`grid gap-6 sm:grid-cols-1 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              {visiblePartners.map((p) => (
                <PartnerCard
                  key={p.id}
                  p={p}
                  isDe={isDe}
                  accentColor={p.brand === 'farmtech' ? 'blue' : 'green'}
                />
              ))}
              {showHQFallback && (
                <PartnerCard p={ecotechHQ} isDe={isDe} accentColor="green" />
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: side graphic — always visible, full vertical span */}
          <div className="hidden lg:block">
            <div className="glass-card overflow-hidden h-full">
              <img
                src="/images/vertriebspartner-graphic.webp"
                alt="Vertriebspartner Netzwerk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bottom-of-page CTA: "no partner found" + "become a partner". Independent component
// so SalesPage can place it after the finder.
export function PartnerFooterCtas() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-20 lg:py-28 bg-ecotech-grey-light/30">
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Not found CTA */}
          <div className="glass-card p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-ecotech-grey mb-4 leading-tight">
              {t('sales.partner.notfound.title')}
            </h3>
            <p className="text-ecotech-grey/70 mb-8 flex-1 leading-relaxed">
              {t('sales.partner.notfound.desc')}
            </p>
            <a href="mailto:office@ecotechstyria.com?subject=Vertriebspartner%20Anfrage" className="btn-primary self-start">
              {t('sales.partner.notfound.cta')}
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Become a partner CTA */}
          <div className="glass-card p-10 flex flex-col bg-ecotech-green text-white border-ecotech-green">
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              {t('sales.partner.become.title')}
            </h3>
            <p className="text-white/85 mb-8 flex-1 leading-relaxed">
              {t('sales.partner.become.desc')}
            </p>
            <a
              href="mailto:office@ecotechstyria.com?subject=Vertriebspartner%20werden"
              className="inline-flex items-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 self-start"
            >
              {t('sales.partner.become.cta')}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
