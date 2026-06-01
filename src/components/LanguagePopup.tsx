import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export default function LanguagePopup() {
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSelected = localStorage.getItem('language_selected');
    if (!hasSelected) {
      setIsOpen(true);
    }
  }, []);

  const handleSelect = (lang: 'en' | 'mr' | 'hi' | 'kn') => {
    setLanguage(lang);
    localStorage.setItem('language_selected', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center"
          >
            <h2 className="text-2xl font-bold text-forest mb-6">
              Choose Your Language<br/>
              <span className="text-lg text-gray-500 font-medium mt-1 block">तुमची भाषा निवडा</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => handleSelect('mr')} className="p-4 rounded-xl border-2 border-lime/30 hover:border-lime hover:bg-lime/10 font-bold text-forest transition-colors text-lg">मराठी</button>
              <button onClick={() => handleSelect('en')} className="p-4 rounded-xl border-2 border-lime/30 hover:border-lime hover:bg-lime/10 font-bold text-forest transition-colors text-lg">English</button>
              <button onClick={() => handleSelect('hi')} className="p-4 rounded-xl border-2 border-lime/30 hover:border-lime hover:bg-lime/10 font-bold text-forest transition-colors text-lg">हिंदी</button>
              <button onClick={() => handleSelect('kn')} className="p-4 rounded-xl border-2 border-lime/30 hover:border-lime hover:bg-lime/10 font-bold text-forest transition-colors text-lg">ಕನ್ನಡ</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
