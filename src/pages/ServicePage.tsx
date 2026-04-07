import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Phone, Mail, ArrowRight, Activity, TrendingDown, Wrench } from 'lucide-react';

function ContentSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container pb-20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {t('service.hero.badge')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6 leading-tight">
              {t('service.hero.title')}
            </h1>
            <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
              {t('service.hero.desc')}
            </p>
            <a href="mailto:office@ecotechstyria.com?subject=Service Anfrage" className="btn-primary">
              {t('service.hero.cta')}
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-bold text-ecotech-grey mb-6">{t('service.facts.title')}</h3>
            <ul className="space-y-4">
              {[1,2,3,4].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey text-sm">{t(`service.facts.${i}`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-ecotech-grey-light/30 space-y-2">
              <div className="flex items-center gap-2 text-sm text-ecotech-grey/70">
                <Phone size={14} className="text-ecotech-green" /><span>Tel.: +43 3144 / 70477</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ecotech-grey/70">
                <Mail size={14} className="text-ecotech-green" /><span>office@ecotechstyria.com</span>
              </div>
              <div className="mt-3 text-xs text-ecotech-grey/50">
                <p>Mo–Do: 08:00 – 16:00</p>
                <p>Fr: 08:00 – 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegularServiceSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-white">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('service.regular.title')}</h3>
            <p className="text-ecotech-grey/70 mb-6">{t('service.regular.desc')}</p>
            <ul className="space-y-3">
              {[1,2,3,4].map(i => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={16} className="text-ecotech-green flex-shrink-0" />
                  <span className="text-ecotech-grey text-sm">{t(`service.regular.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 bg-ecotech-green/5 border-ecotech-green/20">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('service.install.title')}</h3>
            <p className="text-ecotech-grey/70 mb-6">{t('service.install.desc')}</p>
            <ul className="space-y-3">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                  <span className="text-ecotech-grey text-sm">{t(`service.install.${i}`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-ecotech-green/10 rounded-lg">
              <a href="mailto:office@ecotechstyria.com?subject=Anfrage Installation" className="inline-flex items-center gap-2 text-ecotech-green text-sm font-medium hover:gap-3 transition-all">
                {t('service.install.cta')} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrioritaetenSection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const prioritaeten = [
    {
      icon: Activity,
      title: language === 'de' ? 'Hohe Anlagenverfügbarkeit' : 'High plant availability',
      desc:
        language === 'de'
          ? 'Robuster Aufbau & klare Hochlaufprozeduren stellen sicher, dass Ihre Anlage zuverlässig läuft.'
          : 'Robust design and clear ramp-up procedures keep your plant running reliably.',
    },
    {
      icon: TrendingDown,
      title: language === 'de' ? 'Niedrigste Aufbereitungskosten' : 'Lowest processing costs',
      desc:
        language === 'de'
          ? 'Niedrige Energie- und Verschleißkosten durch optimal abgestimmte Komponenten und Prozessführung.'
          : 'Low energy and wear costs through perfectly matched components and process control.',
    },
    {
      icon: Wrench,
      title: language === 'de' ? 'Wartungsfreundliches Design' : 'Maintenance-friendly design',
      desc:
        language === 'de'
          ? 'Saubere Integration und Service-Fokus von Anfang an — schnelle Wartung, planbare Stillstände.'
          : 'Clean integration and a service focus from the start — fast maintenance, predictable downtime.',
    },
  ];

  return (
    <section ref={ref} className="section-container py-20 lg:py-28 bg-ecotech-grey-light/20">
      <div className="section-inner">
        <div
          className={`max-w-3xl mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-3 block">
            {language === 'de' ? 'Prioritäten' : 'Priorities'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey leading-tight">
            {language === 'de'
              ? 'Worauf wir bei Installation & Inbetriebnahme konsequent hin optimieren'
              : 'What we systematically optimize for during installation & commissioning'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {prioritaeten.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`glass-card p-8 transition-all duration-700 hover:border-ecotech-green/40 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-ecotech-green flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-ecotech-grey mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-ecotech-grey/70 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicePage() {
  const { t } = useLanguage();
  return (
    <main>
      <SubpageHero
        title={t('sales.service.title')}
        subtitle={t('service.hero.badge')}
        image="/images/hero-products-new.png"
      />
      <ContentSection />
      <RegularServiceSection />
      <PrioritaetenSection />
    </main>
  );
}
