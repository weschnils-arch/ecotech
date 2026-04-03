import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Leaf, Factory, CheckCircle2 } from 'lucide-react';

export function AgriculturePage() {
    const { t } = useLanguage();
    const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation<HTMLDivElement>();
    const { ref: section2Ref, isVisible: section2Visible } = useScrollAnimation<HTMLDivElement>();

    const manurePoints = t('agriculture.manure.points').split('|');
    const biogasPoints = t('agriculture.biogas.points').split('|');

    return (
        <main>
            <SubpageHero
                title={t('agriculture.title')}
                subtitle={t('agriculture.subtitle')}
                image="/images/hero-agriculture-higgs.png"
                imagePosition="object-[95%_center]"
            />

            <section className="section-container py-20 bg-white">
                <div className="section-inner">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-ecotech-grey mb-6">
                            {t('agriculture.intro.title')} <span className="text-ecotech-green">{t('agriculture.intro.highlight')}</span>
                        </h2>
                        <p className="text-lg text-ecotech-grey/90 leading-relaxed mb-8">
                            {t('agriculture.intro.desc')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-container pb-24 border-b border-ecotech-grey/10">
                <div className="section-inner">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div ref={section1Ref} className={`glass-card p-10 group hover:border-ecotech-green/40 transition-all duration-700 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-ecotech-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Leaf size={32} className="text-ecotech-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-ecotech-grey mb-4">{t('agriculture.manure.title')}</h3>
                            <p className="text-ecotech-grey/80 mb-6 leading-relaxed">{t('agriculture.manure.desc')}</p>
                            <ul className="space-y-3 mb-8">
                                {manurePoints.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-ecotech-green shrink-0 mt-0.5" />
                                        <span className="text-ecotech-grey/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products" className="inline-flex items-center gap-2 text-ecotech-green font-medium group-hover:gap-4 transition-all duration-300">
                                {t('agriculture.findProduct')}
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div ref={section2Ref} className={`glass-card p-10 group hover:border-ecotech-green/40 transition-all duration-700 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-16 rounded-2xl bg-ecotech-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Factory size={32} className="text-ecotech-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-ecotech-grey mb-4">{t('agriculture.biogas.title')}</h3>
                            <p className="text-ecotech-grey/80 mb-6 leading-relaxed">{t('agriculture.biogas.desc')}</p>
                            <ul className="space-y-3 mb-8">
                                {biogasPoints.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-ecotech-green shrink-0 mt-0.5" />
                                        <span className="text-ecotech-grey/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products" className="inline-flex items-center gap-2 text-ecotech-green font-medium group-hover:gap-4 transition-all duration-300">
                                {t('agriculture.findProduct')}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-container py-24 lg:py-32 bg-[#f7f7f6]">
                <div className="section-inner text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">{t('agriculture.cta.title')}</h2>
                        <p className="text-xl text-ecotech-grey/80 mb-10">{t('agriculture.cta.desc')}</p>
                        <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-ecotech-green text-white px-8 py-4 rounded-lg font-medium hover:bg-ecotech-green/90 transition-all duration-300 shadow-xl shadow-ecotech-green/20">
                            {t('agriculture.cta.button')}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
