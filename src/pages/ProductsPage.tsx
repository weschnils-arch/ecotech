import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, Settings, Gauge, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

// Lightbox Component
function Lightbox({ images, activeIndex, onClose, onNext, onPrev }: {
  images: { src: string; alt: string }[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
      <button onClick={onClose} className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Close">
        <X size={22} className="text-white" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Previous">
        <ChevronLeft size={26} className="text-white" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Next">
        <ChevronRight size={26} className="text-white" />
      </button>
      <div className="relative z-10 w-[92vw] h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
        ))}
      </div>
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium">
        {activeIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
}

// Image Gallery Component
function ImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="glass-card overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
        <img src={images[activeIndex].src} alt={images[activeIndex].alt} className="w-full aspect-square object-cover transition-opacity duration-500 hover:scale-[1.02] transition-transform" />
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-colors">
        <ChevronLeft size={20} className="text-ecotech-grey" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-colors">
        <ChevronRight size={20} className="text-ecotech-grey" />
      </button>
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {images.map((img, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === activeIndex ? 'border-ecotech-green scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  );
}

// BG2 Product Section
function BG2Section() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = t('productpage.bg2.features.items').split('|');
  const indApps = t('productpage.bg2.applications.ind.items').split('|');
  const agrApps = t('productpage.bg2.applications.agr.items').split('|');
  const benefits = t('productpage.bg2.benefits.items').split('|');

  const technicalData = [
    { label: t('productpage.bg2.tech.drive'), value: t('productpage.bg2.tech.drive.val') },
    { label: t('productpage.bg2.tech.throughput'), value: t('productpage.bg2.tech.throughput.val') },
    { label: t('productpage.bg2.tech.gap'), value: t('productpage.bg2.tech.gap.val') },
    { label: t('productpage.bg2.tech.dry_org'), value: t('productpage.bg2.tech.dry_org.val') },
    { label: t('productpage.bg2.tech.dry_inorg'), value: t('productpage.bg2.tech.dry_inorg.val') },
    { label: t('productpage.bg2.tech.trimeter'), value: t('productpage.bg2.tech.trimeter.val') },
  ];

  const options = t('productpage.bg2.options').split('|');

  return (
    <section ref={ref} id="bg2" className="section-container pt-32 pb-20 scroll-mt-24">
      <div className="section-inner">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('productpage.flagship')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ecotech-grey mb-6">
            {t('productpage.bg2.title')}
          </h1>
          <p className="text-xl text-ecotech-grey max-w-4xl mb-12">
            {t('productpage.bg2.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Gallery */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <ImageGallery images={[
              { src: '/images/product-bg2.jpg', alt: 'BGII-800 Hauptansicht' },
              { src: '/images/product-bg2-gallery-1.webp', alt: 'BGII-800 Detail' },
              { src: '/images/product-bg2-gallery-2.webp', alt: 'BGII-800 Seitenansicht' },
              { src: '/images/product-bg2-gallery-3.webp', alt: 'BGII-800 Nahaufnahme' },
              { src: '/images/product-bg2-gallery-4.webp', alt: 'BGII-800 Komponenten' },
              { src: '/images/product-bg2-patent.webp', alt: 'Patentiert' },
            ]} />
          </div>

          {/* Features */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bg2.features.title')}</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Applications */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '350ms' }}>
          {/* Industrial Applications */}
          <div>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bg2.applications.ind.title')}</h3>
            <ul className="space-y-3">
              {indApps.map((app, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Agricultural Applications */}
          <div>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bg2.applications.agr.title')}</h3>
            <ul className="space-y-3">
              {agrApps.map((app, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '375ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bg2.benefits.title')}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-ecotech-grey-light/30 rounded-lg">
                <Check size={18} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                <span className="text-ecotech-grey font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* USPs (Slides 35-38) */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '390ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.usp.title')}</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="glass-card p-6">
                <h4 className="text-lg font-bold text-ecotech-grey mb-2">{t(`productpage.usp.${i}.title`)}</h4>
                <p className="text-sm text-ecotech-grey/70">{t(`productpage.usp.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Data */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bg2.tech.title')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {technicalData.map((item, index) => (
              <div key={index} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey mb-1">{item.label}</p>
                <p className="font-bold text-ecotech-grey whitespace-pre-line leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ecotech-grey italic">{t('productpage.bg2.tech.disclaimer')}</p>
        </div>

        {/* Options */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.options')}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-3 p-4 glass-card">
                <Settings size={18} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                <span className="text-ecotech-grey">{option}</span>
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

  const features = t('productpage.bgi400.features').split('|');

  const technicalData = [
    { label: t('productpage.bgi400.tech.drive'), value: t('productpage.bgi400.tech.drive.val') },
    { label: t('productpage.bgi400.tech.throughput'), value: t('productpage.bgi400.tech.throughput.val') },
    { label: t('productpage.bgi400.tech.gap'), value: t('productpage.bgi400.tech.gap.val') },
    { label: t('productpage.bgi400.tech.dry_org'), value: t('productpage.bgi400.tech.dry_org.val') },
    { label: t('productpage.bgi400.tech.dry_inorg'), value: t('productpage.bgi400.tech.dry_inorg.val') },
    { label: t('productpage.bgi400.tech.pressure'), value: t('productpage.bgi400.tech.pressure.val') },
  ];

  return (
    <section ref={ref} id="bgi400" className="section-container py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              {t('productpage.compact')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
              {t('productpage.bgi400.title')}
            </h2>
            <p className="text-lg text-ecotech-grey mb-8">
              {t('productpage.bgi400.desc')}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ecotech-green/10 text-ecotech-green rounded-full text-sm font-medium mb-8">
              <Gauge size={16} />
              {t('productpage.bgi400.availability')}
            </div>

            <h3 className="text-xl font-bold text-ecotech-grey mb-4">{t('productpage.features')}</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <ImageGallery images={[
              { src: '/images/product-bgi400-v2.jpg', alt: 'BGI-400 Hauptansicht' },
              { src: '/images/product-bgi-gallery-1.webp', alt: 'BGI-400 Detail' },
              { src: '/images/product-bgi-gallery-2.webp', alt: 'BGI-400 Seitenansicht' },
              { src: '/images/product-bgi-gallery-3.webp', alt: 'BGI-400 Perspektive' },
              { src: '/images/product-bgi-gallery-4.webp', alt: 'BGI-400 Nahaufnahme' },
            ]} />
          </div>
        </div>

        {/* Technical Data */}
        <div className={`glass-card p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bgi400.tech.title')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {technicalData.map((item, index) => (
              <div key={index} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey mb-1">{item.label}</p>
                <p className="font-bold text-ecotech-grey whitespace-pre-line leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ecotech-grey italic">{t('productpage.bgi400.tech.disclaimer')}</p>
        </div>
      </div>
    </section>
  );
}

// BGI-400 Plug & Play Section
function BGI400PnPSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = t('productpage.bgi400pnp.features').split('|');

  const technicalData = [
    { label: t('productpage.bgi400.tech.drive'), value: t('productpage.bgi400.tech.drive.val') },
    { label: t('productpage.bgi400.tech.throughput'), value: t('productpage.bgi400.tech.throughput.val') },
    { label: t('productpage.bgi400.tech.gap'), value: t('productpage.bgi400.tech.gap.val') },
    { label: t('productpage.bgi400.tech.dry_org'), value: t('productpage.bgi400.tech.dry_org.val') },
    { label: t('productpage.bgi400.tech.dry_inorg'), value: t('productpage.bgi400.tech.dry_inorg.val') },
    { label: t('productpage.bgi400.tech.pressure'), value: t('productpage.bgi400.tech.pressure.val') },
  ];

  return (
    <section ref={ref} id="bgi400-pnp" className="section-container py-24 lg:py-32 scroll-mt-24">
      <div className="section-inner">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('productpage.bgi400pnp.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6">
            {t('productpage.bgi400pnp.title')}
          </h2>
          <p className="text-xl text-ecotech-grey max-w-4xl mb-12">
            {t('productpage.bgi400pnp.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <ImageGallery images={[
              { src: '/images/product-bgi400-pnp-7965.webp', alt: 'BGI-400 Plug & Play Hauptansicht' },
              { src: '/images/product-bgi400-pnp-7975.webp', alt: 'BGI-400 Plug & Play Detail' },
              { src: '/images/product-bgi400-pnp-7985.webp', alt: 'BGI-400 Plug & Play Seitenansicht' },
              { src: '/images/product-bgi400-pnp-7997.webp', alt: 'BGI-400 Plug & Play Perspektive' },
              { src: '/images/product-bgi400-pnp-8005.webp', alt: 'BGI-400 Plug & Play Komponenten' },
            ]} />
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.features')}</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:office@ecotechstyria.com?subject=Anfrage BGI-400 Plug %26 Play" className="btn-primary inline-flex">
              {t('productpage.inquiry')} <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Technical Data — shared with BGI-400 */}
        <div className={`glass-card p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.bgi400.tech.title')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {technicalData.map((item, index) => (
              <div key={index} className="p-4 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey mb-1">{item.label}</p>
                <p className="font-bold text-ecotech-grey whitespace-pre-line leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ecotech-grey italic">{t('productpage.bgi400.tech.disclaimer')}</p>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-grey text-white">
      <div className="section-inner">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('productpage.cta.title')}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {t('productpage.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sales" className="inline-flex items-center justify-center gap-2 bg-ecotech-green text-white px-8 py-4 rounded-lg font-medium hover:bg-ecotech-green-dark transition-all duration-300">
              {t('productpage.cta.find')}
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              {t('productpage.cta.contact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Voreindicker Placeholder (#25)
function VoreindicherSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={ref} id="voreindicker" className="section-container py-24 lg:py-32 scroll-mt-24">
      <div className="section-inner">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">{t('productpage.new')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6">{t('productpage.voreindicker.title')}</h2>
          <div className="glass-card overflow-hidden grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-10 lg:p-12">
              <span className="inline-block px-5 py-2 bg-ecotech-green/10 text-ecotech-green text-sm font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-ecotech-green/20">
                {t('productpage.comingSoon')}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-4">
                {t('productpage.voreindicker.tagline')}
              </h3>
              <p className="text-lg text-ecotech-grey/70 leading-relaxed mb-8">
                {t('productpage.voreindicker.intro')}
              </p>
              <a href="mailto:office@ecotechstyria.com?subject=Anfrage Voreindicker" className="btn-primary inline-flex">
                {t('productpage.inquiry')} <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full bg-white p-6 lg:p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/images/product-voreindicker.webp"
                  alt={t('productpage.voreindicker.title')}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="px-6 py-2.5 rounded-full bg-ecotech-green text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] shadow-lg shadow-ecotech-green/30">
                    {t('productpage.comingSoon')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Circulizer Product Section
function CirculyizerSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = t('productpage.circulyizer.features').split('|');
  const indApps = t('productpage.circulyizer.applications.ind.items').split('|');
  const agrApps = t('productpage.circulyizer.applications.agr.items').split('|');
  const benefits = t('productpage.circulyizer.benefits.items').split('|');
  const options = t('productpage.circulyizer.options.items').split('|');
  const details = t('productpage.circulyizer.details').split('|');
  const efficiency = [1, 2, 3] as const;

  return (
    <section ref={ref} id="circulyizer" className="section-container py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="section-inner">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            {t('productpage.circulyizer.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-6">
            {t('productpage.circulyizer.title')}
          </h2>
          <p className="text-xl text-ecotech-grey max-w-4xl mb-12">
            {t('productpage.circulyizer.desc')}
          </p>
        </div>

        {/* Gallery + Merkmale */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <ImageGallery images={[
              { src: '/images/product-circulizer-2.webp', alt: 'Circulyzer 3D Rendering' },
              { src: '/images/product-circulizer-1.webp', alt: 'Circulyzer Technische Ansicht' },
              { src: '/images/product-circulizer-3.webp', alt: 'Circulyzer in Produktionshalle' },
              { src: '/images/product-circulizer-4.webp', alt: 'Circulyzer Detailansichten' },
            ]} />
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-4">
              {t('productpage.circulyizer.tagline')}
            </h3>
            <p className="text-ecotech-grey/70 leading-relaxed mb-8">
              {t('productpage.circulyizer.intro')}
            </p>

            <h4 className="text-lg font-bold text-ecotech-grey mb-4">{t('productpage.circulyizer.features.title')}</h4>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="mailto:office@ecotechstyria.com?subject=Anfrage Circulyzer" className="btn-primary inline-flex">
              {t('productpage.inquiry')} <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Trenneffizienz */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '350ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.efficiency.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {efficiency.map((i) => (
              <div key={i} className="glass-card p-6 text-center">
                <Gauge size={24} className="text-ecotech-green mx-auto mb-3" />
                <p className="text-3xl font-bold text-ecotech-green mb-1">{t(`productpage.circulyizer.efficiency.${i}.value`)}</p>
                <p className="font-semibold text-ecotech-grey mb-1">{t(`productpage.circulyizer.efficiency.${i}.label`)}</p>
                <p className="text-sm text-ecotech-grey/70">{t(`productpage.circulyizer.efficiency.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anwendungen */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <div>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.applications.ind.title')}</h3>
            <ul className="space-y-3">
              {indApps.map((app, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.applications.agr.title')}</h3>
            <ul className="space-y-3">
              {agrApps.map((app, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-ecotech-green" />
                  </div>
                  <span className="text-ecotech-grey">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vorteile */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '450ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.benefits.title')}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-ecotech-grey-light/30 rounded-lg">
                <Check size={18} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                <span className="text-ecotech-grey font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Optionen */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.options.title')}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-3 p-4 glass-card">
                <Settings size={18} className="text-ecotech-green flex-shrink-0 mt-0.5" />
                <span className="text-ecotech-grey">{option}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Drei Baugrößen */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '550ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-4">{t('productpage.circulyizer.sizes.title')}</h3>
          <p className="text-ecotech-grey/80 leading-relaxed max-w-3xl">{t('productpage.circulyizer.sizes.desc')}</p>
        </div>

        {/* Konstruktion & Einsatz */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-2xl font-bold text-ecotech-grey mb-6">{t('productpage.circulyizer.details.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {details.map((detail, index) => (
              <div key={index} className="p-6 bg-ecotech-grey-light/30 rounded-lg">
                <p className="text-sm text-ecotech-grey leading-relaxed">{detail}</p>
              </div>
            ))}
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
        subtitle={t('productpage.subtitle')}
        image="/images/hero-products-v2.webp"
      />

      <BG2Section />
      <BGI400Section />
      <BGI400PnPSection />
      <VoreindicherSection />
      <CirculyizerSection />
      <CTASection />
    </main>
  );
}
