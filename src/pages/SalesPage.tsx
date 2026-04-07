import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { PartnerFinder, PartnerFooterCtas } from '@/components/PartnerFinder';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Package, Wrench, ArrowRight, Check, Phone, Mail } from 'lucide-react';

// Spare Parts preview — substantial preview of /sales/ersatzteile content
function SparePartsPreviewSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const highlights = [
    'Erstausrüster-Qualität — passgenau, langlebig, einsatzsicher',
    'Schneckenaufbereitung — „zweites Leben" für Ihre Pressschnecke',
    'Kompetente Beratung bei Identifizierung & Bestellung',
    'Kurze Lieferzeiten direkt vom Hersteller',
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
              Ersatzteile
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6 leading-tight">
              Originale Ersatzteile — für maximale Maschinenperformance
            </h2>
            <p className="text-lg text-ecotech-grey/70 mb-8 leading-relaxed">
              Ecotech Styria Ersatzteile stehen für passgenaue Fertigung, hohe Standzeiten und
              verlässliche Verfügbarkeit. Damit Ihre Anlage dauerhaft wirtschaftlich läuft – mit
              minimalen Betriebskosten und maximaler Prozesssicherheit.
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
                Alle Leistungen ansehen
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
              Aufbereitung von Schnecken — Qualität im Kern des Separators
            </h3>
            <p className="text-ecotech-grey/70 mb-6 leading-relaxed">
              Schnecken sind die zentralen Funktionselemente in Separatoren. Ecotech Styria
              bietet die professionelle Aufbereitung Ihrer Pressschnecke an: gezielte
              Instandsetzung, Anpassung der Geometrie und erneute Verschleißbeschichtung – für
              ein zweites Leben Ihrer Schnecke.
            </p>
            <Link
              to="/sales/ersatzteile"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
            >
              Mehr über Schneckenaufbereitung
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
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const benefits = [
    'Ungeplante Ausfallzeiten minimieren',
    'Maschinenwert langfristig erhalten',
    'Internen Wartungsaufwand reduzieren',
    'Kalkulierbare, transparente Servicekosten',
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
              Service & Inbetriebnahme
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Professionelle Wartung mit Ecotech Styria
            </h2>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Regelmäßig gewartete Maschinen sind zuverlässiger und haben weniger ungeplante
              Ausfälle. Schnelle und kompetente Unterstützung durch unsere erfahrenen
              Servicetechniker — direkt bei Ihnen im Betrieb.
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
                Service-Leistungen ansehen
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
              Schlüsselfertige Installation & Inbetriebnahme
            </h3>
            <p className="text-white/75 mb-6 leading-relaxed">
              Auf Wunsch übernehmen wir Installation und Inbetriebnahme Ihrer neuen Maschine
              oder Anlage – inklusive Einschulung für effizientes und sicheres Arbeiten.
            </p>
            <div className="space-y-2 text-sm text-white/70 mb-6">
              <p>Mo–Do: 08:00 – 16:00</p>
              <p>Fr: 08:00 – 14:00</p>
            </div>
            <Link
              to="/sales/service"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
            >
              Mehr zum Service
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
