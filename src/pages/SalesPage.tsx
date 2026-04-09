import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { PartnerFinder, PartnerFooterCtas } from '@/components/PartnerFinder';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Package, Wrench, ArrowRight, Check, Phone, Mail } from 'lucide-react';

// Spare Parts preview — substantial preview of /sales/ersatzteile content
function SparePartsPreviewSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const highlights = [
    t('salespage.spareparts.highlight1'),
    t('salespage.spareparts.highlight2'),
    t('salespage.spareparts.highlight3'),
    t('salespage.spareparts.highlight4'),
  ];

  return (
    <section ref={ref} className="section-container py-20 lg:py-28">
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('salespage.spareparts.label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6 leading-tight">
              {t('salespage.spareparts.title')}
            </h2>
            <p className="text-lg text-ecotech-grey/70 mb-8 leading-relaxed">
              {t('salespage.spareparts.desc')}
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/sales/ersatzteile" className="btn-primary">
                {t('salespage.spareparts.cta')}
                <ArrowRight size={18} />
              </Link>
              <a href="mailto:spareparts@ecotechstyria.com" className="btn-secondary">
                <Mail size={18} />
                spareparts@ecotechstyria.com
              </a>
            </div>
          </div>

          <div className="glass-card p-8 lg:p-10 bg-ecotech-green/5 border-ecotech-green/20">
            <div className="w-16 h-16 rounded-2xl bg-ecotech-green flex items-center justify-center mb-6 shadow-lg">
              <Package size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-4 leading-tight">
              {t('salespage.schnecken.title')}
            </h3>
            <p className="text-ecotech-grey/70 mb-6 leading-relaxed">
              {t('salespage.schnecken.desc')}
            </p>
            <Link
              to="/sales/ersatzteile"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
            >
              {t('salespage.schnecken.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service preview — substantial preview of /sales/service content
function ServicePreviewSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const benefits = [
    t('salespage.service.benefit1'),
    t('salespage.service.benefit2'),
    t('salespage.service.benefit3'),
    t('salespage.service.benefit4'),
  ];

  return (
    <section
      ref={ref}
      className="section-container py-20 lg:py-28 bg-ecotech-grey text-white"
    >
      <div className="section-inner">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('salespage.service.label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t('salespage.service.title')}
            </h2>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              {t('salespage.service.desc')}
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={16} className="text-ecotech-green flex-shrink-0" />
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/sales/service" className="btn-primary">
                {t('salespage.service.cta')}
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+43314470477"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20"
              >
                <Phone size={18} />
                +43 3144 / 70477
              </a>
            </div>
          </div>

          <div className="glass-card-dark p-8 lg:p-10">
            <div className="w-16 h-16 rounded-2xl bg-ecotech-green flex items-center justify-center mb-6 shadow-lg">
              <Wrench size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              {t('salespage.install.title')}
            </h3>
            <p className="text-white/75 mb-6 leading-relaxed">
              {t('salespage.install.desc')}
            </p>
            <div className="space-y-2 text-sm text-white/70 mb-6">
              <p>Mo–Do: 08:00 – 16:00</p>
              <p>Fr: 08:00 – 14:00</p>
            </div>
            <Link
              to="/sales/service"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
            >
              {t('salespage.install.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main SalesPage Component
export function SalesPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('sales.findPartner.title')}
        subtitle={t('sales.findPartner.desc')}
        image="/images/hero-sales-v2.webp"
        imagePosition="object-top"
      />
      <PartnerFinder />
      <PartnerFooterCtas />
      <SparePartsPreviewSection />
      <ServicePreviewSection />
    </main>
  );
}
