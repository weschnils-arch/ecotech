import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Mail, Phone, Clock } from 'lucide-react';

function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container pb-20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              Unser Know-how ist Ihre Stärke
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6 leading-tight">
              Ersatzteile in Erstausrüster-Qualität – für maximale Maschinenperformance
            </h1>
            <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
              Ecotech Styria Ersatzteile stehen für passgenaue Fertigung, hohe Standzeiten und verlässliche Verfügbarkeit. Damit Ihre Anlage dauerhaft wirtschaftlich läuft – mit minimalen Betriebskosten und maximaler Prozesssicherheit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:spareparts@ecotechstyria.com" className="btn-primary">
                Kontakt aufnehmen
              </a>
              <a href="#leistungen" className="btn-secondary">
                Leistungen ansehen
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-lg font-bold text-ecotech-grey mb-6">Kurzfakten</h3>
            <ul className="space-y-4">
              {[
                { title: 'Passgenau & einsatzsicher', desc: 'Originalteile nach OE-Standard' },
                { title: 'Hohe Standzeiten', desc: 'Material & Fertigung für den Einsatzzweck' },
                { title: 'Schnelle Identifizierung', desc: 'Technische Beratung durch Ersatzteilexperten' },
                { title: 'Schneckenaufbereitung', desc: 'Instandsetzung & Aufpanzerung für „zweites Leben"' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{item.title}</p>
                    <p className="text-sm text-ecotech-grey/60">{item.desc}</p>
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
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="leistungen" className="section-container py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">Kompetente Beratung, die den Unterschied macht</h3>
            <p className="text-ecotech-grey/70 mb-6">
              Unsere Ersatzteilexperten unterstützen Sie bei der Identifizierung des passenden Ersatz- oder Verschleißteils. Mit fundierter technischer Beratung sorgen wir dafür, dass Sie schnell und sicher die richtige Lösung erhalten – unkompliziert und zuverlässig.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-ecotech-grey text-sm">Hilfestellung bei der Teilezuordnung</p>
                  <p className="text-sm text-ecotech-grey/60">Sicher, schnell und praxisnah</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-ecotech-grey text-sm">Klare Spezifikationen</p>
                  <p className="text-sm text-ecotech-grey/60">Für eine reibungslose Bestellung & kurze Stillstandszeiten</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Ihre Vorteile
            </span>
            <h3 className="text-xl font-bold text-ecotech-grey mb-6">Bestes Preis-Leistungs-Verhältnis</h3>
            <p className="text-ecotech-grey/70 mb-6">
              Die Wirtschaftlichkeit Ihrer Anlage wird maßgeblich durch die Qualität der eingesetzten Ersatzteile bestimmt. Ob Siebkorb oder Pressschnecke – originale Ecotech Styria Ersatzteile liefern nachhaltige Vorteile im Betrieb.
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Längere Lebensdauer', desc: 'Im Vergleich zu Nachbauteilen deutlich höhere Standzeiten' },
                { title: 'Weniger Wartungsaufwand', desc: 'Reduzierte Stillstände und geringere Instandhaltungskosten' },
                { title: 'Höhere Maschinenverfügbarkeit', desc: 'Maximale Performance bei minimalen Betriebskosten' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{item.title}</p>
                    <p className="text-sm text-ecotech-grey/60">{item.desc}</p>
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
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 bg-ecotech-green/5 border-ecotech-green/20">
            <span className="inline-block px-3 py-1 bg-ecotech-green text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Service
            </span>
            <h3 className="text-xl font-bold text-ecotech-grey mb-4">
              Aufbereitung von Schnecken – Qualität im Kern des Separators
            </h3>
            <p className="text-ecotech-grey/70 mb-6">
              Schnecken sind die zentralen Funktionselemente in Separatoren – ihre Qualität ist entscheidend für Leistungsfähigkeit, Standzeit und Wirtschaftlichkeit der gesamten Maschine. Entscheidend sind dabei exakt eingehaltene Toleranzen, eine prozesssichere Geometrie sowie die fachgerechte Aufpanzerung mit geeigneten Verfahren und Werkstoffen für maximale Verschleißfestigkeit.
            </p>
            <p className="text-ecotech-grey/70 mb-6">
              Ecotech Styria bietet die professionelle Aufbereitung Ihrer Pressschnecke an. Durch gezielte Instandsetzung, Anpassung der Geometrie und erneute Verschleißbeschichtung verleihen wir Ihrer Schnecke ein zweites Leben – wirtschaftlich, nachhaltig und in bewährter Ecotech-Styria-Qualität.
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Präzise Toleranzen', desc: 'Für stabile Prozesse und reproduzierbare Performance' },
                { title: 'Aufpanzerung mit passenden Verfahren', desc: 'Werkstoff & Methode für hohe Verschleißfestigkeit' },
                { title: '„Zweites Leben" für Ihre Pressschnecke', desc: 'Professionelle Instandsetzung statt teurer Neuanschaffung' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-ecotech-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-ecotech-grey text-sm">{item.title}</p>
                    <p className="text-sm text-ecotech-grey/60">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">Erstausrüster-Qualität über die gesamte Maschinenlebensdauer</h3>
              <p className="text-ecotech-grey/70">
                Unsere Ersatz- und Verschleißteile werden gemeinsam mit der Originalausrüstung entwickelt und gefertigt. Sie sind 100% passgenau, einsatzsicher und erfüllen dieselben hohen Qualitätsanforderungen wie die Erstausrüstung.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">Immer am aktuellen Stand der Technik</h3>
              <p className="text-ecotech-grey/70">
                Die kontinuierliche Weiterentwicklung unserer Produkte ist Teil unseres Selbstverständnisses. Dieses Know-how fließt selbstverständlich auch in unsere Ersatz- und Verschleißteile ein – für zukunftssichere Lösungen und dauerhaft hohe Anlagenperformance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-3 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Schnell zum richtigen Teil – mit unserem Service
            </h2>
            <p className="text-white/80">
              Senden Sie uns Ihre Maschinen- bzw. Teileinformationen – wir unterstützen Sie bei der Identifizierung und erstellen ein passendes Angebot. Auf Wunsch inkl. Schneckenaufbereitung.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:spareparts@ecotechstyria.com" className="inline-flex items-center gap-2 bg-white text-ecotech-green px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all">
                <Mail size={18} />
                E-Mail senden
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Ihr Kontakt für Ersatzteile</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>Tel.: +43 3144 / 70477</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>spareparts@ecotechstyria.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>Mo–Do: 08:00 – 16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>Fr: 08:00 – 14:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErsatzteilePage() {
  return (
    <main>
      <SubpageHero
        title="Ersatzteile"
        subtitle="Unser Know-how ist Ihre Stärke – Ecotech Styria Ersatzteile für maximale Maschinenperformance."
        image="/images/hero-products-new.png"
      />
      <HeroSection />
      <BeratungSection />
      <SchneckenSection />
      <ContactSection />
    </main>
  );
}
