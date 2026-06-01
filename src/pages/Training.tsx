import { Grid, Sprout, Droplets, Sun, Shield, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';

export default function Training() {
  const { t } = useLanguage();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const images = [
    "https://picsum.photos/seed/nursery1/800/600",
    "https://picsum.photos/seed/nursery2/800/600",
    "https://picsum.photos/seed/nursery3/800/600",
  ];

  const curriculumIcons = [Grid, Sprout, Droplets, Sun, Shield, Users];
  const curriculumColors = [
    "bg-blue-50 text-blue-600 border-blue-100",
    "bg-green-50 text-green-600 border-green-100",
    "bg-amber-50 text-amber-600 border-amber-100",
    "bg-orange-50 text-orange-600 border-orange-100",
    "bg-red-50 text-red-600 border-red-100",
    "bg-purple-50 text-purple-600 border-purple-100"
  ];

  const curriculumItems = t('trainingPage.curriculum') || [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('training.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('training.desc')}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Carousel Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-forest mb-8 text-center">{t('trainingPage.title')}</h2>
            <div className="overflow-hidden rounded-3xl shadow-xl" ref={emblaRef}>
              <div className="flex">
                {images.map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[600px]" key={index}>
                    <img src={src} alt={`Training Facility ${index + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curriculum Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumItems.map((item: any, idx: number) => {
              const Icon = curriculumIcons[idx % curriculumIcons.length];
              const colorClass = curriculumColors[idx % curriculumColors.length];
              return (
                <div key={idx} className={`p-8 bg-white rounded-3xl border ${colorClass} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-sm">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/booking" className="inline-flex items-center gap-2 bg-marigold hover:bg-yellow text-forest font-bold text-xl px-10 py-5 rounded-full shadow-xl transition-all transform hover:-translate-y-1">
              {t('nav.book')} <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}
