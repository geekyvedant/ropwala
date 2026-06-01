import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function TermsConditions() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO title="Terms & Conditions - RopWala" description="Our terms and conditions." />
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-forest text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('nav.terms')}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-64 flex items-center justify-center">
             <p className="text-gray-500 text-lg">Content coming soon...</p>
        </div>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}
