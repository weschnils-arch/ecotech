import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SubpageHero } from '@/components/SubpageHero';

import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { useState } from 'react';

// Introduction Section
function IntroSection() {
  const { t } = useLanguage();

  return (
    <SubpageHero
      title={t('aboutpage.intro.title')}
      subtitle={t('about.description')}
      image="/images/hero-bg.jpg"
    />
  );
}

// Vision & Mission Section
function VisionSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-20 bg-gradient-to-b from-white to-ecotech-grey-light/20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 lg:p-12">
            <div className="w-14 h-14 rounded-xl bg-ecotech-green/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-ecotech-green">V</span>
            </div>
            <h3 className="text-sm font-medium text-ecotech-grey/60 uppercase tracking-wider mb-3">
              {t('aboutpage.vision.label')}
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-ecotech-grey">
              {t('aboutpage.vision.text')}
            </p>
          </div>

          <div className="glass-card p-8 lg:p-12">
            <div className="w-14 h-14 rounded-xl bg-ecotech-green/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-ecotech-green">S</span>
            </div>
            <h3 className="text-sm font-medium text-ecotech-grey/60 uppercase tracking-wider mb-3">
              {t('aboutpage.slogan.label')}
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-ecotech-green">
              {t('aboutpage.slogan.text')}
            </p>
          </div>

          <div className="lg:col-span-2 glass-card p-8 lg:p-12">
            <div className="w-14 h-14 rounded-xl bg-ecotech-green/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-ecotech-green">M</span>
            </div>
            <h3 className="text-sm font-medium text-ecotech-grey/60 uppercase tracking-wider mb-3">
              {t('aboutpage.mission.label')}
            </h3>
            <p className="text-xl lg:text-2xl text-ecotech-grey leading-relaxed">
              {t('aboutpage.mission.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const team = [
    { key: 'ceo', image: '/images/team-ceo.jpg' },
    { key: 'coo', image: '/images/team-coo.jpg' },
    { key: 'cto', image: '/images/team-cto.jpg' },
    { key: 'cso', image: '/images/team-cso.jpg' },
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ecotech-grey">
            {t('aboutpage.team.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.key}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.image}
                  alt={t(`aboutpage.team.${member.key}.name`)}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ecotech-grey/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold text-ecotech-grey mb-1">
                {t(`aboutpage.team.${member.key}.name`)}
              </h3>
              <p className="text-ecotech-green font-medium mb-3">
                {t(`aboutpage.team.${member.key}.role`)}
              </p>
              <p className="text-sm text-ecotech-grey/60 leading-relaxed">
                {t(`aboutpage.team.${member.key}.bio`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-grey-light/20">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Info */}
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-8">
              {t('aboutpage.contact.title')}
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <p className="font-bold text-ecotech-grey text-lg mb-4">EcoTech Styria GmbH</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-ecotech-green" />
                    <div className="text-ecotech-grey/70">
                      <p>Judenburgerstraße 176</p>
                      <p>A-8580 Köflach, Österreich</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="flex-shrink-0 text-ecotech-green" />
                    <a href="tel:+43314470477" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      +43 3144 / 70477
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="flex-shrink-0 text-ecotech-green" />
                    <a href="mailto:office@ecotechstyria.com" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      office@ecotechstyria.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="flex-shrink-0 text-ecotech-green" />
                    <a href="https://www.ecotechstyria.com" target="_blank" rel="noopener noreferrer" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      www.ecotechstyria.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ecotech-grey mb-2">{t('form.name')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ecotech-grey mb-2">{t('form.email')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ecotech-grey mb-2">{t('form.subject')}</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ecotech-grey mb-2">{t('form.message')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={18} />
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Standort
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey">
            {t('aboutpage.location.title')}
          </h2>
        </div>

        <div className={`glass-card overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.789123456789!2d15.0833!3d47.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA0JzAwLjAiTiAxNcKwMDUnMDAuMCJF!5e0!3m2!1sde!2sat!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EcoTech Styria Location"
          />
        </div>
      </div>
    </section>
  );
}

// Careers Section
function CareersSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-green text-white">
      <div className="section-inner">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('aboutpage.careers.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('aboutpage.careers.text')}
          </p>
          <a
            href="mailto:office@ecotechstyria.com"
            className="inline-flex items-center gap-2 bg-white text-ecotech-green px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300"
          >
            <Mail size={18} />
            {t('form.sendApplication')}
          </a>
        </div>
      </div>
    </section>
  );
}

// Main AboutPage Component
export function AboutPage() {
  return (
    <main>
      <IntroSection />
      <VisionSection />
      <TeamSection />
      <ContactSection />
      <LocationSection />
      <CareersSection />
    </main>
  );
}
