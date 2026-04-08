import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Mail, Phone, Clock } from 'lucide-react';

function HeroSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container pb-20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {t('ersatzteile.hero.badge')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6 leading-tight">
              {t('ersatzteile.hero.title')}
            </h1>
            <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
              {t('ersatzteile.hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:spareparts@ecotechstyria.com" className="btn-primary">{t('ersatzteile.hero.cta')}</a>
              <a href="#leistungen" className="btn-secondary">{t('ersatzteile.hero.cta2')}</a>
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-bold text-ecotech-grey mb-6">{t('ersatzteile.facts.title')}</h3>
            <ul className="space-y-4">
              {[1,2,3,4].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{t(`ersatzteile.facts.${i}.title`)}</p>
                    <p className="text-sm text-ecotech-grey/60">{t(`ersatzteile.facts.${i}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeratungSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="leistungen" className="section-container py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('ersatzteile.beratung.title')}</h3>
            <p className="text-ecotech-grey/70 mb-6">{t('ersatzteile.beratung.desc')}</p>
            <div className="space-y-3">
              {[1,2].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{t(`ersatzteile.beratung.${i}.title`)}</p>
                    <p className="text-sm text-ecotech-grey/60">{t(`ersatzteile.beratung.${i}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {t('ersatzteile.preis.badge')}
            </span>
            <h3 className="text-xl font-bold text-ecotech-grey mb-6">{t('ersatzteile.preis.title')}</h3>
            <p className="text-ecotech-grey/70 mb-6">{t('ersatzteile.preis.desc')}</p>
            <ul className="space-y-3">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{t(`ersatzteile.preis.${i}.title`)}</p>
                    <p className="text-sm text-ecotech-grey/60">{t(`ersatzteile.preis.${i}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SchneckenSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 bg-ecotech-green/5 border-ecotech-green/20">
            <span className="inline-block px-3 py-1 bg-ecotech-green text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {t('ersatzteile.schnecken.badge')}
            </span>
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('ersatzteile.schnecken.title')}</h3>
            <p className="text-ecotech-grey/70 mb-6">{t('ersatzteile.schnecken.desc1')}</p>
            <p className="text-ecotech-grey/70 mb-6">{t('ersatzteile.schnecken.desc2')}</p>
            <ul className="space-y-3">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                  <span className="text-ecotech-grey text-sm">{t(`ersatzteile.schnecken.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('ersatzteile.oem.title')}</h3>
              <p className="text-ecotech-grey/70">{t('ersatzteile.oem.desc')}</p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('ersatzteile.tech.title')}</h3>
              <p className="text-ecotech-grey/70">{t('ersatzteile.tech.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-3 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('ersatzteile.contact.title')}</h2>
            <p className="text-white/80">{t('ersatzteile.contact.desc')}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:spareparts@ecotechstyria.com" className="inline-flex items-center gap-2 bg-white text-ecotech-green px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all">
                <Mail size={18} />
                {t('ersatzteile.contact.cta')}
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">{t('ersatzteile.contact.box.title')}</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2"><Phone size={14} /><span>Tel.: +43 3144 / 70477</span></div>
              <div className="flex items-center gap-2"><Mail size={14} /><span>spareparts@ecotechstyria.com</span></div>
              <div className="flex items-center gap-2"><Clock size={14} /><span>Mo–Do: 08:00 – 16:00</span></div>
              <div className="flex items-center gap-2"><Clock size={14} /><span>Fr: 08:00 – 14:00</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErsatzteilePage() {
  const { t } = useLanguage();
  return (
    <main>
      <SubpageHero
        title={t('sales.spareparts.title')}
        subtitle={t('ersatzteile.hero.badge')}
        image="/images/hero-products-v2.webp"
      />
      <HeroSection />
      <BeratungSection />
      <SchneckenSection />
      <ContactSection />
    </main>
  );
}
