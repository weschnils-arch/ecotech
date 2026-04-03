import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Phone, Mail, ArrowRight } from 'lucide-react';

function ContentSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container pb-20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              Vor-Ort-Service · Planbar · Schnell
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6 leading-tight">
              Professionelle Wartung mit Ecotech Styria
            </h1>
            <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
              Regelmäßige Wartung reduziert ungeplante Stillstände, erhält den Maschinenwert und verhindert Folgeschäden. Unsere Servicetechniker unterstützen Sie effizient und praxisnah – direkt bei Ihnen im Betrieb.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:office@ecotechstyria.com?subject=Service Anfrage" className="btn-primary">
                Service kontaktieren
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-lg font-bold text-ecotech-grey mb-6">Kurzfakten</h3>
            <ul className="space-y-4">
              {[
                'Vor-Ort-Service mit modern ausgestatteten Servicefahrzeugen',
                'Erfahrene und geschulte Servicetechniker',
                'Wartung & Instandhaltung – planbar und dokumentiert',
                'Option: schlüsselfertige Installation & Inbetriebnahme',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-ecotech-grey-light/30 space-y-2">
              <div className="flex items-center gap-2 text-sm text-ecotech-grey/70">
                <Phone size={14} className="text-ecotech-green" />
                <span>Tel.: +43 3144 / 70477</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ecotech-grey/70">
                <Mail size={14} className="text-ecotech-green" />
                <span>office@ecotechstyria.com</span>
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

function RegelmässigSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-white">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">
              Regelmäßiger Service – weniger Stillstand, mehr Sicherheit
            </h3>
            <p className="text-ecotech-grey/70 mb-6">
              Regelmäßig gewartete Maschinen arbeiten stabiler, effizienter und verursachen weniger ungeplante Ausfälle. Gleichzeitig bleibt der Maschinenwert langfristig erhalten.
            </p>
            <ul className="space-y-3">
              {[
                'Ungeplante Ausfallzeiten minimieren',
                'Maschinenwert langfristig erhalten',
                'Internen Wartungsaufwand reduzieren',
                'Kalkulierbare, transparente Servicekosten sicherstellen',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={16} className="text-ecotech-green flex-shrink-0" />
                  <span className="text-ecotech-grey text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 bg-ecotech-green/5 border-ecotech-green/20">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">
              Schlüsselfertige Installation & Inbetriebnahme
            </h3>
            <p className="text-ecotech-grey/70 mb-6">
              Auf Wunsch übernehmen wir die Installation und Inbetriebnahme Ihrer neuen Maschine oder Anlage – inklusive Einschulung für effizientes und sicheres Arbeiten.
            </p>
            <ul className="space-y-3">
              {[
                'Fachgerechte Montage und saubere Integration in den Prozess',
                'Inbetriebnahme & Funktionsprüfung nach definierten Standards',
                'Einschulung des Bedienpersonals für sicheren, effizienten Betrieb',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                  <span className="text-ecotech-grey text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-ecotech-green/10 rounded-lg">
              <p className="text-sm font-bold text-ecotech-grey">Schnell zum richtigen Ansprechpartner</p>
              <a href="mailto:office@ecotechstyria.com?subject=Anfrage Installation" className="inline-flex items-center gap-2 text-ecotech-green text-sm font-medium mt-2 hover:gap-3 transition-all">
                Jetzt anfragen <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicePage() {
  return (
    <main>
      <SubpageHero
        title="Service & Inbetriebnahme"
        subtitle="Professionelle Wartung mit Ecotech Styria – direkt bei Ihnen im Betrieb."
        image="/images/hero-products-new.png"
      />
      <ContentSection />
      <RegelmässigSection />
    </main>
  );
}
