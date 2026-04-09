import { Link } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, Globe, MapPin, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { path: '/terms' as const, label: t('footer.terms') },
    { path: '/privacy' as const, label: t('footer.privacy') },
    { path: '/imprint' as const, label: t('footer.legal') },
    { path: '/dealers' as const, label: t('footer.dealers') },
  ];

  return (
    <footer className="bg-ecotech-grey text-white">
      {/* Green accent line with fade effect */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ecotech-green to-transparent opacity-80" />
      {/* Main Footer */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="EcoTech Styria"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <div className="space-y-3 text-white/80">
              <p className="font-medium text-white">EcoTech Styria GmbH</p>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-ecotech-green" />
                <div>
                  <p>Judenburgerstraße 176</p>
                  <p>A-8580 Köflach, Österreich</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-ecotech-green" />
                <a href="tel:+43314470477" className="hover:text-ecotech-green transition-colors">
                  +43 3144 / 70477
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-ecotech-green" />
                <a href="mailto:office@ecotechstyria.com" className="hover:text-ecotech-green transition-colors">
                  office@ecotechstyria.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="flex-shrink-0 text-ecotech-green" />
                <a href="https://www.ecotechstyria.com" target="_blank" rel="noopener noreferrer" className="hover:text-ecotech-green transition-colors">
                  www.ecotechstyria.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.social')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  <Youtube size={20} />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-ecotech-green transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  {t('nav.applications')}
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  {t('nav.sales')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-ecotech-green transition-colors duration-300">
                  {t('nav.news')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} EcoTech Styria GmbH. {t('footer.rights')}</p>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="EcoTech Styria"
                className="h-6 w-auto brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
