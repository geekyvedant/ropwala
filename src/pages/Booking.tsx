// src/pages/Booking.tsx

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Clock, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { salesTranslations } from '../i18n/salesTranslations';
import { TRAINING_CONFIG } from '../config/trainingConfig';
import Navbar from '../components/Navbar';
import ContactFAB from '../components/ContactFAB';
import Carousel from '../components/Carousel';
import SEO from '../components/SEO';

import logoImg from '../assets/logo.png';

// Past Training Gallery Assets
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

// Import the 5 Local Bonus Assets from the bookings folder
import bonusImg1 from '../assets/bookings/bonus1.png';
import bonusImg2 from '../assets/bookings/bonus2.png';
import bonusImg3 from '../assets/bookings/bonus3.png';
import bonusImg4 from '../assets/bookings/bonus4.png';
import bonusImg5 from '../assets/bookings/bonus5.png';

export default function Booking() {
  const { language } = useLanguage();
  const rawTranslations = salesTranslations[language] || salesTranslations.en;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Format Helper Constants derived directly from config settings
  const formattedFee = `${TRAINING_CONFIG.currencySymbol}${TRAINING_CONFIG.discountedFee}`;
  const formattedBaseFee = `${TRAINING_CONFIG.currencySymbol}${TRAINING_CONFIG.baseFee}`;

  const formattedDate = TRAINING_CONFIG.trainingDate.toLocaleDateString(
    language === 'mr' ? 'mr-IN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }
  );
  const formattedTime = TRAINING_CONFIG.trainingDate.toLocaleTimeString(
    language === 'mr' ? 'mr-IN' : 'en-US', { hour: 'numeric', minute: '2-digit' }
  );

  const deadlineDate = TRAINING_CONFIG.registrationDeadline.toLocaleDateString(
    language === 'mr' ? 'mr-IN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }
  );
  const deadlineTime = TRAINING_CONFIG.registrationDeadline.toLocaleTimeString(
    language === 'mr' ? 'mr-IN' : 'en-US', { hour: 'numeric', minute: '2-digit' }
  );

  // WhatsApp redirection setup
  const message = encodeURIComponent("I want to book a seat for upcoming training session.");
  const whatsappUrl = `https://wa.me/919130811266?text=${message}`;

  // Dynamic template substitution helper
  const renderText = (str: string) => {
    if (!str) return '';
    return str
      .replace(/{{date}}/g, formattedDate)
      .replace(/{{time}}/g, formattedTime)
      .replace(/{{deadlineDate}}/g, deadlineDate)
      .replace(/{{deadlineTime}}/g, deadlineTime)
      .replace(/{{baseFee}}/g, formattedBaseFee)
      .replace(/{{discountedFee}}/g, formattedFee);
  };

  useEffect(() => {
    const targetTime = TRAINING_CONFIG.registrationDeadline.getTime();
    const interval = setInterval(() => {
      const difference = targetTime - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const carouselItems = [
    { type: 'image' as const, src: session1, alt: 'View 1' }, { type: 'image' as const, src: session2, alt: 'View 2' },
    { type: 'image' as const, src: session3, alt: 'View 3' }, { type: 'image' as const, src: session4, alt: 'View 4' },
    { type: 'image' as const, src: session5, alt: 'View 5' }, { type: 'image' as const, src: session6, alt: 'View 6' },
    { type: 'image' as const, src: session7, alt: 'View 7' }, { type: 'image' as const, src: session8, alt: 'View 8' },
    { type: 'image' as const, src: session9, alt: 'View 9' }, { type: 'image' as const, src: session10, alt: 'View 10' },
    { type: 'image' as const, src: session11, alt: 'View 11' }, { type: 'image' as const, src: session12, alt: 'View 12' },
    { type: 'image' as const, src: session13, alt: 'View 13' }, { type: 'image' as const, src: session14, alt: 'View 14' },
    { type: 'image' as const, src: session15, alt: 'View 15' }, { type: 'image' as const, src: session16, alt: 'View 16' },
    { type: 'image' as const, src: session17, alt: 'View 17' }, { type: 'image' as const, src: session18, alt: 'View 18' }
  ];

  const localBonusImages = [bonusImg1, bonusImg2, bonusImg3, bonusImg4, bonusImg5];


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24">
      <SEO title="Book Your Seat - RopWala Training" description="Book your seat for the RopWala modern nursery training program." />
      <Navbar />

      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm md:text-base font-bold shadow-sm z-20 relative">
        ⚠️ {renderText(rawTranslations.topBanner)}
      </div>

      {/* Hero Header Area */}
      <div className="relative z-10 bg-forest text-white pt-10 pb-16 px-4 text-center border-b border-darkmint overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-20">
          <h2 className="text-marigold font-black text-xl md:text-2xl mb-2 tracking-wide">{renderText(rawTranslations.headlineLive)}</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-yellow">{renderText(rawTranslations.headlineMain)}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">{renderText(rawTranslations.headlineSub)}</p>

          <div className="inline-block border-2 border-marigold text-marigold font-black py-2.5 px-6 rounded-full mb-8 text-lg md:text-xl bg-darkmint/30 backdrop-blur-sm">
            {renderText(rawTranslations.bootcampDate)}
          </div>

          <p className="font-bold text-lg mb-4 text-gray-100 flex items-center justify-center gap-2">{renderText(rawTranslations.watchVideo)}</p>

          <div className="relative max-w-3xl mx-auto aspect-video bg-black border-4 border-white/10 rounded-2xl overflow-hidden mb-8 shadow-2xl z-30">
            <iframe src="https://www.youtube.com/embed/sZrOnWJHvX0?rel=0&modestbranding=1" title="Hero Overview Video" className="absolute inset-0 w-full h-full border-0" allowFullScreen />
          </div>

          <button onClick={handleCtaClick} className="w-full max-w-2xl mx-auto bg-marigold hover:bg-yellow text-forest font-black text-xl md:text-2xl py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex flex-col items-center justify-center relative z-30">
            <span>{renderText(rawTranslations.cta1Sub)}</span>
            <span className="text-sm font-bold opacity-90 mt-1">{formattedFee}/-</span>
          </button>
        </div>
      </div>

      {/* Real Success Video Stories Section */}
      <div className="bg-white py-16 px-4 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest mb-2">{renderText(rawTranslations.realStoriesTitle)}</h2>
          <p className="text-gray-600 mb-10 font-medium">{renderText(rawTranslations.realStoriesSub)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {['https://www.youtube.com/embed/x2bIkVNz5fc', 'https://www.youtube.com/embed/zy1BrdbXL04'].map((videoUrl, index) => (
              <div key={index} className="w-full max-w-[460px] relative aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                <div className="absolute top-0 left-0 right-0 bg-marigold text-forest font-black text-xs py-1.5 z-10 tracking-widest">SUCCESS STORY</div>
                <iframe src={`${videoUrl}?rel=0&modestbranding=1`} title={`Story ${index + 1}`} className="absolute inset-0 w-full h-full pt-6" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Informational Map Block */}
      <div className="bg-forest text-white py-16 px-4 text-center border-t border-b border-darkmint relative z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">{renderText(rawTranslations.whatYouLearnTitle)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {rawTranslations.learnBoxes.map((box: string, i: number) => (
              <div key={i} className="border border-white/20 bg-darkmint/30 rounded-2xl p-6 flex items-center justify-center min-h-[100px] hover:border-marigold transition-all duration-300">
                <p className="text-lg font-medium text-gray-100">{renderText(box)}</p>
              </div>
            ))}
          </div>
          <p className="text-xl mb-2 font-semibold text-gray-200">{renderText(rawTranslations.workshopDate)}</p>
          <p className="text-marigold font-black text-xl tracking-wide">{renderText(rawTranslations.beQuick)}</p>
        </div>
      </div>

      {/* Checkboxes Area */}
      <div className="bg-gray-100 py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest text-center mb-10">
            {rawTranslations.checkBoxesTitle.includes('YES!') ? (
              <>
                {rawTranslations.checkBoxesTitle.split('YES!')[0]}
                <span className="text-marigold">YES!</span>
                {rawTranslations.checkBoxesTitle.split('YES!')[1]}
              </>
            ) : renderText(rawTranslations.checkBoxesTitle)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {rawTranslations.checkBoxes.map((box: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-forest rounded border-gray-300 focus:ring-forest" />
                <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{renderText(box)}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl font-bold text-gray-800">{renderText(rawTranslations.ifChecked)}</p>
            <p className="text-2xl font-black text-forest tracking-tight">{renderText(rawTranslations.joinBootcamp)}</p>
            <button onClick={handleCtaClick} className="w-full max-w-xl mx-auto bg-marigold hover:bg-yellow text-forest font-black text-xl py-4 px-8 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 flex flex-col items-center justify-center">
              <span>{renderText(rawTranslations.ctaButton)}</span>
              <span className="text-sm font-bold opacity-90 mt-1">{formattedFee}/-</span>
            </button>
            <p className="font-extrabold text-sm text-gray-500">{renderText(rawTranslations.registerBefore)}</p>
          </div>
        </div>
      </div>

      {/* Mirror Gallery and Containment Area */}
      <div className="bg-white py-16 px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest mb-6">
            {rawTranslations.notHardTitle.includes('कठीण काम नाही!') ? (
              <>
                {rawTranslations.notHardTitle.split('कठीण काम नाही!')[0]}
                <span className="text-marigold">कठीण काम नाही!</span>
                {rawTranslations.notHardTitle.split('कठीण काम नाही!')[1]}
              </>
            ) : renderText(rawTranslations.notHardTitle)}
          </h2>
          <p className="text-lg text-gray-600 mb-4 font-medium">{renderText(rawTranslations.notHardSub1)}</p>
          <p className="text-lg text-gray-600 mb-4">{renderText(rawTranslations.notHardSub2)}</p>
          <p className="text-lg text-gray-600 mb-8">{renderText(rawTranslations.notHardSub3)}</p>
          <p className="text-forest font-black text-xl md:text-2xl tracking-wide mb-10">{renderText(rawTranslations.hours3)}</p>

          {/* Past Training Sessions Layout System with explicit sizing containment constraints */}
          <div className="w-full max-w-3xl mx-auto mb-12 p-4 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm relative block overflow-hidden">
            <Carousel
              items={carouselItems}
              className="w-full h-[220px] sm:h-[340px] md:h-[440px] rounded-2xl overflow-hidden"
            />
          </div>

          <button onClick={handleCtaClick} className="w-full max-w-xl mx-auto bg-marigold hover:bg-yellow text-forest font-black text-xl py-4 px-8 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 flex flex-col items-center justify-center">
            <span>{renderText(rawTranslations.ctaButton)}</span>
            <span className="text-sm font-bold opacity-90 mt-1">{formattedFee}/-</span>
          </button>
          <p className="mt-4 font-extrabold text-sm text-gray-500">{renderText(rawTranslations.registerBefore)}</p>
        </div>
      </div>

      {/* Feature Bullet Checklist Grid */}
      <div className="bg-forest text-white py-16 px-4 border-t border-b border-darkmint relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {rawTranslations.checkmarks.map((mark: string, i: number) => (
            <div key={i} className="flex items-start gap-3 bg-darkmint/30 p-4 rounded-xl border border-white/5">
              <Check className="text-marigold shrink-0 mt-1" size={20} />
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                {mark.split('-').map((part, idx) => (
                  <span key={idx} className={idx === 0 ? "font-bold text-white" : "text-lime font-medium"}>
                    {idx > 0 ? ` - ${renderText(part)}` : renderText(part)}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extended Video Feeds */}
      <div className="bg-white py-16 px-4 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest mb-10">{renderText(rawTranslations.moreResultsTitle)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {['https://www.youtube.com/embed/In-md0krEBY', 'https://www.youtube.com/embed/B1SVZwTZDkc'].map((videoSrc, i) => (
              <div key={i} className="w-full max-w-[300px] relative aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-gray-100 shadow-md">
                <iframe src={`${videoSrc}?rel=0&modestbranding=1`} title={`Review ${i + 3}`} className="absolute inset-0 w-full h-full border-0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Counter Matrix */}
      <div className="bg-gray-100 py-12 px-4 text-center border-t border-b border-gray-200 relative z-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Clock size={22} className="text-marigold animate-spin" /> {renderText(rawTranslations.timeRunningOut)}
          </h2>

          <div className="bg-forest text-marigold inline-flex rounded-2xl p-4 shadow-2xl border border-darkmint">
            {[['DAYS', timeLeft.days], ['HOURS', timeLeft.hours], ['MINUTES', timeLeft.minutes], ['SECONDS', timeLeft.seconds]].map((unit, idx) => (
              <div key={idx} className={`flex flex-col items-center px-5 ${idx < 3 ? 'border-r border-white/10' : ''}`}>
                <span className="text-3xl md:text-5xl font-black text-white tracking-tight">{String(unit[1]).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-1.5">{unit[0]}</span>
              </div>
            ))}
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-700">{renderText(rawTranslations.timerZero)}</p>
        </div>
      </div>

      {/* About Speaker Corporate Row Panel */}
      <div className="bg-forest text-white py-16 px-4 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img src={logoImg} alt="RopWala Logo" className="h-full w-auto object-contain" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">{renderText(rawTranslations.aboutSpeakerTitle)}</h2>
            <p className="text-marigold italic font-semibold text-lg">एक वेळ होती...</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{renderText(rawTranslations.aboutSpeakerText1)}</p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed font-bold border-l-4 border-marigold pl-4">{renderText(rawTranslations.aboutSpeakerText2)}</p>
            <h3 className="text-xl font-bold text-white pt-2">{renderText(rawTranslations.joinMe)}</h3>
          </div>
        </div>
      </div>

      {/* 5 Dynamic Bonus Configuration Grid items */}
      <div className="bg-white py-16 px-4 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-forest mb-10 max-w-2xl mx-auto leading-snug">
            {renderText(rawTranslations.bonusesTitle)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rawTranslations.bonuses.map((bonus: any, i: number) => (
              <div key={i} className="border border-gray-200 rounded-3xl overflow-hidden shadow-md bg-gray-50 flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="bg-marigold text-forest font-black py-2.5 border-b border-gray-200 uppercase tracking-wide text-sm">
                  🎁 {renderText(bonus.title)}
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  {/* Fetches from local asset array matching image layout index smoothly */}
                  <img
                    src={localBonusImages[i % localBonusImages.length]}
                    alt={bonus.name}
                    className="w-45 h-45 mx-auto object-contain rounded-3xl mix-blend-multiply"
                  />
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">
                      {renderText(bonus.name)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {renderText(bonus.desc)}
                    </p>
                  </div>
                  <p className="font-bold text-sm text-forest bg-lime/20 py-1.5 rounded-full mt-2">
                    {renderText(bonus.price)} <span className='line-through'>{renderText(bonus.value)}</span> {renderText(bonus.finalvalue)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Matrix */}
      <div className="bg-white py-12 px-4 text-center border-t border-gray-200 relative z-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">{renderText(rawTranslations.summaryTitle)}</h2>
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 max-w-md mx-auto space-y-2">
            <p className="text-red-600 font-black text-xl">{renderText(rawTranslations.totalValue)}</p>
            <p className="text-gray-400 line-through text-base font-semibold">{renderText(rawTranslations.normalPrice)}</p>
            <p className="text-3xl font-black text-forest tracking-tight">{renderText(rawTranslations.todayPrice)}</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">{renderText(rawTranslations.timeRunningOut)}</h2>

          <div className="bg-forest text-marigold inline-flex rounded-2xl p-4 shadow-xl border border-darkmint">
            {[['DAYS', timeLeft.days], ['HOURS', timeLeft.hours], ['MINUTES', timeLeft.minutes], ['SECONDS', timeLeft.seconds]].map((unit, idx) => (
              <div key={idx} className={`flex flex-col items-center px-4 ${idx < 3 ? 'border-r border-white/10' : ''}`}>
                <span className="text-2xl md:text-4xl font-bold text-white">{String(unit[1]).padStart(2, '0')}</span>
                <span className="text-[9px] font-bold text-gray-400 mt-1">{unit[0]}</span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg font-bold text-gray-700 max-w-xl mx-auto leading-relaxed">
            ही कार्यशाळा एखाद्या मॅजिक शोसारखी असणार आहे, जिथे मी माझ्या स्क्रीनवर काय करतो ते पाहून तुम्ही थक्क व्हाल!
          </p>

          <button onClick={handleCtaClick} className="w-full max-w-xl mx-auto bg-marigold hover:bg-yellow text-forest font-black text-xl py-4 px-8 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 flex flex-col items-center justify-center">
            <span>{renderText(rawTranslations.ctaButton)}</span>
            <span className="text-sm font-bold opacity-90 mt-1">{formattedFee}/-</span>
          </button>
          <p className="font-extrabold text-sm text-gray-500">{renderText(rawTranslations.registerBefore)}</p>

          {/* Faq Collapse Layout Container Element */}
          <h2 className="text-3xl font-extrabold text-forest pt-12 mb-8">{renderText(rawTranslations.faqTitle)}</h2>
          <div className="max-w-3xl mx-auto text-left space-y-4">
            {rawTranslations.faqs.map((faq: any, i: number) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex justify-between items-center font-bold text-left bg-forest text-white hover:bg-darkmint transition-colors">
                  <span className="pr-4">{renderText(faq.q)}</span>
                  {openFaq === i ? <ChevronUp size={20} className="shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
                </button>
                {openFaq === i && <div className="px-6 py-5 text-gray-700 border-t border-gray-100 leading-relaxed text-base">{renderText(faq.a)}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synchronized Sticky Bottom Floating Bar with Striking Price Cancellation Treatment */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0b3c26] text-white p-4 flex justify-between items-center z-50 border-t border-darkmint shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
          <div className="text-marigold font-black text-lg md:text-xl tracking-tight">
            <span className="text-gray-400 line-through mr-2 text-sm md:text-base font-semibold decoration-red-500 decoration-2">
              {TRAINING_CONFIG.currencySymbol}{TRAINING_CONFIG.baseFee}
            </span>
            <span className="text-white">
              {TRAINING_CONFIG.currencySymbol}{TRAINING_CONFIG.discountedFee}/-
            </span>
          </div>
          <div className="text-xs md:text-sm font-bold text-gray-300 hidden sm:block">
            {renderText(rawTranslations.stickyHurry)}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex text-marigold font-mono text-lg font-black tracking-widest bg-black/20 px-3 py-1 rounded-md border border-white/5">
            {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <button onClick={handleCtaClick} className="bg-marigold hover:bg-yellow text-forest font-black py-2.5 px-3 rounded-full shadow-lg transition-colors whitespace-nowrap text-xs md:text-base uppercase tracking-wider">
            Join Bootcamp Now →
          </button>
        </div>
      </div>

      <ContactFAB />
    </div>
  );
}