import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, Settings, Gauge } from 'lucide-react';

// BGII-800 Product Section
function BGII800Section() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    'Edelstahlkonstruktion',
    'Engster Spalt zwischen Sieb und Schnecke',
    'Bis zu 0,5bar Zulaufdruck',
    'Bis zu 75% TS-Gehalt im Feststoff',
    'Direkte Separation von Waschwasser ohne Voreindickung, bis zu 75m³/h',
    'Geschlossenes System mit automatischer Wascheinrichtung',
    'Vollautomatische Kontrolle und Überwachung',
    'Selbst entwickelte Software mit offener Schnittstelle',
    'Verminderter Verschleiß durch patentierte Schneckengeometrie',
  ];

  const technicalData = [
    { label: 'Antrieb', value: '5,5 - 11,0 kW' },
    { label: 'Durchsatz', value: 'bis zu 75m³/h' },
    { label: 'Spaltweite', value: '100 - 1000µm' },
    { label: 'TS-Gehalt organische Fasern', value: 'bis zu 42%' },
    { label: 'TS-Gehalt anorganische Fasern', value: 'bis zu 75%' },
  ];

  const options = [
    'Automatische Wascheinrichtung für Filter- und Presssieb',
    'Sensorpakete zur Überwachung',
    'Steuerung ECO mit manueller Regelung',
    'Steuerung PRO mit HMI-Panel und ProfiNET',
    'Zulaufverrohrung mit Teleskoprohr',
    'Steuerungsmodul für Zulaufpumpen',
    'Zusätzlicher Fußrahmen für höhere Arbeitshöhe',
    'Kundenspezifische Optionen nach Bedarf',
  ];

  return (
    <section ref={ref} id="bgii800" className="section-container pt-32 pb-20 scroll-mt-24">
      <div className="section-inner">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Flaggschiff
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ecotech-grey mb-6">
            {t('productpage.bgii800.title')}
          </h1>
          <p className="text-xl text-ecotech-grey/70 max-w-4xl mb-12">
            {t('productpage.bgii800.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="glass-card overflow-hidden">
              <img
                src="/images/product-bgii800.jpg"
                alt="Filterschneckenpresse BGII-800"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">Merkmale</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Data */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">Technische Daten</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalData.map((item, index) => (
              <div key={index} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey/60 mb-1">{item.label}</p>
                <p className="font-bold text-ecotech-grey">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">Optionen</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-3 p-4 glass-card">
                <Settings size={18} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                <span className="text-ecotech-grey/70">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// BGI-400 Product Section
function BGI400Section() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    'Kompakte, günstige Maschine hauptsächlich für Agrar-Anwendungen',
    'Hoher TS-Gehalt im Feststoff, geeignet zur Produktion von Einstreu',
    'Einfache Plug&Play-Lösung mit angebautem Frequenzumrichter',
    'Ausführung in Edelstahl (1.4301 / AISI 304)',
    'Edelstahlschnecke mit Panzerung',
    'Edelstahl-Spaltsiebe',
    'Zulaufdruck bis 0,5 bar',
    'Zulaufverrohrung mit Teleskoprohr und Überlaufrohr',
  ];

  const technicalData = [
    { label: 'Antrieb', value: '2,2 - 3,0 kW' },
    { label: 'Durchsatz', value: 'bis zu 20m³/h' },
    { label: 'Spaltweite', value: '100 - 1000µm' },
    { label: 'TS-Gehalt organische Fasern', value: 'bis zu 42%' },
    { label: 'TS-Gehalt anorganische Fasern', value: 'bis zu 75%' },
  ];

  return (
    <section ref={ref} id="bgi400" className="section-container py-24 lg:py-32 bg-gradient-to-b from-white to-ecotech-grey-light/20 scroll-mt-24">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              Kompakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
              {t('productpage.bgi400.title')}
            </h2>
            <p className="text-lg text-ecotech-grey/70 mb-8">
              {t('productpage.bgi400.desc')}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ecotech-green/10 text-ecotech-green rounded-full text-sm font-medium mb-8">
              <Gauge size={16} />
              {t('productpage.bgi400.availability')}
            </div>

            <h3 className="text-xl font-bold text-ecotech-grey mb-4">Merkmale</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="glass-card overflow-hidden">
              <img
                src="/images/product-bgi400.jpg"
                alt="Filterschneckenpresse BGI-400"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        {/* Technical Data */}
        <div className={`glass-card p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">Technische Daten</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalData.map((item, index) => (
              <div key={index} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey/60 mb-1">{item.label}</p>
                <p className="font-bold text-ecotech-grey">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-grey text-white">
      <div className="section-inner">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Individuelle Beratung gewünscht?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Unser Vertriebsteam steht Ihnen für eine persönliche Beratung zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sales" className="inline-flex items-center justify-center gap-2 bg-ecotech-green text-white px-8 py-4 rounded-lg font-medium hover:bg-ecotech-green-dark transition-all duration-300">
              Vertriebspartner finden
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('products.title')}
        subtitle="Entdecken Sie unsere innovativen Separationslösungen für maximale Effizienz und Langlebigkeit."
        image="/images/product-bgii800.jpg"
      />

      <BGII800Section />
      <BGI400Section />
      <CTASection />
    </main>
  );
}
