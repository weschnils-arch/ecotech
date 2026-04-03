import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Leaf, Droplets, Factory, Recycle, Building2, FileText, Utensils } from 'lucide-react';

const applications = [
  {
    key: 'agriculture',
    icon: Leaf,
    image: '/images/app-agriculture.webp',
  },
  {
    key: 'bedding',
    icon: Droplets,
    image: '/images/app-bedding.webp',
  },
  {
    key: 'biogas',
    icon: Factory,
    image: '/images/app-biogas.webp',
  },
  {
    key: 'recycling',
    icon: Recycle,
    image: '/images/app-recycling.png',
    imageScale: 'scale-[1.35] origin-top-left hover:scale-[1.4] transition-transform duration-700',
  },
  {
    key: 'municipal',
    icon: Building2,
    image: '/images/app-municipal.jpg',
  },
  {
    key: 'paper',
    icon: FileText,
    image: '/images/app-paper.webp',
  },
  {
    key: 'mdf',
    icon: Factory,
    image: '/images/app-mdf.png',
  },
  {
    key: 'food',
    icon: Utensils,
    image: '/images/app-food.webp',
  },
];

// Helper component that renders unique abstract SVG particles overlaid on the image 
function ApplicationAnimationOverlay({ appKey }: { appKey: string }) {
  // Common container styling:
  // Hidden by default, appears on group-hover, pointer-events-none so it doesn't block clicks
  const containerClass = "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden";

  if (appKey === 'agriculture' || appKey === 'bedding') {
    return (
      <div className={containerClass}>
        {/* Subtle leaf/seed shapes drifting down */}
        <div className="absolute top-0 left-[20%] text-ecotech-green/40 animate-drift-down" style={{ animationDelay: '0s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" opacity="0.5" /></svg>
        </div>
        <div className="absolute top-10 left-[70%] text-white/40 animate-drift-down" style={{ animationDelay: '1.5s' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity="0.6" /></svg>
        </div>
        <div className="absolute top-20 left-[40%] text-ecotech-green/30 animate-drift-down" style={{ animationDelay: '0.7s' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.992 4.992 0 0 0 12 20c3.87 0 7-3.13 7-7 0-3.47-2.52-6.34-5.83-6.89M12 18c-1.31 0-2.43-.84-2.83-2H12c2.21 0 4-1.79 4-4h-1.17C14.47 11.16 13.31 10.33 12 10.33c-2.21 0-4 1.79-4 4 0 1.25.55 2.37 1.41 3.16L8.41 18.5C7.54 17.56 7 16.34 7 15c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5z" opacity="0.6" /></svg>
        </div>
      </div>
    );
  }

  if (appKey === 'municipal' || appKey === 'food' || appKey === 'mdf') {
    return (
      <div className={containerClass}>
        {/* Subtle bubbles/droplets floating up */}
        <div className="absolute bottom-0 left-[30%] text-white/40 animate-float-up" style={{ animationDelay: '0s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" opacity="0.6" /></svg>
        </div>
        <div className="absolute bottom-10 left-[60%] text-ecotech-green/40 animate-float-up" style={{ animationDelay: '1.2s' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" opacity="0.4" /></svg>
        </div>
        <div className="absolute bottom-20 left-[80%] text-white/50 animate-float-up" style={{ animationDelay: '2.5s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" opacity="0.7" /></svg>
        </div>
        <div className="absolute bottom-5 left-[15%] text-ecotech-green/30 animate-float-up" style={{ animationDelay: '0.8s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" opacity="0.5" /></svg>
        </div>
      </div>
    );
  }

  if (appKey === 'biogas') {
    return (
      <div className={containerClass}>
        {/* Subtle energy pulses/rings growing */}
        <div className="absolute top-[40%] left-[40%] text-ecotech-green/60 animate-pulse-slow">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10" opacity="0.4" /></svg>
        </div>
        <div className="absolute top-[20%] left-[60%] text-white/40 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10" opacity="0.3" /></svg>
        </div>
      </div>
    );
  }

  // Fallback / Recycling / Paper: random floating geometric flakes
  return (
    <div className={containerClass}>
      <div className="absolute top-[30%] left-[20%] text-white/40 animate-float-random">
        <div className="w-3 h-3 bg-white border border-white opacity-50 rotate-12"></div>
      </div>
      <div className="absolute top-[50%] left-[70%] text-ecotech-green/40 animate-float-random" style={{ animationDelay: '0.5s' }}>
        <div className="w-4 h-4 border-2 border-ecotech-green opacity-40 -rotate-12"></div>
      </div>
      <div className="absolute top-[70%] left-[40%] text-white/30 animate-float-random" style={{ animationDelay: '1.2s' }}>
        <div className="w-2 h-2 bg-white opacity-60 rotate-45"></div>
      </div>
    </div>
  );
}


function ApplicationCard({ app, index }: { app: typeof applications[0]; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = app.icon;

  return (
    <div
      ref={ref}
      id={app.key}
      className={`scroll-mt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`glass-card overflow-hidden group h-auto lg:h-[350px] flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
        <div className="flex-1 relative min-h-[250px] lg:min-h-0 overflow-hidden bg-[#282F2D]">
          <img
            src={app.image}
            alt={t(`applications.${app.key}.title`)}
            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
          />
          {/* Standard Overlay Base */}
          <div className="absolute inset-0 bg-ecotech-grey/40 transition-colors duration-500 group-hover:bg-ecotech-grey/20" />

          {/* Custom Graphical Animation Element based on App Type! */}
          <ApplicationAnimationOverlay appKey={app.key} />

          <div className="absolute top-6 left-6 transition-transform duration-500 group-hover:-translate-y-1 z-10">
            <div className="w-14 h-14 rounded-xl bg-ecotech-green flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-ecotech-grey mb-4">
            {t(`applications.${app.key}.title`)}
          </h2>
          <p className="text-lg text-ecotech-grey mb-6 leading-relaxed">
            {t(`applications.${app.key}.desc`)}
          </p>
          <Link
            to={app.key === 'agriculture' ? '/applications/agriculture' : '/products'}
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300 self-start"
          >
            {app.key === 'agriculture' ? 'Mehr erfahren' : 'Passendes Produkt finden'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('applications.title')}
        subtitle="Entdecken Sie die vielfältigen Einsatzbereiche unserer Separationstechnologie – von der Landwirtschaft bis zur Lebensmittelindustrie."
        image="/images/hero-apps-new.png"
      />

      {/* Applications Grid */}
      <section className="section-container py-12 pb-24 lg:pb-32">
        <div className="section-inner">
          <div className="space-y-12">
            {applications.map((app, index) => (
              <ApplicationCard key={app.key} app={app} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nicht sicher, welche Lösung die richtige ist?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Unser Expertenteam berät Sie gerne und findet die optimale Lösung für Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300">
                Kontakt aufnehmen
                <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Produkte ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
