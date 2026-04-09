import { useEffect } from 'react';
import { useRouter, Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SubpageHero } from '@/components/SubpageHero';
import { getNewsItemBySlug } from '@/data/news';
import { ArrowLeft, Calendar } from 'lucide-react';

interface NewsDetailPageProps {
  slug: string;
}

export function NewsDetailPage({ slug }: NewsDetailPageProps) {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const item = getNewsItemBySlug(slug);

  useEffect(() => {
    if (!item) {
      navigate('/news');
    }
  }, [item, navigate]);

  if (!item) return null;

  const title = language === 'de' ? item.titleDe : item.titleEn;
  const body = language === 'de' ? item.bodyDe : item.bodyEn;

  return (
    <main>
      <SubpageHero
        title={title}
        image={item.image}
      />

      <section ref={ref} className="section-container py-16 lg:py-24">
        <div className="section-inner max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Back link */}
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-3 transition-all duration-300 mb-10"
            >
              <ArrowLeft size={18} />
              {language === 'de' ? 'Zurück zu News & Medien' : 'Back to News & Media'}
            </Link>

            {/* Date badge */}
            <div className="flex items-center gap-2 text-sm text-ecotech-grey/70 mb-6">
              <Calendar size={16} className="text-ecotech-green" />
              <span>{item.date}</span>
              <span className="px-2 py-0.5 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full ml-2">
                {item.type === 'event'
                  ? (language === 'de' ? 'Event' : 'Event')
                  : (language === 'de' ? 'News' : 'News')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-10 leading-tight">
              {title}
            </h1>

            {/* Body content */}
            <div className="glass-card p-8 lg:p-12">
              <div className="space-y-6">
                {body.map((paragraph, i) => (
                  <p key={i} className="text-lg text-ecotech-grey/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Placeholder notice */}
              <div className="mt-10 p-6 bg-ecotech-green/5 rounded-lg border border-ecotech-green/20 text-center">
                <p className="text-ecotech-grey/60 text-sm">
                  {language === 'de'
                    ? 'Der vollständige Bericht wird in Kürze veröffentlicht.'
                    : 'The full report will be published shortly.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
