import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, ChevronRight, Droplets, Recycle, Leaf, Factory, Building2, FileText, Utensils, Check } from 'lucide-react';

// Hero Section
function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-home-new.png"
          alt="Separation Technology"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Diagonal Green Shape (Pauger Style) */}
      {/* Glow Effect Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[40vh] z-[9] pointer-events-none blur-sm"
        style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          transform: 'translateY(-3px)',
          background: 'linear-gradient(90deg, transparent 0%, #62a731 20%, #62a731 80%, transparent 100%)',
          filter: 'brightness(1.5)'
        }}
      ></div>

      {/* Main defined shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[40vh] z-10 bg-ecotech-green pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      >
        {/* Subtle pattern or gradient inside the green shape for "better" look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Secondary Shape for Depth (Glass/Layering effect) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[32vh] md:h-[42vh] z-0 bg-ecotech-green/60 backdrop-blur-sm pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 20%, 100% 100%)' }}
      ></div>

      {/* Content */}
      <div className="relative z-20 section-container pt-32 pb-48 text-center flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-5xl mx-auto -translate-y-16">
          {/* Logo Signet in Glass Circle */}
          <div className="animate-fade-in-up flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-glass hover:scale-105 transition-transform duration-500">
              <img src="/images/logo-signet.png" alt="EcoTech Styria" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-xl animate-fade-in-up leading-tight tracking-tight" style={{ animationDelay: '0.1s' }}>
            {t('hero.headline')}
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-12 animate-fade-in-up font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>
        </div>
      </div>

      {/* CTA Button Positioned Bottom Right */}
      <div className="absolute bottom-[20vh] md:bottom-[10vh] right-[15%] md:right-[20%] z-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Link
          to="/about"
          className="group px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-medium text-white transition-all duration-300
                       bg-white/10 backdrop-blur-md border border-white/30 shadow-glass hover:bg-white/20 hover:scale-105 hover:shadow-glass-lg"
        >
          {t('hero.cta')}
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>


    </section>
  );
}

// About Section
function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('about.title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-8">
              {t('hero.headline')}
            </h2>
            <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300">
              {t('about.link')}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="glass-card p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-ecotech-green mb-2">15+</div>
                  <div className="text-sm text-ecotech-grey/60">Jahre Erfahrung</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-ecotech-green mb-2">35</div>
                  <div className="text-sm text-ecotech-grey/60">Teammitglieder</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-ecotech-green mb-2">75%</div>
                  <div className="text-sm text-ecotech-grey/60">TS-Gehalt</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-bold text-ecotech-green mb-2">8</div>
                  <div className="text-sm text-ecotech-grey/60">Anwendungen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Applications Section
function ApplicationsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const applications = [
    { key: 'agriculture', icon: Leaf, image: '/images/app-agriculture.jpg' },
    { key: 'bedding', icon: Droplets, image: '/images/app-bedding.jpg' },
    { key: 'biogas', icon: Factory, image: '/images/app-biogas.jpg' },
    { key: 'recycling', icon: Recycle, image: '/images/app-recycling.jpg' },
    { key: 'municipal', icon: Building2, image: '/images/app-municipal.jpg' },
    { key: 'paper', icon: FileText, image: '/images/app-paper.jpg' },
    { key: 'mdf', icon: Factory, image: '/images/app-mdf.jpg' },
    { key: 'food', icon: Utensils, image: '/images/app-food.jpg' },
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-[#f7f7f6]">
      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Bereiche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
            {t('applications.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Link
                key={app.key}
                to="/applications"
                className={`group glass-card overflow-hidden card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={t(`applications.${app.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ecotech-grey/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-ecotech-green flex items-center justify-center mb-2">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ecotech-grey mb-2 group-hover:text-ecotech-green transition-colors">
                    {t(`applications.${app.key}.title`)}
                  </h3>
                  <p className="text-sm text-ecotech-grey/60 mb-4 line-clamp-2">
                    {t(`applications.${app.key}.desc`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-ecotech-green font-medium">
                    {t('applications.learnMore')}
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Parallax Section
function ParallaxSection() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: 'url("/images/parallax-news.png")',
          transform: 'translateZ(0)',
        }}
      />
      {/* Overlay to ensure some contrast if needed, subtle dark/tint */}
      <div className="absolute inset-0 bg-black/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-20" />
    </section>
  );
}

// Products Section
function ProductsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const products = [
    {
      key: 'bgii800',
      image: '/images/product-bgii800.jpg',
      features: ['feature1', 'feature2', 'feature3'],
    },
    {
      key: 'bgi400',
      image: '/images/product-bgi400.jpg',
      features: ['feature1', 'feature2', 'feature3'],
    },
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Produkte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
            {t('products.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.key}
              className={`glass-card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={product.image}
                    alt={t(`products.${product.key}.name`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-ecotech-grey mb-4">
                    {t(`products.${product.key}.name`)}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-ecotech-grey/70">
                        <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-ecotech-green" />
                        </div>
                        {t(`products.${product.key}.${feature}`)}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
                  >
                    {t('products.viewDetails')}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Separation Section
function WhySection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const benefits = [
    'why.point1',
    'why.point2',
    'why.point3',
    'why.point4',
    'why.point5',
    'why.point6',
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-grey text-white">

      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Vorteile
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`glass-card-dark p-6 transition-all duration-700 hover:bg-white/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-ecotech-green/15 flex items-center justify-center mb-4">
                <Check size={20} className="text-ecotech-green" />
              </div>
              <p className="text-lg font-medium">{t(benefit)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// News Section
function NewsSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const news = [
    {
      image: '/images/news-1.jpg',
      titleDe: 'EcoTech Styria gegründet',
      titleEn: 'EcoTech Styria Founded',
      excerptDe: 'Mit mehr als 15 Jahren Erfahrung in der Separationstechnik starten wir in Köflach, Österreich, in eine neue Ära der Fest-Flüssig-Trennung.',
      excerptEn: 'With over 15 years of experience in separation technology, we are starting a new era in solid-liquid separation in Köflach, Austria.',
    },
    {
      image: '/images/hero-sales-new.png',
      titleDe: 'BGII-800: Unser Flaggschiff vorgestellt',
      titleEn: 'BGII-800: Our Flagship Unveiled',
      excerptDe: 'Die Filterschneckenpresse BGII-800 setzt neue Maßstäbe in der Industrie mit bis zu 75m³/h Durchsatz und patentierter Schneckengeometrie.',
      excerptEn: 'The Filter Press Screw BGII-800 sets new standards in the industry with up to 75m³/h throughput and patented auger geometry.',
    },
    {
      image: '/images/hero-sales-new.png',
      titleDe: 'Expansion des Vertriebsnetzwerks',
      titleEn: 'Expansion of Distribution Network',
      excerptDe: 'Wir freuen uns, Farmtech d.o.o. (Slowenien), IWZ GmbH (Österreich) und Vanderloop Equipment (USA) als Vertriebspartner begrüßen zu dürfen.',
      excerptEn: 'We are pleased to welcome Farmtech d.o.o. (Slovenia), IWZ GmbH (Austria) and Vanderloop Equipment (USA) as distribution partners.',
    },
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              Aktuelles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
              {t('news.title')}
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300 mt-4 md:mt-0"
          >
            {t('news.readMore')}
            <ArrowRight size={18} />
          </Link>
        </div>

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
                <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                  {language === 'de' ? item.titleDe : item.titleEn}
                </h3>
                <p className="text-ecotech-grey/60 mb-4 line-clamp-2">
                  {language === 'de' ? item.excerptDe : item.excerptEn}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-ecotech-green font-medium">
                  {t('news.readMore')}
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main HomePage Component
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ApplicationsSection />
      <ParallaxSection />
      <ProductsSection />
      <WhySection />
      <NewsSection />
    </main>
  );
}
