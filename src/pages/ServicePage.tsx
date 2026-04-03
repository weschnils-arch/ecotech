import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Phone, Mail, ArrowRight } from 'lucide-react';

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
    </main>
  );
}
