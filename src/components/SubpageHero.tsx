
import { Link } from '@/router';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SubpageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
    imagePosition?: string;
    cuttingStyle?: 'diagonal-bottom' | 'wave-bottom' | 'none'; // Future-proofing
}

export function SubpageHero({
    title,
    subtitle,
    image,
    ctaText,
    ctaLink,
    imagePosition,
}: SubpageHeroProps) {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-12 border-none ring-0 outline-none">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 bg-[#282F2D]">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover ${imagePosition || 'object-right'}`}
                    />
                    {/* Dark overlay for text readability and fading hard edges into the solid color */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#282F2D] via-[#282F2D]/80 to-transparent/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#282F2D] via-transparent to-transparent hidden md:block w-3/4" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                </div>
            </div>

            {/* Shapes / Cutting Effect */}

            {/* Glow Effect Line */}
            <div
                className="absolute -bottom-[2px] left-0 right-0 h-24 lg:h-32 z-[9] pointer-events-none blur-sm"
                style={{
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                    transform: 'translateY(-3px)',
                    background: 'linear-gradient(90deg, transparent 0%, #62a731 20%, #62a731 80%, transparent 100%)',
                    filter: 'brightness(1.5)'
                }}
            />

            <div
                className="absolute -bottom-[2px] left-0 right-0 h-24 lg:h-32 bg-white z-10"
                style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
            />

            {/* Content */}
            <div ref={ref} className="relative z-20 section-container w-full pt-20 pb-20">
                <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block px-4 py-2 bg-ecotech-green/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/10">
                        EcoTech Styria
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-sm">
                            {subtitle}
                        </p>
                    )}

                    {ctaText && ctaLink && (
                        <Link to={ctaLink as any} className="btn-primary group">
                            {ctaText}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
