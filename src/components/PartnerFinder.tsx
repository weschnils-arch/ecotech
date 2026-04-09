import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { partners, additionalCountries } from '@/data/partners';
import { ChevronDown, MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const ALL = '__all__';

export function PartnerFinder() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedCountry, setSelectedCountry] = useState<string>(ALL);

  const isDe = language === 'de';

  // Build the unified country list: countries that have partners + placeholder countries.
  const countryOptions = useMemo(() => {
    const fromPartners = new Set(partners.map(p => (isDe ? p.country : p.countryEn)));
    const fromPlaceholders = additionalCountries.map(c => (isDe ? c.de : c.en));
    const merged = Array.from(new Set([...fromPartners, ...fromPlaceholders]));
    return merged.sort((a, b) => a.localeCompare(b, isDe ? 'de' : 'en'));
  }, [isDe]);

  // For now: always show ALL partner cards (the Ecotech Styria GmbH headquarters card),
  // regardless of which country is selected. The country selector still filters in spirit
  // but the HQ contact stays visible as a fallback.
  const visiblePartners = partners;
  // Tracked but unused — keeps the selector wired so we can re-enable filtering later.
  void selectedCountry;

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

            {/* Partner cards — always visible regardless of selected country */}
            <div
              className={`grid gap-6 sm:grid-cols-1 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              {visiblePartners.map((p, index) => (
                <article
                  key={p.id}
                  className="glass-card p-8 hover:border-ecotech-green/40 transition-all duration-500 group"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                        {isDe ? p.country : p.countryEn}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-ecotech-grey leading-tight">
                        {p.company}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-bold text-ecotech-grey">{p.contactPerson}</p>
                      {p.role && <p className="text-ecotech-grey/60">{p.role}</p>}
                    </div>

                    <div className="flex items-start gap-3 text-ecotech-grey/70">
                      <MapPin size={16} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                      <span>
                        {p.street}
                        <br />
                        {p.postalCode} {p.city}
                      </span>
                    </div>

                    <a
                      href={`tel:${p.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-ecotech-grey/70 hover:text-ecotech-green transition-colors"
                    >
                      <Phone size={16} className="text-ecotech-green flex-shrink-0" />
                      <span>{p.phone}</span>
                    </a>

                    <a
                      href={`mailto:${p.email}`}
                      className="flex items-center gap-3 text-ecotech-grey/70 hover:text-ecotech-green transition-colors break-all"
                    >
                      <Mail size={16} className="text-ecotech-green flex-shrink-0" />
                      <span>{p.email}</span>
                    </a>

                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-ecotech-grey/70 hover:text-ecotech-green transition-colors"
                      >
                        <Globe size={16} className="text-ecotech-green flex-shrink-0" />
                        <span>{p.website.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
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
