import { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ChurchLogo from './ChurchLogo';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  currentLang,
  setLang,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: TRANSLATIONS.navHome[currentLang] },
    { id: 'services', label: TRANSLATIONS.navServices[currentLang] },
    { id: 'ministries', label: TRANSLATIONS.navMinistries[currentLang] },
    { id: 'sermons', label: TRANSLATIONS.navSermons[currentLang] },
    { id: 'events', label: TRANSLATIONS.navEvents[currentLang] },
    { id: 'bible', label: TRANSLATIONS.navBible[currentLang] },
    { id: 'prayer', label: TRANSLATIONS.navPrayer[currentLang] },
    { id: 'about', label: TRANSLATIONS.navAbout[currentLang] },
    { id: 'give', label: TRANSLATIONS.navGive[currentLang] },
    { id: 'contact', label: TRANSLATIONS.navContact[currentLang] },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to element if it exists
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group text-left py-1"
            id="nav-logo"
          >
            <ChurchLogo size="md" showText={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-teal-900 bg-teal-50/90 font-semibold border-b-2 border-teal-600'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              id="lang-toggle-desktop"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors text-xs font-semibold cursor-pointer"
              title={currentLang === 'en' ? 'Switch to Chinese' : '切換為英文'}
            >
              <Globe className="h-4 w-4 text-stone-500" />
              <span>{currentLang === 'en' ? '繁中' : 'English'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-btn"
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 hover:text-stone-900 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-stone-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-teal-50 text-teal-950 font-semibold border-l-4 border-teal-600 pl-3'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-stone-100 px-4">
                <button
                  onClick={toggleLanguage}
                  id="lang-toggle-mobile"
                  className="flex items-center justify-between w-full px-4 py-3 bg-stone-50 rounded-xl text-stone-700 hover:bg-stone-100"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-stone-500" />
                    <span className="text-sm font-medium">
                      {currentLang === 'en' ? 'Switch to Traditional Chinese' : '切換至 繁體中文'}
                    </span>
                  </div>
                  <span className="text-xs bg-stone-200 text-stone-800 px-2 py-0.5 rounded font-bold uppercase">
                    {currentLang === 'en' ? '繁中' : 'EN'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
