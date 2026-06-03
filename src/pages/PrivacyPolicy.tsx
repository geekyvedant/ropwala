import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO title="Privacy Policy - RopWala" description="Our privacy practices and information handling policies." />
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-forest text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('privacyPolicy.title')}</h1>
            {/* <p className="text-gray-300">{t('privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString()}</p> */}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.introTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyPolicy.introText')}
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.collectTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyPolicy.collectText')}
              </p>
            </section>

            {/* 3. How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.useTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyPolicy.useText')}
              </p>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.securityTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyPolicy.securityText')}
              </p>
            </section>

            {/* 5. Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.contactTitle')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacyPolicy.contactText')}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">{t('privacyPolicy.company')}</p>
                <p className="text-gray-600 mt-2">{t('privacyPolicy.address')}</p>
                <p className="text-gray-600 mt-2 font-medium text-forest">{t('privacyPolicy.email')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}
