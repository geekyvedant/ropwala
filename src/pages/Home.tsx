import { ArrowRight, BookOpen, Briefcase, Award, Grid, Sprout, Droplets, Sun, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFAB from '../components/ContactFAB';
import Carousel from '../components/Carousel';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useLanguage();

  const carouselItems = [
    { type: 'image' as const, src: 'https://picsum.photos/seed/nursery1/1200/600', alt: 'Nursery View 1' },
    { type: 'image' as const, src: 'https://picsum.photos/seed/nursery2/1200/600', alt: 'Nursery View 2' },
    { type: 'image' as const, src: 'https://picsum.photos/seed/nursery3/1200/600', alt: 'Nursery View 3' },
    { type: 'image' as const, src: 'https://picsum.photos/seed/nursery4/1200/600', alt: 'Nursery View 4' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/nursery/1920/1080" 
              alt="Lush Nursery" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-forest/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                {t('hero.title1')} <br className="hidden md:block" />
                <span className="text-marigold">{t('hero.title2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
                {t('hero.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/booking" 
                  className="w-full sm:w-auto bg-marigold hover:bg-yellow text-forest font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {t('hero.viewBatch')} <ArrowRight size={20} />
                </Link>
                <a 
                  href="#brochure" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  {t('hero.download')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">{t('about.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('about.desc')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {t('features').map((feature: any, idx: number) => {
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
              <Link to="/about" className="inline-flex items-center gap-2 text-forest font-bold hover:text-lime transition-colors">
                {t('about.readMore')} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Curriculum Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">{t('training.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('training.desc')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {t('curriculum').map((item: string, idx: number) => {
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">{t('gallery.title') || 'Our Facilities'}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('gallery.desc') || 'Take a look at our state-of-the-art nursery and training center.'}</p>
            </div>
            <Carousel items={carouselItems} />
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-16 bg-forest overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{t('reviews.title')}</h2>
            <Link to="/reviews" className="inline-flex items-center gap-2 text-marigold font-bold hover:text-yellow transition-colors">
              {t('reviews.readMore')} <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="relative flex overflow-x-hidden mt-8">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4">
              {[
                { name: "सुरेश पाटील", text: "खूप छान आणि प्रॅक्टिकल माहिती मिळाली!" },
                { name: "रमेश माने", text: "माझा रोपवाटिका व्यवसाय आता १ नंबर चालतोय." },
                { name: "संतोष कदम", text: "आष्टा ट्रेनिंग सेंटरमधील अनुभव अविस्मरणीय होता." },
                { name: "प्रकाश जाधव", text: "खर्च कमी आणि नफा जास्त, कसं करायचं ते शिकलो." },
                { name: "विजय शिंदे", text: "नवीन तंत्रज्ञानाचा वापर करून शेती करायला शिकलो." },
                { name: "ज्ञानेश्वर पाटील", text: "मार्गदर्शन उत्कृष्ट आहे, नक्की जॉईन करा!" },
                { name: "अमोल निकम", text: "माझ्या व्यवसायाला नवी दिशा मिळाली." },
                { name: "महेश साळुंखे", text: "रोपवाला टीमला खूप खूप धन्यवाद!" }
              ].map((review, i) => (
                <div key={i} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center text-forest font-bold text-xs shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{review.name}</span>
                    <span className="text-lime/90 text-xs">{review.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 py-4 ml-8">
              {[
                { name: "सुनील पवार", text: "कोकोपीट बनवण्याची पद्धत खूप सोपी करून सांगितली." },
                { name: "दत्तात्रय चव्हाण", text: "रोपांची मर थांबवण्यासाठी दिलेल्या टिप्स खूप फायद्याच्या ठरल्या." },
                { name: "राजेंद्र भोसले", text: "कमी वेळात जास्त माहिती, पैसा वसूल प्रात्यक्षिक!" },
                { name: "विकास तांबे", text: "जीवनात यशस्वी होण्यासाठीचा योग्य मार्ग." },
                { name: "गणेश काळे", text: "आधुनिक रोपवाटिकेची संपूर्ण माहिती मला मिळाली." },
                { name: "नवनाथ गायकवाड", text: "प्रत्येक शेतकऱ्याने हे ट्रेनिंग एकदा तरी घेणं आवश्यक आहे." },
                { name: "समीर देशमुख", text: "प्रॅक्टिकल अनुभव मिळाल्याने आत्मविश्वास वाढला." },
                { name: "सचिन चौधरी", text: "रोपवालामुळे माझा नफा तिप्पट वाढला आहे." }
              ].map((review, i) => (
                <div key={i} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center text-forest font-bold text-xs shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{review.name}</span>
                    <span className="text-lime/90 text-xs">{review.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFAB />
    </div>
  );
}
