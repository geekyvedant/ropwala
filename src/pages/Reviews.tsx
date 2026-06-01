import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { Play } from 'lucide-react';

export default function Reviews() {
  const { t } = useLanguage();
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  const reviews = t('reviewsList') || [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('reviews.title')}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Video Testimonials */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer aspect-video bg-gray-900">
                  <img 
                    src={`https://picsum.photos/seed/video${i}/800/450`} 
                    alt={`Video Testimonial ${i}`} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-marigold rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play size={32} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Written Reviews Carousel */}
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {reviews.map((review: any, index: number) => (
                  <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0" key={index}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <img src={`https://picsum.photos/seed/farmer${index+1}/400/400`} alt={review.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed flex-grow italic">"{review.text}"</p>
                      <div className="flex text-marigold mt-6">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
