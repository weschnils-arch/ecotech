import { Link } from '@/router';
import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Leaf, Factory, CheckCircle2 } from 'lucide-react';

export function AgriculturePage() {
    const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation<HTMLDivElement>();
    const { ref: section2Ref, isVisible: section2Visible } = useScrollAnimation<HTMLDivElement>();

    return (
        <main>
            <SubpageHero
                title="Landwirtschaft"
                subtitle="Effiziente Separationstechnologie für Gülle von Nutztieren und Gärreste aus Biogasanlagen."
                image="/images/hero-agriculture-higgs.png"
                imagePosition="object-[95%_center]"
            />

            {/* Intro Section */}
            <section className="section-container py-20 bg-white">
                <div className="section-inner">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-ecotech-grey mb-6">
                            Maßgeschneiderte Lösungen für die <span className="text-ecotech-green">Landwirtschaft</span>
                        </h2>
                        <p className="text-lg text-ecotech-grey/90 leading-relaxed mb-8">
                            In der modernen Landwirtschaft ist der effiziente Umgang mit Nährstoffen und Abfallprodukten entscheidend für Produktivität und Nachhaltigkeit. Unsere EcoTech Filterschneckenpressen bieten bewährte, robuste und hochgradig effiziente Lösungen für die Trennung von festen und flüssigen Bestandteilen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section-container pb-24 border-b border-ecotech-grey/10">
                <div className="section-inner">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Gülle von Nutztieren */}
                        <div
                            ref={section1Ref}
                            className={`glass-card p-10 group hover:border-ecotech-green/40 transition-all duration-700 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-ecotech-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Leaf size={32} className="text-ecotech-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-ecotech-grey mb-4">Gülle von Nutztieren</h3>
                            <p className="text-ecotech-grey/80 mb-6 leading-relaxed">
                                Die Separation von Rinder- oder Schweinegülle reduziert das Lagervolumen der flüssigen Phase signifikant. Der gewonnene Feststoff eignet sich hervorragend als Dünger, während die flüssige Phase leichter auf die Felder ausgebracht werden kann.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Volumenreduktion um bis zu 30%', 'Leichtere Ausbringung der dünnen Phase', 'Geruchsminderung', 'Feststoff als hochwertiger Kompost oder Einstreu nutzbar'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-ecotech-green shrink-0 mt-0.5" />
                                        <span className="text-ecotech-grey/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products" className="inline-flex items-center gap-2 text-ecotech-green font-medium group-hover:gap-4 transition-all duration-300">
                                Passendes Produkt finden
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Gärreste aus Biogasanlagen */}
                        <div
                            ref={section2Ref}
                            className={`glass-card p-10 group hover:border-ecotech-green/40 transition-all duration-700 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-ecotech-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Factory size={32} className="text-ecotech-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-ecotech-grey mb-4">Gärreste aus Biogasanlagen</h3>
                            <p className="text-ecotech-grey/80 mb-6 leading-relaxed">
                                Biogasanlagen profitieren massiv von einer effizienten Separierung der Gärreste. Dies verbessert die Nährstofflogistik, verringert Transportkosten und optimiert den weiteren Betriebsablauf.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Optimierung der Nährstofflogistik', 'Reduzierung von Transport- und Lagerkosten', 'Homogenere flüssige Phase für besseres Handling', 'Verkaufsfähiger Festdünger'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-ecotech-green shrink-0 mt-0.5" />
                                        <span className="text-ecotech-grey/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products" className="inline-flex items-center gap-2 text-ecotech-green font-medium group-hover:gap-4 transition-all duration-300">
                                Passendes Produkt finden
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container py-24 lg:py-32 bg-[#f7f7f6]">
                <div className="section-inner text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
                            Sind Sie bereit für die Separation der nächsten Generation?
                        </h2>
                        <p className="text-xl text-ecotech-grey/80 mb-10">
                            Kontaktieren Sie uns für eine kostenlose technische Beratung und finden Sie heraus, wie unsere Filterschneckenpressen Ihren Betrieb optimieren können.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-ecotech-green text-white px-8 py-4 rounded-lg font-medium hover:bg-ecotech-green/90 transition-all duration-300 shadow-xl shadow-ecotech-green/20">
                                Beratungstermin vereinbaren
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
