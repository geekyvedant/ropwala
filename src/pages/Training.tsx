import { Grid, Sprout, Droplets, Sun, Shield, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// 2. Import Gallery / Sessions Images
import session1 from '../assets/sessions/session1.jpg';
import session2 from '../assets/sessions/session2.jpg';
import session3 from '../assets/sessions/session3.jpg';
import session4 from '../assets/sessions/session4.jpeg';
import session5 from '../assets/sessions/session5.jpeg';
import session6 from '../assets/sessions/session6.jpeg';
import session7 from '../assets/sessions/session7.jpeg';
import session8 from '../assets/sessions/session8.jpeg';
import session9 from '../assets/sessions/session9.jpeg';
import session10 from '../assets/sessions/session10.jpeg';
import session11 from '../assets/sessions/session11.jpeg';
import session12 from '../assets/sessions/session12.jpeg';
import session13 from '../assets/sessions/session13.jpeg';
import session14 from '../assets/sessions/session14.jpeg';
import session15 from '../assets/sessions/session15.jpeg';
import session16 from '../assets/sessions/session16.jpeg';
import session17 from '../assets/sessions/session17.jpeg';
import session18 from '../assets/sessions/session18.jpeg';

export default function Training() {
  const { t } = useLanguage();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const carouselItems = [
    { type: 'image' as const, src: session1, alt: 'Nursery View 1' },
    { type: 'image' as const, src: session2, alt: 'Nursery View 2' },
    { type: 'image' as const, src: session3, alt: 'Nursery View 3' },
    { type: 'image' as const, src: session4, alt: 'Nursery View 4' },
    { type: 'image' as const, src: session5, alt: 'Nursery View 5' },
    { type: 'image' as const, src: session6, alt: 'Nursery View 6' },
    { type: 'image' as const, src: session7, alt: 'Nursery View 7' },
    { type: 'image' as const, src: session8, alt: 'Nursery View 8' },
    { type: 'image' as const, src: session9, alt: 'Nursery View 9' },
    { type: 'image' as const, src: session10, alt: 'Nursery View 10' },
    { type: 'image' as const, src: session11, alt: 'Nursery View 11' },
    { type: 'image' as const, src: session12, alt: 'Nursery View 12' },
    { type: 'image' as const, src: session13, alt: 'Nursery View 13' },
    { type: 'image' as const, src: session14, alt: 'Nursery View 14' },
    { type: 'image' as const, src: session15, alt: 'Nursery View 15' },
    { type: 'image' as const, src: session16, alt: 'Nursery View 16' },
    { type: 'image' as const, src: session17, alt: 'Nursery View 17' },
    { type: 'image' as const, src: session18, alt: 'Nursery View 18' },

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
      <SEO title="Training Details - RopWala" description="Comprehensive curriculum covering everything from seed to sale." />
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
                {/* Destructured src and alt from the new item object structure */}
                {carouselItems.map(({ src, alt }, index) => (
                  <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[600px]" key={index}>
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
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
