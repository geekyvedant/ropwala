import { useState } from 'react';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const message = encodeURIComponent("I'm interested in the Ashta Training. Can I get more details?");
  const whatsappUrl = `https://wa.me/919130811266?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-4"
          >
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
            >
              <span className="font-semibold text-gray-700 group-hover:text-[#25D366]">WhatsApp</span>
              <div className="bg-[#25D366] text-white p-2 rounded-full">
                <MessageCircle size={20} />
              </div>
            </a>
            <a 
              href="tel:+919130811266" 
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
            >
              <span className="font-semibold text-gray-700 group-hover:text-forest">Call Us</span>
              <div className="bg-forest text-white p-2 rounded-full">
                <Phone size={20} />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-marigold text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Contact Options"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
