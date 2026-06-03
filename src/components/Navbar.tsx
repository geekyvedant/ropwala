import { Menu, Phone, Globe } from 'lucide-react';
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
// Imported the local logo from the assets directory
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as any);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImg} alt="RopWala Logo" className="h-10 w-auto object-contain" />
              <span className="font-bold text-2xl text-forest tracking-tight">RopWala</span>
            </Link>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-forest font-medium transition-colors">{t('nav.home')}</Link>
            <Link to="/training" className="text-gray-700 hover:text-forest font-medium transition-colors">{t('nav.training')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-forest font-medium transition-colors">{t('nav.about')}</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-forest font-medium transition-colors">{t('nav.reviews')}</Link>
            <Link to="/privacy-policy" className="text-gray-700 hover:text-forest font-medium transition-colors">{t('privacyPolicy.title')}</Link>
          </div>

          {/* Right: CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
              <Globe size={16} className="text-gray-500" />
              <select 
                value={language} 
                onChange={handleLanguageChange}
                className="bg-transparent border-none text-sm font-medium text-gray-700 focus:ring-0 cursor-pointer outline-none"
              >
                <option value="en">EN</option>
                <option value="mr">MR</option>
                <option value="hi">HI</option>
                <option value="kn">KN</option>
              </select>
            </div>
            <a href="tel:+919130811266" className="flex items-center gap-2 text-forest font-semibold hover:text-lime transition-colors">
              <Phone size={20} />
              <span>{t('nav.call')}</span>
            </a>
            <Link to="/booking" className="bg-marigold hover:bg-yellow text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              {t('nav.book')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full border border-gray-200">
              <Globe size={14} className="text-gray-500" />
              <select 
                value={language} 
                onChange={handleLanguageChange}
                className="bg-transparent border-none text-xs font-medium text-gray-700 focus:ring-0 cursor-pointer outline-none"
              >
                <option value="en">EN</option>
                <option value="mr">MR</option>
                <option value="hi">HI</option>
                <option value="kn">KN</option>
              </select>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-forest hover:text-lime focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/training" className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.training')}</Link>
            <Link to="/about" className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</Link>
            <Link to="/reviews" className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.reviews')}</Link>
            <Link to="/privacy-policy" className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>{t('privacyPolicy.title')}</Link>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link to="/booking" className="w-full text-center bg-marigold text-white px-6 py-3 rounded-full font-bold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.book')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}