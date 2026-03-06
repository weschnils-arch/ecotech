import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Leaf, Droplets, Factory, Recycle, Building2, FileText, Utensils } from 'lucide-react';

const applications = [
  {
    key: 'agriculture',
    icon: Leaf,
    image: '/images/app-agriculture.jpg',
  },
  {
    key: 'bedding',
    icon: Droplets,
    image: '/images/app-bedding.jpg',
  },
  {
    key: 'biogas',
    icon: Factory,
    image: '/images/app-biogas.jpg',
  },
  {
    key: 'recycling',
    icon: Recycle,
    image: '/images/app-recycling.jpg',
  },
  {
    key: 'municipal',
    icon: Building2,
    image: '/images/app-municipal.jpg',
  },
  {
    key: 'paper',
    icon: FileText,
    image: '/images/app-paper.jpg',
  },
  {
    key: 'mdf',
    icon: Factory,
    image: '/images/app-mdf.jpg',
  },
  {
    key: 'food',
    icon: Utensils,
    image: '/images/app-food.jpg',
  },
];

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
      <div className={`glass-card overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
        <div className="grid lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <img
              src={app.image}
              alt={t(`applications.${app.key}.title`)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ecotech-grey/40" />
            <div className="absolute top-6 left-6">
              <div className="w-14 h-14 rounded-xl bg-ecotech-green flex items-center justify-center">
                <Icon size={28} className="text-white" />
              </div>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-3">
              Anwendung {index + 1}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-ecotech-grey mb-4">
              {t(`applications.${app.key}.title`)}
            </h2>
            <p className="text-lg text-ecotech-grey/70 mb-6 leading-relaxed">
              {t(`applications.${app.key}.desc`)}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300 self-start"
            >
              Passendes Produkt finden
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsPage() {
  const { t } = useLanguage();


  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
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
