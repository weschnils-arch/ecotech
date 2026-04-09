import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Download, Calendar, FileText, Image, BookOpen } from 'lucide-react';
import { newsItems } from '@/data/news';

export function NewsPage() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const news = newsItems.filter(n => n.type === 'news');
  const events = newsItems.filter(n => n.type === 'event');

  const downloads = [
    { nameKey: 'newspage.download.brochureBg2', type: 'PDF', size: '2.4 MB', icon: BookOpen },
    { nameKey: 'newspage.download.brochureBgi400', type: 'PDF', size: '1.8 MB', icon: BookOpen },
    { nameKey: 'newspage.download.datasheetBg2', type: 'PDF', size: '856 KB', icon: FileText },
    { nameKey: 'newspage.download.datasheetBgi400', type: 'PDF', size: '720 KB', icon: FileText },
    { nameKey: 'newspage.download.imagesBg2', type: 'ZIP', size: '12.4 MB', icon: Image },
    { nameKey: 'newspage.download.imagesBgi400', type: 'ZIP', size: '8.2 MB', icon: Image },
    { nameKey: 'newspage.download.recyclingSheet', type: 'PDF', size: '8.8 MB', icon: FileText },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SubpageHero
        title={t('newspage.title')}
        subtitle={t('newspage.hero.subtitle')}
        image="/images/news-v2.webp"
      />

      {/* News Section */}
      <section ref={ref} className="section-container py-12 pb-24">
        <div className="section-inner">
          <h2 className="text-2xl font-bold text-ecotech-grey mb-8">{t('newspage.sections.news')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => {
              const title = language === 'de' ? item.titleDe : item.titleEn;
              const excerpt = language === 'de' ? item.excerptDe : item.excerptEn;
              return (
                <article
                  key={item.slug}
                  className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-ecotech-grey mb-3">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                      {title}
                    </h3>
                    <p className="text-ecotech-grey mb-4 line-clamp-3">
                      {excerpt}
                    </p>
                    <Link
                      to={`/news/${item.slug}` as `/news/${string}`}
                      className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium max-w-fit"
                    >
                      {t('newspage.readMore')}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
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
          <h2 className="text-2xl font-bold text-ecotech-grey mb-8">{t('newspage.sections.events')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((item, index) => {
              const title = language === 'de' ? item.titleDe : item.titleEn;
              const excerpt = language === 'de' ? item.excerptDe : item.excerptEn;
              return (
                <article
                  key={item.slug}
                  className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-ecotech-grey mb-3">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                      {title}
                    </h3>
                    <p className="text-ecotech-grey mb-4 line-clamp-3">
                      {excerpt}
                    </p>
                    <Link
                      to={`/news/${item.slug}` as `/news/${string}`}
                      className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium max-w-fit"
                    >
                      {t('newspage.eventReadMore')}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
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
              const name = t(download.nameKey);
              return (
                <div
                  key={index}
                  className={`glass-card p-6 flex items-center gap-4 cursor-pointer hover:border-ecotech-green/30 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  onClick={() => alert(`Download: ${name}`)}
                >
                  <div className="w-12 h-12 rounded-xl bg-ecotech-green/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-ecotech-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-ecotech-grey truncate">{name}</p>
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
