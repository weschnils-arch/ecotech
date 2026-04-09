import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

// Terms Page
export function TermsPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const sections = [1, 2, 3, 4, 5, 6, 7, 8] as const;

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('legal.terms.label')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.terms.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            {sections.map((i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-ecotech-grey mb-4">{t(`legal.terms.${i}.title`)}</h2>
                <p className="text-ecotech-grey leading-relaxed">
                  {t(`legal.terms.${i}.body`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Privacy Page
export function PrivacyPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const sections = [1, 2, 3, 4, 5, 6, 7] as const;

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('legal.privacy.label')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.privacy.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            {sections.map((i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-ecotech-grey mb-4">{t(`legal.privacy.${i}.title`)}</h2>
                <p className="text-ecotech-grey leading-relaxed whitespace-pre-line">
                  {t(`legal.privacy.${i}.body`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Imprint Page
export function ImprintPage() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('legal.imprint.label')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.imprint.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-ecotech-grey mb-6">{t('legal.imprint.company')}</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-ecotech-grey">EcoTech Styria GmbH</p>
                    <div className="flex items-start gap-3 mt-2">
                      <MapPin size={18} className="mt-1 flex-shrink-0 text-ecotech-green" />
                      <div className="text-ecotech-grey">
                        <p>Judenburgerstraße 176</p>
                        <p>A-8580 Köflach, {language === 'de' ? 'Österreich' : 'Austria'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="tel:+43314470477" className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                      +43 3144 / 70477
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="mailto:office@ecotechstyria.com" className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                      office@ecotechstyria.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="https://www.ecotechstyria.com" target="_blank" rel="noopener noreferrer" className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                      www.ecotechstyria.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-ecotech-grey mb-6">{t('legal.imprint.legalInfo')}</h2>
                <div className="space-y-4 text-ecotech-grey">
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.management')}</p>
                    <p className="font-medium text-ecotech-grey">Ing. Gernot Pauger</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.uid')}</p>
                    <p>ATU 81341004</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.fbn')}</p>
                    <p>FN 513783 p</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.fbg')}</p>
                    <p>{t('legal.imprint.fbg.val')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.member')}</p>
                    <p>{t('legal.imprint.member.val')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.authority')}</p>
                    <p>{t('legal.imprint.authority.val')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey">{t('legal.imprint.profession')}</p>
                    <p>{t('legal.imprint.profession.val')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Dealers Page
export function DealersPage() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const dealers = [
    {
      name: 'Farmtech d.o.o.',
      location: t('legal.dealers.country.slovenia'),
      flag: '🇸🇮',
      address: 'Industrijska cesta 1, 2000 Maribor',
      phone: '+386 2 461 0000',
      email: 'info@farmtech.si',
      website: 'www.farmtech.si',
    },
    {
      name: 'IWZ GmbH',
      location: t('legal.dealers.country.austria'),
      flag: '🇦🇹',
      address: 'Industriestraße 10, 4020 Linz',
      phone: '+43 732 123456',
      email: 'office@iwz.at',
      website: 'www.iwz.at',
    },
    {
      name: 'Vanderloop Equipment',
      location: t('legal.dealers.country.usa'),
      flag: '🇺🇸',
      address: '1234 Industrial Drive, Milwaukee, WI 53201',
      phone: '+1 414 555 0123',
      email: 'sales@vanderloopequip.com',
      website: 'www.vanderloopequip.com',
    },
  ];

  // language is referenced so the array re-builds on language toggle
  void language;

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('legal.dealers.label')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-6">
            {t('legal.dealers.title')}
          </h1>
          <p className="text-xl text-ecotech-grey mb-12 max-w-3xl">
            {t('legal.dealers.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map((dealer, index) => (
            <div
              key={dealer.name}
              className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{dealer.flag}</span>
                <span className="px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-sm rounded-full">
                  {dealer.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">{dealer.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-ecotech-green" />
                  <span className="text-ecotech-grey">{dealer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                    {dealer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`mailto:${dealer.email}`} className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                    {dealer.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`https://${dealer.website}`} target="_blank" rel="noopener noreferrer" className="text-ecotech-grey hover:text-ecotech-green transition-colors">
                    {dealer.website}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 glass-card p-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '450ms' }}>
          <p className="text-ecotech-grey mb-4">
            {t('legal.dealers.becomeQuestion')}
          </p>
          <Link
            to="/sales"
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
          >
            {t('legal.dealers.learnMore')}
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
