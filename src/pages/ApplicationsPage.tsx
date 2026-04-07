import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { applications } from '@/data/applications';
import {
  ArrowRight,
  Leaf,
  Droplets,
  Factory,
  Recycle,
  Building2,
  FileText,
  Utensils,
  type LucideIcon,
} from 'lucide-react';

// Icon assignment per slug — kept here so the data file stays serialisable.
const ICONS: Record<string, LucideIcon> = {
  landwirtschaft: Leaf,
  'bio-einstreu': Droplets,
  biogas: Factory,
  kunststoffrecycling: Recycle,
  'kommunale-anwendungen': Building2,
  'zellstoff-papier': FileText,
  'prozessmedien-und-abwaesser': Factory,
  'nebenprodukte-und-abwaesser': Utensils,
};

// Reusable hover overlay (kept from previous version, simplified)
function ApplicationAnimationOverlay({ slug }: { slug: string }) {
  const containerClass =
    'absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden';

  if (slug === 'landwirtschaft' || slug === 'bio-einstreu') {
    return (
      <div className={containerClass}>
        <div
          className="absolute top-0 left-[20%] text-ecotech-green/40 animate-drift-down"
          style={{ animationDelay: '0s' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" opacity="0.5" />
          </svg>
        </div>
        <div
          className="absolute top-10 left-[70%] text-white/40 animate-drift-down"
          style={{ animationDelay: '1.5s' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" opacity="0.6" />
          </svg>
        </div>
      </div>
    );
  }

  if (
    slug === 'kommunale-anwendungen' ||
    slug === 'nebenprodukte-und-abwaesser' ||
    slug === 'prozessmedien-und-abwaesser'
  ) {
    return (
      <div className={containerClass}>
        <div
          className="absolute bottom-0 left-[30%] text-white/40 animate-float-up"
          style={{ animationDelay: '0s' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" opacity="0.6" />
          </svg>
        </div>
        <div
          className="absolute bottom-10 left-[60%] text-ecotech-green/40 animate-float-up"
          style={{ animationDelay: '1.2s' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" opacity="0.4" />
          </svg>
        </div>
      </div>
    );
  }

  if (slug === 'biogas') {
    return (
      <div className={containerClass}>
        <div className="absolute top-[40%] left-[40%] text-ecotech-green/60 animate-pulse-slow">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="12" cy="12" r="10" opacity="0.4" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <div className="absolute top-[30%] left-[20%] text-white/40 animate-float-random">
        <div className="w-3 h-3 bg-white border border-white opacity-50 rotate-12" />
      </div>
      <div
        className="absolute top-[50%] left-[70%] text-ecotech-green/40 animate-float-random"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="w-4 h-4 border-2 border-ecotech-green opacity-40 -rotate-12" />
      </div>
    </div>
  );
}

interface ApplicationCardProps {
  slug: string;
  title: string;
  desc: string;
  index: number;
}

function ApplicationCard({ slug, title, desc, index }: ApplicationCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = ICONS[slug] || Factory;
  const app = applications.find(a => a.slug === slug);
  const image = app?.heroImage || '/images/app-recycling.png';

  return (
    <div
      ref={ref}
      id={slug}
      className={`scroll-mt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`glass-card overflow-hidden group h-auto lg:h-[350px] flex flex-col lg:flex-row ${
          index % 2 === 0 ? '' : 'lg:flex-row-reverse'
        }`}
      >
        <div className="flex-1 relative min-h-[250px] lg:min-h-0 overflow-hidden bg-[#282F2D]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ecotech-grey/40 transition-colors duration-500 group-hover:bg-ecotech-grey/20" />

          <ApplicationAnimationOverlay slug={slug} />

          <div className="absolute top-6 left-6 transition-transform duration-500 group-hover:-translate-y-1 z-10">
            <div className="w-14 h-14 rounded-xl bg-ecotech-green flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-ecotech-grey mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-ecotech-grey/80 mb-6 leading-relaxed">{desc}</p>
          <Link
            to={`/applications/${slug}` as `/applications/${string}`}
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300 self-start"
          >
            Mehr erfahren
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsPage() {
  const { t, language } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('applications.title')}
        subtitle={t('applications.page.subtitle')}
        image="/images/hero-applications-v2.webp"
      />

      <section className="section-container py-12 pb-24 lg:pb-32">
        <div className="section-inner">
          <div className="space-y-12">
            {applications.map((app, index) => (
              <ApplicationCard
                key={app.slug}
                slug={app.slug}
                title={language === 'de' ? app.cardTitle.de : app.cardTitle.en}
                desc={language === 'de' ? app.cardDesc.de : app.cardDesc.en}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'de'
                ? 'Nicht sicher, welche Lösung die richtige ist?'
                : 'Not sure which solution is right for you?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'de'
                ? 'Unser Expertenteam berät Sie gerne und findet die optimale Lösung für Ihre Anforderungen.'
                : 'Our expert team is happy to advise you and find the optimal solution for your requirements.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300"
              >
                {language === 'de' ? 'Kontakt aufnehmen' : 'Get in touch'}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                {language === 'de' ? 'Produkte ansehen' : 'View products'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
