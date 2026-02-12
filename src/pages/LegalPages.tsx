import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

// Terms Page
export function TermsPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.terms.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">1. Geltungsbereich</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen der EcoTech Styria GmbH an ihre Kunden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">2. Vertragsschluss</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Ausführung des Auftrags zustande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">3. Preise und Zahlungsbedingungen</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Alle Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">4. Lieferung</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Liefertermine werden nach bestem Wissen angegeben, sind jedoch unverbindlich, sofern nicht ausdrücklich als verbindlich vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">5. Gewährleistung</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Die Gewährleistungsfrist beträgt 12 Monate ab Übergabe der Ware. Für gebrauchte Ware wird keine Gewährleistung übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">6. Haftung</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine vertragswesentlichen Pflichten verletzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">7. Eigentumsvorbehalt</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum der EcoTech Styria GmbH.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">8. Gerichtsstand</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Gerichtsstand ist Graz. Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

// Privacy Page
export function PrivacyPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Datenschutz
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.privacy.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Verantwortlicher</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                EcoTech Styria GmbH<br />
                Judenburgerstraße 176<br />
                A-8580 Köflach, Österreich<br />
                E-Mail: office@ecotechstyria.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Dienstleistungen erforderlich ist. Dies umfasst Kontaktdaten für Anfragen und Bestellungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Zweck der Datenverarbeitung</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Die erhobenen Daten werden verwendet zur Bearbeitung von Anfragen, Auftragsabwicklung, sowie zur Kommunikation mit unseren Kunden und Partnern.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Rechtsgrundlage</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 DSGVO (Vertragserfüllung, berechtigtes Interesse, Einwilligung).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Datensicherheit</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder Zugriff unberechtigter Personen zu schützen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Ihre Rechte</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns unter office@ecotechstyria.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ecotech-grey mb-4">Cookies</h2>
              <p className="text-ecotech-grey/70 leading-relaxed">
                Unsere Website verwendet Cookies ausschließlich zur technischen Funktionsfähigkeit. Es werden keine Tracking-Cookies eingesetzt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

// Imprint Page
export function ImprintPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-12">
            {t('legal.imprint.title')}
          </h1>

          <div className="glass-card p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-ecotech-grey mb-6">Unternehmensdaten</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-ecotech-grey">EcoTech Styria GmbH</p>
                    <div className="flex items-start gap-3 mt-2">
                      <MapPin size={18} className="mt-1 flex-shrink-0 text-ecotech-green" />
                      <div className="text-ecotech-grey/70">
                        <p>Judenburgerstraße 176</p>
                        <p>A-8580 Köflach, Österreich</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="tel:+43314470477" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      +43 3144 / 70477
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="mailto:office@ecotechstyria.com" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      office@ecotechstyria.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe size={18} className="flex-shrink-0 text-ecotech-green" />
                    <a href="https://www.ecotechstyria.com" target="_blank" rel="noopener noreferrer" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                      www.ecotechstyria.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-ecotech-grey mb-6">Rechtliche Informationen</h2>
                <div className="space-y-4 text-ecotech-grey/70">
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Geschäftsführung</p>
                    <p className="font-medium text-ecotech-grey">Ing. Gernot Pauger</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">UID-Nummer</p>
                    <p>ATU 81341004</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Firmenbuchnummer</p>
                    <p>FN 513783 p</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Firmenbuchgericht</p>
                    <p>Landesgericht für Zivilrechtssachen Graz</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Mitglied bei</p>
                    <p>WKO Steiermark</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Behörde gem. ECG</p>
                    <p>Bezirkshauptmannschaft Voitsberg</p>
                  </div>
                  <div>
                    <p className="text-sm text-ecotech-grey/50">Berufsbezeichnung</p>
                    <p>Mechatroniker für Maschinen- und Fertigungstechnik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Dealers Page
export function DealersPage() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const dealers = [
    {
      name: 'Farmtech d.o.o.',
      location: 'Slowenien',
      flag: '🇸🇮',
      address: 'Industrijska cesta 1, 2000 Maribor',
      phone: '+386 2 461 0000',
      email: 'info@farmtech.si',
      website: 'www.farmtech.si',
    },
    {
      name: 'IWZ GmbH',
      location: 'Österreich',
      flag: '🇦🇹',
      address: 'Industriestraße 10, 4020 Linz',
      phone: '+43 732 123456',
      email: 'office@iwz.at',
      website: 'www.iwz.at',
    },
    {
      name: 'Vanderloop Equipment',
      location: 'USA',
      flag: '🇺🇸',
      address: '1234 Industrial Drive, Milwaukee, WI 53201',
      phone: '+1 414 555 0123',
      email: 'sales@vanderloopequip.com',
      website: 'www.vanderloopequip.com',
    },
  ];

  return (
    <main className="section-container pt-32 pb-24">
      <div className="section-inner max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-ecotech-green font-medium text-sm uppercase tracking-wider mb-4 block">
            Vertrieb
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ecotech-grey mb-6">
            {t('legal.dealers.title')}
          </h1>
          <p className="text-xl text-ecotech-grey/70 mb-12 max-w-3xl">
            Unsere autorisierten Vertriebspartner stehen Ihnen für Beratung, Verkauf und Service vor Ort zur Verfügung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map((dealer, index) => (
            <div
              key={dealer.name}
              className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{dealer.flag}</span>
                <span className="px-3 py-1 bg-ecotech-green/10 text-ecotech-green text-sm rounded-full">
                  {dealer.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ecotech-grey mb-4">{dealer.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-ecotech-green" />
                  <span className="text-ecotech-grey/70">{dealer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                    {dealer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`mailto:${dealer.email}`} className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                    {dealer.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink size={16} className="flex-shrink-0 text-ecotech-green" />
                  <a href={`https://${dealer.website}`} target="_blank" rel="noopener noreferrer" className="text-ecotech-grey/70 hover:text-ecotech-green transition-colors">
                    {dealer.website}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 glass-card p-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '450ms' }}>
          <p className="text-ecotech-grey/70 mb-4">
            Möchten Sie ebenfalls Vertriebspartner werden?
          </p>
          <Link
            to="/sales"
            className="inline-flex items-center gap-2 text-ecotech-green font-medium hover:gap-4 transition-all duration-300"
          >
            Mehr erfahren
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
