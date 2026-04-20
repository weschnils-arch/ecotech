import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from '@/router';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import type { Application, Bilingual } from '@/data/applications';

function pickLang(value: Bilingual, language: 'de' | 'en'): string {
  return value[language] || value.de;
}

interface AnwendungLayoutProps {
  app: Application;
}

export function AnwendungLayout({ app }: AnwendungLayoutProps) {
  const { language } = useLanguage();
  const L = (v: Bilingual) => pickLang(v, language);

  const { ref: introRef, isVisible: introVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: vorteileRef, isVisible: vorteileVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <main>
      <SubpageHero
        title={L(app.title)}
        subtitle={L(app.subtitle)}
        image={app.heroImage}
        imagePosition={app.heroImagePosition}
      />

      {/* Intro + Kurzfakten */}
      <section
        ref={introRef}
        className="section-container py-16 lg:py-24"
      >
        <div className="section-inner">
          <div
            className={`grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start transition-all duration-1000 ${
              introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                {L(app.badge)}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey mb-8 leading-tight tracking-tight">
                {L(app.title)}
              </h2>
              <div className="space-y-5">
                {app.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg text-ecotech-grey/80 leading-relaxed"
                  >
                    {L(p)}
                  </p>
                ))}
              </div>
            </div>

            {/* Kurzfakten sidebar */}
            <aside className="lg:sticky lg:top-28">
              <div className="glass-card p-8 lg:p-9 bg-ecotech-green/5 border-ecotech-green/20">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={18} className="text-ecotech-green" />
                  <h3 className="text-lg font-bold text-ecotech-grey">
                    {language === 'de' ? 'Kurzfakten' : 'Quick Facts'}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {app.kurzfakten.map((k, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-ecotech-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-ecotech-green" />
                      </div>
                      <span className="text-ecotech-grey/85 text-sm leading-relaxed">
                        {L(k)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Optional Highlight Box (e.g. "Mehr Wirtschaftlichkeit durch Separation") */}
      {app.highlightBox && (
        <section className="section-container pb-12 lg:pb-16">
          <div className="section-inner">
            <div className="glass-card p-8 lg:p-12 bg-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ecotech-grey mb-6 leading-tight">
                {L(app.highlightBox.title)}
              </h3>
              <div className="space-y-4">
                {app.highlightBox.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-ecotech-grey/80 leading-relaxed">
                    {L(p)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Optional Extra Section (e.g. "Best Practice Reject-Ströme", "Fasersuspensionen") */}
      {app.extraSection && (
        <section className="section-container pb-12 lg:pb-16">
          <div className="section-inner">
            <div className={`glass-card overflow-hidden bg-white ${app.extraSection.image ? 'grid lg:grid-cols-[1.2fr_1fr]' : ''}`}>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                  {language === 'de' ? 'Best Practice' : 'Best Practice'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-6 leading-tight">
                  {L(app.extraSection.title)}
                </h3>
                <div className="space-y-4">
                  {app.extraSection.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-ecotech-grey/80 leading-relaxed">
                      {L(p)}
                    </p>
                  ))}
                </div>
              </div>
              {app.extraSection.image && (
                <div className="relative min-h-[280px] lg:min-h-full">
                  <img
                    src={app.extraSection.image}
                    alt={L(app.extraSection.title)}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Vorteile + Typische Anwendungen */}
      <section
        ref={vorteileRef}
        className="section-container py-20 lg:py-28 bg-ecotech-grey-light/20"
      >
        <div className="section-inner">
          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-1000 ${
              vorteileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="glass-card p-8 lg:p-10 bg-white">
              <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-3 block">
                {language === 'de' ? 'Ihre Vorteile' : 'Your Benefits'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-8 leading-tight">
                {language === 'de'
                  ? 'Wirtschaftlichkeit beginnt bei der Trennung'
                  : 'Profitability starts with separation'}
              </h3>
              <ul className="space-y-4">
                {app.vorteile.map((v, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-ecotech-green" />
                    </div>
                    <span className="text-ecotech-grey/85 leading-relaxed">{L(v)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 lg:p-10 bg-white">
              <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-3 block">
                {language === 'de' ? 'Typische Anwendungen' : 'Typical Applications'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-ecotech-grey mb-8 leading-tight">
                {app.typischeAnwendungenTitle
                  ? L(app.typischeAnwendungenTitle)
                  : language === 'de'
                    ? 'Wo unsere Separatoren arbeiten'
                    : 'Where our separators work'}
              </h3>
              <ul className="space-y-4">
                {app.typischeAnwendungen.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-ecotech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight size={14} className="text-ecotech-green" />
                    </div>
                    <span className="text-ecotech-grey/85 leading-relaxed">{L(t)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef}
        className="section-container py-24 lg:py-32 bg-ecotech-green text-white"
      >
        <div className="section-inner">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {L(app.ctaTitle)}
            </h2>
            <p className="text-xl text-white/85 mb-10 leading-relaxed">
              {L(app.ctaDesc)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:office@ecotechstyria.com?subject=Anfrage%20Anwendung"
                className="inline-flex items-center justify-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-xl"
              >
                {L(app.ctaLabel)}
                <ArrowRight size={18} />
              </a>
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
