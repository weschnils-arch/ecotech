import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ClipboardList, Wrench, Check, ArrowRight } from 'lucide-react';

export function IntegrationPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();


  const planningSteps = t('integration.planning.steps').split('|');
  const installationSteps = t('integration.installation.steps').split('|');

  return (
    <main>
      {/* Hero Section */}
      <SubpageHero
        title={t('nav.integration')}
        subtitle={t('integration.planning.desc')}
        image="/images/hero-systemintegration-v2.webp"
      />

      {/* Planning Section */}
      <section ref={ref} className="section-container py-24 lg:py-32">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 rounded-xl bg-ecotech-green/10 flex items-center justify-center mb-6">
                <ClipboardList size={32} className="text-ecotech-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
                {t('integration.planning.title')}
              </h2>
              <p className="text-lg text-ecotech-grey mb-8">
                {t('integration.planning.desc')}
              </p>
              <ul className="space-y-4">
                {planningSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-ecotech-green" />
                    </div>
                    <span className="text-ecotech-grey">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`glass-card p-8 lg:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-ecotech-grey mb-6">{t('integration.benefits.title')}</h3>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="p-4 bg-ecotech-green/5 rounded-lg">
                    <h4 className="font-bold text-ecotech-grey mb-1">{t(`integration.benefits.${i}.title`)}</h4>
                    <p className="text-sm text-ecotech-grey">{t(`integration.benefits.${i}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="section-container py-24 lg:py-32">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`order-2 lg:order-1 glass-card p-8 lg:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-ecotech-grey mb-6">{t('integration.service.title')}</h3>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                    <h4 className="font-bold text-ecotech-grey mb-1">{t(`integration.service.${i}.title`)}</h4>
                    <p className="text-sm text-ecotech-grey">{t(`integration.service.${i}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 rounded-xl bg-ecotech-green/10 flex items-center justify-center mb-6">
                <Wrench size={32} className="text-ecotech-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
                {t('integration.installation.title')}
              </h2>
              <p className="text-lg text-ecotech-grey mb-8">
                {t('integration.installation.desc')}
              </p>
              <ul className="space-y-4">
                {installationSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-ecotech-green" />
                    </div>
                    <span className="text-ecotech-grey">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('integration.cta.title')}
            </h2>
            <p className="text-xl text-white/70 mb-8">
              {t('integration.cta.desc')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300"
            >
              {t('integration.cta.button')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
