import { useLanguage } from '@/context/LanguageContext';
import { SubpageHero } from '@/components/SubpageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail, Settings, Wrench, Package, Send, MessageSquare, Lightbulb } from 'lucide-react';
import { useState } from 'react';

// Find Partner Section
function FindPartnerSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const dealers = [
    { name: 'Farmtech d.o.o.', location: 'SLO', flag: '🇸🇮' },
    { name: 'IWZ GmbH', location: 'AUT', flag: '🇦🇹' },
    { name: 'Vanderloop Equipment', location: 'WI / USA', flag: '🇺🇸' },
  ];

  return (
    <section ref={ref} className="section-container pb-20 pt-12">
      <div className="section-inner">
        <div className="grid md:grid-cols-3 gap-6">
          {dealers.map((dealer, index) => (
            <div
              key={dealer.name}
              className={`glass-card p-8 text-center card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{dealer.flag}</div>
              <h3 className="text-xl font-bold text-ecotech-grey mb-2">{dealer.name}</h3>
              <span className="inline-block px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-sm rounded-full">
                {dealer.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Become Partner Section
function BecomePartnerSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihr Interesse! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-white">
      <div className="section-inner">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
              Partnerschaft
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ecotech-grey mb-6">
              {t('sales.becomePartner.title')}
            </h2>
            <p className="text-lg text-ecotech-grey/70 mb-8">
              Werden Sie Teil unseres globalen Vertriebsnetzwerks und profitieren Sie von unserer Expertise in der Separationstechnologie.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ecotech-green/10 flex items-center justify-center">
                  <Settings size={24} className="text-ecotech-green" />
                </div>
                <div>
                  <h4 className="font-bold text-ecotech-grey">Technische Schulung</h4>
                  <p className="text-sm text-ecotech-grey/60">Umfassende Produkt- und Anwendungsschulungen</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ecotech-green/10 flex items-center justify-center">
                  <Package size={24} className="text-ecotech-green" />
                </div>
                <div>
                  <h4 className="font-bold text-ecotech-grey">Marketing Support</h4>
                  <p className="text-sm text-ecotech-grey/60">Werbematerialien und Vertriebsunterstützung</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ecotech-green/10 flex items-center justify-center">
                  <Wrench size={24} className="text-ecotech-green" />
                </div>
                <div>
                  <h4 className="font-bold text-ecotech-grey">Service-Backup</h4>
                  <p className="text-sm text-ecotech-grey/60">Technischer Support und Ersatzteilverfügbarkeit</p>
                </div>
              </div>
            </div>
          </div>

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
                <label className="block text-sm font-medium text-ecotech-grey mb-2">Unternehmen</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                <label className="block text-sm font-medium text-ecotech-grey mb-2">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ecotech-grey mb-2">{t('form.message')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-ecotech-grey-light focus:border-ecotech-green focus:ring-2 focus:ring-ecotech-green/20 outline-none transition-all resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Unternehmen und Ihrer Region..."
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

// Spare Parts Section
function SparePartsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="section-container py-24 lg:py-32">
      <div className="section-inner">
        <div className={`glass-card p-8 lg:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-ecotech-green/10 flex items-center justify-center flex-shrink-0">
                <Package size={32} className="text-ecotech-green" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-ecotech-grey mb-3">
                  {t('sales.spareparts.title')}
                </h2>
                <p className="text-lg text-ecotech-grey/70 max-w-2xl">
                  {t('sales.spareparts.desc')}
                </p>
              </div>
            </div>
            <a
              href="mailto:office@ecotechstyria.com?subject=Ersatzteilanfrage"
              className="btn-primary whitespace-nowrap"
            >
              <Mail size={18} />
              Anfrage stellen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Section
function ServiceSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const services = [
    { title: 'Wartung', desc: 'Regelmäßige Inspektion und Wartung Ihrer Anlagen', icon: Settings },
    { title: 'Reparatur', desc: 'Schnelle und zuverlässige Reparaturleistungen', icon: Wrench },
    { title: 'Technische Beratung', desc: 'Expertenwissen für Ihre Separationprozesse', icon: MessageSquare },
    { title: 'Inbetriebnahme', desc: 'Professionelle Installation und Einweisung', icon: Lightbulb },
  ];

  return (
    <section ref={ref} className="section-container py-24 lg:py-32 bg-ecotech-grey text-white">
      <div className="section-inner">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('sales.service.title')}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('sales.service.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-card-dark p-6 transition-all duration-700 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-ecotech-green/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-ecotech-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <a
            href="tel:+43314470477"
            className="inline-flex items-center gap-2 bg-ecotech-green text-white px-8 py-4 rounded-lg font-medium hover:bg-ecotech-green-dark transition-all duration-300"
          >
            <Phone size={18} />
            +43 3144 / 70477
          </a>
        </div>
      </div>
    </section>
  );
}

// Main SalesPage Component
export function SalesPage() {
  const { t } = useLanguage();

  return (
    <main>
      <SubpageHero
        title={t('sales.findPartner.title')}
        subtitle={t('sales.findPartner.desc')}
        image="/images/hero-sales-v2.webp"
        imagePosition="object-top"
      />
      <BecomePartnerSection />
      <FindPartnerSection />
      <SparePartsSection />
      <ServiceSection />
    </main>
  );
}
