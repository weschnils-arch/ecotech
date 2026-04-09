import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

function OverviewSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const priorities = [1, 2, 3, 4] as const;

  return (
    <section ref={ref} className="section-container py-20 lg:py-28">
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left: Alles aus einer Hand */}
          <div className="glass-card p-8 lg:p-12 bg-white">
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {t('integration.overview.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-8 leading-tight tracking-tight">
              {t('integration.overview.title')}
            </h2>
            <p className="text-lg text-ecotech-grey/80 leading-relaxed mb-6">
              {t('integration.overview.p1')}
            </p>
            <p className="text-lg text-ecotech-grey/80 leading-relaxed">
              <strong className="text-ecotech-grey">{t('integration.overview.p2.bold')}</strong>
              {t('integration.overview.p2.rest')}
            </p>
          </div>

          {/* Right: Prioritäten */}
          <div className="glass-card p-8 lg:p-10 bg-ecotech-green text-white">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-white" />
              <h3 className="text-xl font-bold">{t('integration.priorities.title')}</h3>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-6">
              {t('integration.priorities.intro')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {priorities.map((i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/15"
                >
                  <h4 className="font-bold text-white mb-2 leading-tight">
                    {t(`integration.priorities.${i}.title`)}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {t(`integration.priorities.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeistungSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const leistung = [1, 2, 3, 4] as const;
  const partner = [1, 2, 3, 4] as const;

  return (
    <section ref={ref} className="section-container py-20 lg:py-28 bg-ecotech-grey-light/20">
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Unsere Leistung */}
          <div className="glass-card p-8 lg:p-10 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-4 leading-tight">
              {t('integration.leistung.title')}
            </h3>
            <p className="text-ecotech-grey/80 leading-relaxed mb-8">
              {t('integration.leistung.intro')}
            </p>
            <ul className="space-y-5">
              {leistung.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-ecotech-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ecotech-grey leading-snug">
                      {t(`integration.leistung.${i}.title`)}
                    </h4>
                    <p className="text-sm text-ecotech-grey/75 leading-relaxed mt-0.5">
                      {t(`integration.leistung.${i}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnernetzwerk */}
          <div className="glass-card p-8 lg:p-10 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-4 leading-tight">
              {t('integration.partner.title')}
            </h3>
            <p className="text-ecotech-grey/80 leading-relaxed mb-8">
              {t('integration.partner.intro')}
            </p>
            <ul className="space-y-5 mb-8">
              {partner.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-ecotech-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ecotech-grey leading-snug">
                      {t(`integration.partner.${i}.title`)}
                    </h4>
                    <p className="text-sm text-ecotech-grey/75 leading-relaxed mt-0.5">
                      {t(`integration.partner.${i}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-5 bg-ecotech-green/5 rounded-lg border border-ecotech-green/20">
              <p className="text-sm text-ecotech-grey leading-relaxed">
                <strong className="text-ecotech-green">
                  {t('integration.partner.vorteil.label')}
                </strong>{' '}
                {t('integration.partner.vorteil.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="section-container py-20 lg:py-28 bg-ecotech-green text-white"
    >
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-[1.6fr_auto] gap-8 items-center max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {t('integration.cta.title')}
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              {t('integration.cta.desc')}
            </p>
          </div>
          <a
            href="mailto:office@ecotechstyria.com?subject=Systemintegration%20Anfrage"
            className="inline-flex items-center justify-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-xl whitespace-nowrap"
          >
            {t('integration.cta.button')}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AnlageImageSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container pb-20 lg:pb-28 bg-ecotech-grey-light/20">
      <div className="section-inner">
        <div
          className={`glass-card overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src="/images/hero-systemintegration-v3.webp"
            alt="Systemintegration Anlage"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function KontaktSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-20 lg:py-24">
      <div className="section-inner">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-4">
            {t('integration.kontakt.title')}
          </h3>
          <p className="text-lg text-ecotech-grey/80 leading-relaxed">
            {t('integration.kontakt.text')}
          </p>
        </div>
      </div>
    </section>
  );
}

export function IntegrationPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('integration.hero.title')}
        subtitle={t('integration.hero.subtitle')}
        image="/images/hero-systemintegration-v2.webp"
      />
      <OverviewSection />
      <LeistungSection />
      <AnlageImageSection />
      <CTASection />
      <KontaktSection />
    </main>
  );
}
