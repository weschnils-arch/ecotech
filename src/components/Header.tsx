import { useState, useEffect } from 'react';
import { Link, useRouter } from '@/router';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { path } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pages without a dark hero need the solid header from the start,
  // otherwise white nav links sit on a white background.
  const isSolidRoute = ['/terms', '/privacy', '/imprint', '/dealers'].includes(path);
  const isSolid = isScrolled || isSolidRoute;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/' as const, label: t('nav.home') },
    { path: '/about' as const, label: t('nav.about') },
    { path: '/applications' as const, label: t('nav.applications') },
    { path: '/sales' as const, label: t('nav.sales') },
    { path: '/products' as const, label: t('nav.products') },
    { path: '/integration' as const, label: t('nav.integration') },
    { path: '/news' as const, label: t('nav.news') },
  ];

  const isActive = (itemPath: string) => path === itemPath;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
        ? 'bg-white border-b border-ecotech-grey-light/50 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo-signet.png"
              alt="EcoTech Logo"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isSolid ? 'text-ecotech-grey' : 'text-white'
                }`}>
                ecotech
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 -mt-0.5 ${isSolid ? 'text-ecotech-green' : 'text-white'
                }`}>
                styria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${isActive(item.path)
                  ? 'text-ecotech-green bg-ecotech-green/10'
                  : isSolid
                    ? 'text-ecotech-grey hover:text-ecotech-green hover:bg-ecotech-grey-light/50'
                    : 'text-white hover:text-ecotech-green hover:bg-white/10'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setLanguage('de')}
              className={`lang-switch ${language === 'de' ? 'active' : ''} ${!isSolid && language !== 'de' ? 'text-white hover:bg-white/10' : ''}`}
            >
              DE
            </button>
            <span className={`${isSolid ? 'text-ecotech-grey-light' : 'text-white/50'}`}>|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`lang-switch ${language === 'en' ? 'active' : ''} ${!isSolid && language !== 'en' ? 'text-white hover:bg-white/10' : ''}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isSolid ? 'text-ecotech-grey' : 'text-white'
              } hover:text-ecotech-green`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-glass shadow-glass-lg transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="section-container py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${isActive(item.path)
                ? 'text-ecotech-green bg-ecotech-green/10'
                : 'text-ecotech-grey hover:text-ecotech-green hover:bg-ecotech-grey-light/50'
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 px-4 pt-4 border-t border-ecotech-grey-light/50 mt-2">
            <span className="text-sm text-ecotech-grey">{t('nav.languageLabel')}</span>
            <button
              onClick={() => setLanguage('de')}
              className={`lang-switch ${language === 'de' ? 'active' : ''}`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`lang-switch ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
