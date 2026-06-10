import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Award } from 'lucide-react';
import SEO from '../components/SEO';

import logoImg from '../assets/logo.png';


export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO title="About Us - RopWala" description="Learn about RopWala and our mission to build agri-entrepreneurs." />
      <Navbar />

      <main className="flex-grow">
        <div className="bg-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('about.desc')}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center mb-20">
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={logoImg}
                alt="RopWala Logo"
                className="h-70 w-auto object-contain mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-forest">{t('aboutPage.ourStory')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutPage.story1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutPage.story2')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-forest">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutPage.missionTitle')}</h3>
              <p className="text-gray-600">{t('aboutPage.missionDesc')}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-forest">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutPage.visionTitle')}</h3>
              <p className="text-gray-600">{t('aboutPage.visionDesc')}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-forest">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutPage.valuesTitle')}</h3>
              <p className="text-gray-600">{t('aboutPage.valuesDesc')}</p>
            </div>
          </div>

          <div className="mt-24 mb-10 text-center">
            <h2 className="text-3xl font-bold text-forest mb-12">{t('aboutPage.ourFounders')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <img
                  src="https://picsum.photos/seed/hanmant/400/400"
                  alt="Hanmant Dhole"
                  className="w-48 h-48 rounded-full shadow-lg object-cover mb-4 border-4 border-gray-100"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-bold text-gray-900">Hanmant Dhole</h3>
                <p className="text-forest font-medium">{t('aboutPage.founder')}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://picsum.photos/seed/santosh/400/400"
                  alt="Santosh Mane"
                  className="w-48 h-48 rounded-full shadow-lg object-cover mb-4 border-4 border-gray-100"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-bold text-gray-900">Santosh Mane</h3>
                <p className="text-forest font-medium">{t('aboutPage.founder')}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://picsum.photos/seed/rushikesh/400/400"
                  alt="Rushikesh Patil"
                  className="w-48 h-48 rounded-full shadow-lg object-cover mb-4 border-4 border-gray-100"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-bold text-gray-900">Rushikesh Patil</h3>
                <p className="text-forest font-medium">{t('aboutPage.founder')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}
