import { ArrowRight, BookOpen, Briefcase, Award, Grid, Sprout, Droplets, Sun, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import Carousel from '../components/Carousel';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

// 1. Import Banners
import banner1 from '../assets/banners/banner1.png';
// import banner2 from '../assets/banners/banner2.jpg';
// import banner3 from '../assets/banners/banner3.jpg';

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

interface FeatureItem {
  title: string;
  desc: string;
}

interface ReviewItem {
  name: string;
  text: string;
}

export default function Home() {
  const { t } = useLanguage();

  // Reference the imported variables directly
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO />
      <Navbar />

      <main className="flex-grow">

        {/* E-commerce Banner Carousel Section */}
        <section className="bg-forest pt-4 pb-4 px-4 md:px-8">
          <Carousel
            /* Reference the imported variables directly */
            items={[
              { type: 'image' as const, src: banner1, alt: 'Next Batch Admission Open' },
              // { type: 'image' as const, src: banner2, alt: 'Modern Nursery Training' },
              // { type: 'image' as const, src: banner3, alt: 'Learn from Experts' },
            ]}
            className="relative w-full h-[140px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-2xl shadow-sm md:shadow-lg group mx-auto max-w-7xl"
          />
        </section>

        {/* Unified Hero Text / Action Block */}
        <section className="relative w-full py-12 md:py-16 flex items-center justify-center bg-gray-50">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-forest mb-6 leading-tight drop-shadow-lg">
                {t('hero.title1')} <br className="hidden md:block" />
                <span className="text-marigold">{t('hero.title2')}</span>
              </h1>
              <p className="text-base md:text-lg text-forest mb-8 max-w-2xl mx-auto font-medium drop-shadow-md">
                {t('hero.desc')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="w-full sm:w-auto bg-marigold hover:bg-yellow text-forest font-bold text-base px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {t('hero.viewBatch')} <ArrowRight size={20} />
                </Link>
                <a
                  href="#brochure"
                  className="w-full sm:w-auto bg-forest hover:bg-darkmint backdrop-blur-md text-white border border-white/30 font-bold text-base px-8 py-3.5 rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {t('hero.download')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-forest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('about.title')}</h2>
              <p className="text-gray-100 max-w-2xl mx-auto">{t('about.desc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {(t('features') as FeatureItem[]).map((feature: FeatureItem, idx: number) => {
                const icons = [BookOpen, Briefcase, Award];
                const Icon = icons[idx];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-lime/20 rounded-xl flex items-center justify-center mb-6 text-forest">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Link to="/about" className="inline-flex items-center gap-2 text-marigold font-bold hover:text-white transition-colors">
                {t('about.readMore')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Curriculum Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">{t('training.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('training.desc')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(t('curriculum') as string[]).map((item: string, idx: number) => {
                const icons = [Grid, Sprout, Droplets, Sun, Shield, Users];
                const colors = ["bg-blue-50 text-blue-600", "bg-green-50 text-green-600", "bg-amber-50 text-amber-600", "bg-orange-50 text-orange-600", "bg-red-50 text-red-600", "bg-purple-50 text-purple-600"];
                const Icon = icons[idx];
                return (
                  <div key={idx} className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-lime transition-colors group">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colors[idx]} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">{item}</h3>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link to="/training" className="inline-flex items-center gap-2 text-forest font-bold hover:text-lime transition-colors">
                {t('training.readMore')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-forest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('gallery.title') || 'Our Facilities'}</h2>
              <p className="text-gray-100 max-w-2xl mx-auto">{t('gallery.desc') || 'Take a look at our state-of-the-art nursery and training center.'}</p>
            </div>
            <Carousel items={carouselItems} />
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-forest mb-2">{t('reviews.title')}</h2>
            <p className="text-gray-600 mb-8 font-medium">
              {t('reviews.readMore')}
            </p>

            {/* Video Reviews Layout embedded on Home Page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-12">
              {[
                'https://www.youtube.com/embed/sZrOnWJHvX0',
                'https://www.youtube.com/embed/x2bIkVNz5fc',
                'https://www.youtube.com/embed/zy1BrdbXL04',
              ].map((video, index) => (
                <div
                  key={index}
                  className="w-full max-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <iframe
                      src={`${video}?rel=0&modestbranding=1`}
                      title={`Student Video Review ${index + 1}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link to="/reviews" className="inline-flex items-center gap-2 text-forest font-bold hover:text-darkmint transition-colors bg-white px-6 py-2.5 rounded-full shadow-sm border border-gray-200">
              View All Testimonials <ArrowRight size={20} />
            </Link>
          </div>

          {/* Marquee loops below */}
          <div className="relative flex overflow-x-hidden mt-8">
            {/* ... Keep your existing marquee divs running here unchanged ... */}
          </div>
        </section>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}