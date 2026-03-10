import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Download, Calendar, FileText, Image, BookOpen, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function NewsPage() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const events = [
    {
      image: '/images/event-agritechnica.png',
      date: '12. - 18. November 2025',
      titleDe: 'Messeauftritt auf der Agritechnica',
      titleEn: 'Exhibition at Agritechnica',
      excerptDe: 'Besuchen Sie uns auf der Weltleitmesse für Landtechnik in Hannover. Wir präsentieren unsere neuesten Innovationen in der Separationstechnologie.',
      excerptEn: 'Visit us at the world\'s leading trade fair for agricultural machinery in Hanover. We will present our latest innovations in separation technology.',
    },
    {
      image: '/images/event-ifat.png',
      date: '10. - 14. Mai 2026',
      titleDe: 'EcoTech auf der IFAT München',
      titleEn: 'EcoTech at IFAT Munich',
      excerptDe: 'Die Weltleitmesse für Umwelttechnologien ist der perfekte Ort, um unsere leistungsstarken Filterschneckenpressen für die kommunale und industrielle Abwasserreinigung vorzustellen.',
      excerptEn: 'The world\'s leading trade fair for environmental technologies is the perfect place to present our high-performance filter screw presses for municipal and industrial wastewater treatment.',
    },
    {
      image: '/images/event-eurotier.png',
      date: '13. - 16. November 2026',
      titleDe: 'EuroTier 2026 Hannover',
      titleEn: 'EuroTier 2026 Hanover',
      excerptDe: 'Innovationen für die Tierhaltung und effiziente Gülle-Separation. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen für die Landwirtschaft.',
      excerptEn: 'Innovations for animal husbandry and efficient manure separation. Learn more about our tailor-made solutions for agriculture.',
    },
  ];

  const news = [
    {
      image: '/images/hero-home-new.png',
      date: '15. Januar 2025',
      titleDe: 'EcoTech Styria GmbH gegründet',
      titleEn: 'EcoTech Styria GmbH Founded',
      excerptDe: 'Mit mehr als 15 Jahren Erfahrung in der Separationstechnik starten wir in Köflach, Österreich, in eine neue Ära der Fest-Flüssig-Trennung.',
      excerptEn: 'With over 15 years of experience in separation technology, we are starting a new era in solid-liquid separation in Köflach, Austria.',
    },
    {
      image: '/images/product-bg2.jpg',
      date: '20. Januar 2025',
      titleDe: 'BGII-800: Unser Flaggschiff vorgestellt',
      titleEn: 'BGII-800: Our Flagship Unveiled',
      excerptDe: 'Die Filterschneckenpresse BGII-800 setzt neue Maßstäbe in der Industrie mit bis zu 75m³/h Durchsatz und patentierter Schneckengeometrie.',
      excerptEn: 'The Filter Press Screw BGII-800 sets new standards in the industry with up to 75m³/h throughput and patented auger geometry.',
    },
    {
      image: '/images/hero-sales-new.png',
      date: '1. Februar 2025',
      titleDe: 'Expansion des Vertriebsnetzwerks',
      titleEn: 'Expansion of Distribution Network',
      excerptDe: 'Wir freuen uns, Farmtech d.o.o. (Slowenien), IWZ GmbH (Österreich) und Vanderloop Equipment (USA) als Vertriebspartner begrüßen zu dürfen.',
      excerptEn: 'We are pleased to welcome Farmtech d.o.o. (Slovenia), IWZ GmbH (Austria) and Vanderloop Equipment (USA) as distribution partners.',
    },
  ];

  const downloads = [
    { name: 'Produktbroschüre BGII-800', type: 'PDF', size: '2.4 MB', icon: BookOpen },
    { name: 'Produktbroschüre BGI-400', type: 'PDF', size: '1.8 MB', icon: BookOpen },
    { name: 'Technisches Datenblatt BGII-800', type: 'PDF', size: '856 KB', icon: FileText },
    { name: 'Technisches Datenblatt BGI-400', type: 'PDF', size: '720 KB', icon: FileText },
    { name: 'Produktbilder BGII-800', type: 'ZIP', size: '12.4 MB', icon: Image },
    { name: 'Produktbilder BGI-400', type: 'ZIP', size: '8.2 MB', icon: Image },
    { name: 'Anwendungsblatt Kunststoffrecycling', type: 'PDF', size: '8.8 MB', icon: FileText },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SubpageHero
        title={t('newspage.title')}
        subtitle="Bleiben Sie auf dem Laufenden über Neuigkeiten, Erfolgsgeschichten und Entwicklungen bei EcoTech Styria."
        image="/images/news-v2.webp"
      />

      {/* News Section */}
      <section ref={ref} className="section-container py-12 pb-24">
        <div className="section-inner">
          <h2 className="text-2xl font-bold text-ecotech-grey mb-8">News & Erfolgsgeschichten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => {
              const isExpanded = expandedId === index;
              return (
                <article
                  key={index}
                  className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={language === 'de' ? item.titleDe : item.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-ecotech-grey mb-3">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                      {language === 'de' ? item.titleDe : item.titleEn}
                    </h3>
                    <p className={`text-ecotech-grey mb-4 transition-all duration-500 ease-in-out ${isExpanded ? '' : 'line-clamp-3'}`}>
                      {language === 'de' ? item.excerptDe : item.excerptEn}
                    </p>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : index)}
                      className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium cursor-pointer max-w-fit outline-none"
                    >
                      {isExpanded
                        ? (language === 'de' ? 'Weniger anzeigen' : 'Show less')
                        : (language === 'de' ? 'Weiterlesen' : 'Read more')}
                      {isExpanded
                        ? <ChevronUp size={16} />
                        : <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-container pb-24">
        <div className="section-inner">
          <h2 className="text-2xl font-bold text-ecotech-grey mb-8">Messe & Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((item, index) => {
              const isExpanded = expandedEventId === index;
              return (
                <article
                  key={index}
                  className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={language === 'de' ? item.titleDe : item.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-ecotech-grey mb-3">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                      {language === 'de' ? item.titleDe : item.titleEn}
                    </h3>
                    <p className={`text-ecotech-grey mb-4 transition-all duration-500 ease-in-out ${isExpanded ? '' : 'line-clamp-3'}`}>
                      {language === 'de' ? item.excerptDe : item.excerptEn}
                    </p>
                    <button
                      onClick={() => setExpandedEventId(isExpanded ? null : index)}
                      className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium cursor-pointer max-w-fit outline-none"
                    >
                      {isExpanded
                        ? (language === 'de' ? 'Weniger anzeigen' : 'Show less')
                        : (language === 'de' ? 'Mehr erfahren' : 'Read more')}
                      {isExpanded
                        ? <ChevronUp size={16} />
                        : <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section-container py-24 lg:py-32 bg-[#f7f7f6]">
        <div className="section-inner">
          <div className={`max-w-4xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('newspage.downloads.desc')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-4">
              {t('newspage.downloads.title')}
            </h2>
            <p className="text-lg text-ecotech-grey">
              {t('newspage.downloads.text')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((download, index) => {
              const Icon = download.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 flex items-center gap-4 cursor-pointer hover:border-ecotech-green/30 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  onClick={() => alert(`Download: ${download.name}`)}
                >
                  <div className="w-12 h-12 rounded-xl bg-ecotech-green/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-ecotech-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-ecotech-grey truncate">{download.name}</p>
                    <p className="text-sm text-ecotech-grey">{download.type} • {download.size}</p>
                  </div>
                  <Download size={20} className="text-ecotech-grey flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
