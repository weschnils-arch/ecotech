import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, ChevronRight, ChevronUp, Droplets, Recycle, Leaf, Factory, Building2, FileText, Utensils, Check, type LucideIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { applications as anwendungen } from '@/data/applications';
import { newsItems } from '@/data/news';

// Hero Section with Image Slider + News Quick-Links
function HeroSection() {
  const { t, language } = useLanguage();

  // Override background images for specific slide positions
  const imageOverrides: Record<number, string> = {
    0: '/images/hero-home-new.png',       // Slide 1: original hero
    1: '/images/news-v2.webp',            // Slide 2: news hero
    [newsItems.length - 1]: '/images/hero-products-v2.webp', // Last slide: products hero
  };

  const slides = newsItems.map((item, index) => ({
    image: imageOverrides[index] ?? item.image,
    title: language === 'de' ? item.titleDe : item.titleEn,
    excerpt: language === 'de' ? item.excerptDe : item.excerptEn,
    slug: item.slug,
    type: item.type,
    date: item.date,
  }));

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images — crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === activeSlide ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-[1]" />

      {/* Diagonal Green Shape (Pauger Style) */}
      {/* Glow Effect Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[40vh] z-[9] pointer-events-none blur-sm animate-neon-flow"
        style={{
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          transform: 'translateY(-3px)'
        }}
      ></div>

      {/* Main defined shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[40vh] z-10 bg-ecotech-green pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Secondary Shape for Depth */}
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

      {/* News Quick-Link for active slide (hidden on first/hero slide) */}
      {slides[activeSlide].slug && (
        <div className="absolute bottom-[22vh] md:bottom-[12vh] left-[5%] md:left-[8%] z-20 animate-fade-in-up max-w-sm" style={{ animationDelay: '0.3s' }}>
          <Link
            to={`/news/${slides[activeSlide].slug}` as `/news/${string}`}
            className="group block bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-black/50 transition-all duration-300"
          >
            <span className="text-ecotech-green text-xs font-bold uppercase tracking-wider">
              {slides[activeSlide].type === 'event' ? 'Event' : 'News'} — {slides[activeSlide].date}
            </span>
            <h3 className="text-white font-bold text-sm md:text-base mt-1 line-clamp-1 group-hover:text-ecotech-green transition-colors">
              {slides[activeSlide].title}
            </h3>
            <p className="text-white/60 text-xs mt-1 line-clamp-1 hidden md:block">
              {slides[activeSlide].excerpt}
            </p>
          </Link>
        </div>
      )}

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

      {/* Slide Indicators — bottom center */}
      <div className="absolute bottom-[16vh] md:bottom-[6vh] left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              index === activeSlide
                ? 'w-8 bg-ecotech-green'
                : 'w-6 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="relative z-30">
      {/* Mirrored Green Diagonal Shape */}
      <div
        className="absolute -top-[1px] left-0 right-0 h-[calc(30vh+2px)] md:h-[calc(40vh+2px)] z-0 bg-ecotech-green pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {/* Neon Green Fading Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[30vh] md:h-[40vh] z-10 pointer-events-none animate-neon-flow-reverse"
        style={{
          clipPath: 'polygon(0 calc(0% - 2px), 100% calc(100% - 2px), 100% calc(100% + 2px), 0 calc(0% + 2px))'
        }}
      ></div>

      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="section-inner">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="pt-24 lg:pt-40">
              <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
                {t('about.title')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-8">
                {t('hero.headline')}
              </h2>
              <p className="text-lg text-ecotech-grey leading-relaxed mb-8">
                {t('about.description')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300">
                {t('about.link')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Applications Section — pulls from the central data file (single source of truth)
function ApplicationsSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const ICONS: Record<string, LucideIcon> = {
    landwirtschaft: Leaf,
    'bio-einstreu': Droplets,
    biogas: Factory,
    kunststoffrecycling: Recycle,
    'kommunale-anwendungen': Building2,
    'zellstoff-papier': FileText,
    'mdf-platten': Factory,
    'lebensmittelindustrie': Utensils,
  };

  const HOMEPAGE_IMAGES: Record<string, string> = {
    landwirtschaft: '/images/app-agriculture.webp',
    'bio-einstreu': '/images/app-bedding.webp',
    biogas: '/images/app-biogas.webp',
    kunststoffrecycling: '/images/app-recycling-v2.webp',
    'kommunale-anwendungen': '/images/app-municipal-v2.webp',
    'zellstoff-papier': '/images/app-paper.webp',
    'mdf-platten': '/images/app-mdf-v2.webp',
    'lebensmittelindustrie': '/images/app-lebensmittel-v2.webp',
  };

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('home.sections.applications')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
            {t('applications.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {anwendungen.map((app, index) => {
            const Icon = ICONS[app.slug] || Factory;
            const image = HOMEPAGE_IMAGES[app.slug] || app.heroImage;
            const title = language === 'de' ? app.cardTitle.de : app.cardTitle.en;
            const desc = language === 'de' ? app.cardDesc.de : app.cardDesc.en;
            return (
              <Link
                key={app.slug}
                to={`/applications/${app.slug}` as `/applications/${string}`}
                className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ecotech-grey/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-ecotech-green flex items-center justify-center mb-2">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-ecotech-grey mb-2 group-hover:text-ecotech-green transition-colors leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-ecotech-grey/80 mb-4 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium">
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
    <section className="relative h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("/images/parallaxhome.png")' }}
        />
        {/* Overlay to ensure some contrast if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Top Angled White Mask */}
      <div
        className="absolute -top-1 left-0 right-0 h-[calc(30vh+4px)] md:h-[calc(40vh+4px)] z-20 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      {/* Top Neon Green Fading Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[30vh] md:h-[40vh] z-30 pointer-events-none animate-neon-flow"
        style={{
          clipPath: 'polygon(0 calc(100% - 2px), 100% -2px, 100% 2px, 0 calc(100% + 2px))'
        }}
      ></div>

      {/* Bottom Angled White Mask */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-[calc(30vh+4px)] md:h-[calc(40vh+4px)] z-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      ></div>

      {/* Bottom Neon Green Fading Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[40vh] z-30 pointer-events-none animate-neon-flow"
        style={{
          clipPath: 'polygon(0 calc(100% - 2px), 100% -2px, 100% 2px, 0 calc(100% + 2px))'
        }}
      ></div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const products = [
    {
      key: 'bg2',
      image: '/images/product-bg2.jpg',
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
            {t('home.sections.products')}
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
                      <li key={feature} className="flex items-center gap-3 text-ecotech-grey">
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
    <section ref={ref} className="section-container py-24 lg:py-32 text-ecotech-grey">

      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('home.sections.benefits')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`glass-card p-6 transition-all duration-700 hover:bg-black/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-ecotech-green/15 flex items-center justify-center mb-4">
                <img src="/images/logo-signet.png" alt="EcoTech Icon" className="w-5 h-auto opacity-80" />
              </div>
              <p className="text-lg font-medium">{t(benefit)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// News Section — pulls from central newsItems data, links to subpages
function NewsSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Show first 3 news items on homepage
  const displayItems = newsItems.slice(0, 3);

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('home.sections.news')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
              {t('news.title')}
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300 mt-4 md:mt-0"
          >
            {language === 'de' ? 'Alle anzeigen' : 'View all'}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => (
            <Link
              key={item.slug}
              to={`/news/${item.slug}` as `/news/${string}`}
              className={`group glass-card overflow-hidden card-hover transition-all duration-700 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-52 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={language === 'de' ? item.titleDe : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-ecotech-grey mb-3 group-hover:text-ecotech-green transition-colors">
                  {language === 'de' ? item.titleDe : item.titleEn}
                </h3>
                <p className="text-ecotech-grey mb-4 line-clamp-2">
                  {language === 'de' ? item.excerptDe : item.excerptEn}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm text-ecotech-green font-medium">
                  {t('news.readMore')}
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main HomePage Component
export function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutSection />
      <ApplicationsSection />
      <ParallaxSection />
      <WhySection />
      <ProductsSection />
      <NewsSection />
    </main>
  );
}
