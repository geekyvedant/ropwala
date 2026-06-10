import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import { useLanguage } from '../context/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

function MobileReviews({ reviews }: { reviews: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  if (!reviews.length) return null;

  const review = reviews[currentIndex];

  return (
    <div className="block md:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src={`https://picsum.photos/seed/farmer${currentIndex + 1}/400/400`}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />

            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                {review.name}
              </h4>
              <p className="text-sm text-gray-500">
                {review.location}
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed flex-grow italic">
            "{review.text}"
          </p>

          <div className="flex text-marigold mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex
                    ? 'bg-marigold w-6'
                    : 'bg-gray-300 w-2'
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLanguage();
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const reviews = t('reviewsList') || [];

  const videoTestimonials = [
    'https://www.youtube.com/embed/sZrOnWJHvX0',
    'https://www.youtube.com/embed/x2bIkVNz5fc',
    'https://www.youtube.com/embed/zy1BrdbXL04',
    'https://www.youtube.com/embed/In-md0krEBY',
    'https://www.youtube.com/embed/B1SVZwTZDkc',
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Student Reviews - RopWala"
        description="Hear success stories from our trained agri-entrepreneurs."
      />

      <Navbar />

      <main className="flex-grow">
        <div className="bg-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t('reviews.title')}
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Video Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('reviews.videoTitle') || 'Student Video Testimonials'}
              </h2>
              <p className="text-gray-600 mt-2">
                {t('reviews.videoDesc') || 'Hear directly from our successful agri-entrepreneurs'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {videoTestimonials.map((video, index) => (
                <div
                  key={index}
                  className="w-full max-w-[340px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <iframe
                      src={`${video}?rel=0&modestbranding=1`}
                      title={`Student Review ${index + 1}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Written Reviews */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('reviews.writtenTitle') || 'Student Success Stories'}
              </h2>
              <p className="text-gray-600 mt-2">
                {t('reviews.writtenDesc') || 'Real experiences from our trained farmers'}
              </p>
            </div>

            {/* Mobile Auto Slider */}
            <MobileReviews reviews={reviews} />

            {/* Tablet/Desktop Reviews */}
            <div className="hidden md:block">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                  {reviews.map((review: any, index: number) => (
                    <div
                      className="flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                      key={index}
                    >
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={`https://picsum.photos/seed/farmer${index + 1}/400/400`}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />

                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {review.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {review.location}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed flex-grow italic">
                          "{review.text}"
                        </p>

                        <div className="flex text-marigold mt-6">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                            >
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
        </div>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}