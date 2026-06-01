import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest text-white relative overflow-hidden">
      {/* Subtle leaf/circuit watermark effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://astroraajpatil.in/music/logo.svg" alt="RopWala Logo" className="h-8" />
              <span className="font-bold text-xl tracking-tight">RopWala Agri Pvt. Ltd.</span>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-lime">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.training')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">{t('privacyPolicy.title')}</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.terms')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-lime">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-marigold shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">RopWala Training Center, Ashta, Sangli, Maharashtra 416301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-marigold shrink-0" />
                <a href="tel:+919130811266" className="text-gray-300 hover:text-white text-sm transition-colors">+91 91308 11266</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-marigold shrink-0" />
                <a href="mailto:info@ropwala.com" className="text-gray-300 hover:text-white text-sm transition-colors">info@ropwala.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} RopWala Agri Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
