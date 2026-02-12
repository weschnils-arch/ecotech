import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Download, Calendar, FileText, Image, BookOpen } from 'lucide-react';

export function NewsPage() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();


  const news = [
    {
      image: '/images/news-1.jpg',
      date: '15. Januar 2025',
      titleDe: 'EcoTech Styria GmbH gegründet',
      titleEn: 'EcoTech Styria GmbH Founded',
      excerptDe: 'Mit mehr als 10 Jahren Erfahrung in der Separationstechnik starten wir in Köflach, Österreich, in eine neue Ära der Fest-Flüssig-Trennung.',
      excerptEn: 'With over 10 years of experience in separation technology, we are starting a new era in solid-liquid separation in Köflach, Austria.',
    },
    {
      image: '/images/news-2.jpg',
      date: '20. Januar 2025',
      titleDe: 'BGII-800: Unser Flaggschiff vorgestellt',
      titleEn: 'BGII-800: Our Flagship Unveiled',
      excerptDe: 'Die Filterschneckenpresse BGII-800 setzt neue Maßstäbe in der Industrie mit bis zu 75m³/h Durchsatz und patentierter Schneckengeometrie.',
      excerptEn: 'The Filter Press Screw BGII-800 sets new standards in the industry with up to 75m³/h throughput and patented auger geometry.',
    },
    {
      image: '/images/news-3.jpg',
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
  ];

  return (
    <main>
      {/* Hero Section */}
      <SubpageHero
        title={t('newspage.title')}
        subtitle="Bleiben Sie auf dem Laufenden über Neuigkeiten, Erfolgsgeschichten und Entwicklungen bei EcoTech Styria."
        image="/images/news-hero-bw.webp"
      />

      {/* News Section */}
      <section ref={ref} className="section-container py-12 pb-24">
        <div className="section-inner">
          <h2 className="text-2xl font-bold text-ecotech-grey mb-8">News & Erfolgsgeschichten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className={`group glass-card overflow-hidden card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={language === 'de' ? item.titleDe : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-ecotech-grey/50 mb-3">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                    {language === 'de' ? item.titleDe : item.titleEn}
                  </h3>
                  <p className="text-ecotech-grey/60 mb-4 line-clamp-3">
                    {language === 'de' ? item.excerptDe : item.excerptEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-ecotech-green font-medium">
                    Weiterlesen
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section-container py-24 lg:py-32 bg-gradient-to-b from-white to-ecotech-grey-light/20">
        <div className="section-inner">
          <div className={`max-w-4xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('newspage.downloads.desc')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-4">
              {t('newspage.downloads.title')}
            </h2>
            <p className="text-lg text-ecotech-grey/70">
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
                    <p className="text-sm text-ecotech-grey/50">{download.type} • {download.size}</p>
                  </div>
                  <Download size={20} className="text-ecotech-grey/30 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
