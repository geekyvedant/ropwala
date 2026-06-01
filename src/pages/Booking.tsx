import { useState, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { salesTranslations } from '../i18n/salesTranslations';
import Navbar from '../components/Navbar';
import ContactFAB from '../components/ContactFAB';

export default function Booking() {
  const { language } = useLanguage();
  const t = salesTranslations[language] || salesTranslations.en;
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date('2025-04-15T21:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

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
    // Scroll to bottom or open payment modal
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pb-24">
      <Navbar />
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm md:text-base font-medium mt-[80px]">
        {t.topBanner}
      </div>

      {/* Hero Section */}
      <div className="bg-[#1a1025] text-white pt-10 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-red-500 font-bold text-xl md:text-2xl mb-2">{t.headlineLive}</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-yellow-400">
            {t.headlineMain}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {t.headlineSub}
          </p>
          
          <div className="inline-block border-2 border-yellow-400 text-yellow-400 font-bold py-2 px-6 rounded-md mb-8 text-lg md:text-xl">
            {t.bootcampDate}
          </div>

          <p className="font-bold text-lg mb-4">{t.watchVideo}</p>

          {/* Main Video Placeholder */}
          <div className="relative max-w-3xl mx-auto aspect-video bg-gray-800 border-4 border-white rounded-lg overflow-hidden mb-8 shadow-2xl">
            <img src="https://picsum.photos/seed/mainvideo/1280/720" alt="Main Video" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors">
                <Play className="text-white ml-1" size={32} fill="currentColor" />
              </div>
            </div>
          </div>

          <button onClick={handleCtaClick} className="w-full max-w-2xl mx-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center">
            <span>{t.cta1Sub}</span>
            <span className="text-sm font-normal mt-1">{t.onlyRs}</span>
          </button>
        </div>
      </div>

      {/* Real Stories Section */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.realStoriesTitle}</h2>
          <p className="text-gray-600 mb-10">{t.realStoriesSub}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="relative aspect-video bg-black rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg">
                <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black font-bold text-xs py-1 z-10">SUCCESS STORY</div>
                <img src={`https://picsum.photos/seed/story${i}/800/450`} alt={`Story ${i}`} className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <Play className="text-black ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <div className="bg-[#1a1025] text-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.whatYouLearnTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {t.learnBoxes.map((box: string, i: number) => (
              <div key={i} className="border border-gray-600 rounded-md p-6 flex items-center justify-center min-h-[100px] hover:border-yellow-400 transition-colors">
                <p className="text-lg">{box}</p>
              </div>
            ))}
          </div>

          <p className="text-xl mb-2">{t.workshopDate}</p>
          <p className="text-yellow-400 font-bold text-xl">{t.beQuick}</p>
        </div>
      </div>

      {/* Checkboxes Section */}
      <div className="bg-[#f0f4f8] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t.checkBoxesTitle.split('YES!')[0]}<span className="text-green-600">YES!</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {t.checkBoxes.map((box: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
                <input type="checkbox" className="mt-1 w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                <p className="text-gray-700 text-sm md:text-base">{box}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-medium mb-4">{t.ifChecked}</p>
            <p className="text-2xl font-bold mb-6">{t.joinBootcamp}</p>
            <button onClick={handleCtaClick} className="w-full max-w-xl mx-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center">
              <span>{t.ctaButton}</span>
              <span className="text-sm font-normal mt-1">{t.onlyRs}</span>
            </button>
            <p className="mt-4 font-bold text-sm">
              {t.registerBefore.split('₹')[0]}<span className="text-yellow-600">₹ {t.registerBefore.split('₹')[1]}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Not Hard Section */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.notHardTitle.split('कठीण काम नाही!')[0]}<span className="text-green-600">कठीण काम नाही!</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">{t.notHardSub1}</p>
          <p className="text-lg text-gray-700 mb-4">{t.notHardSub2}</p>
          <p className="text-lg text-gray-700 mb-8">{t.notHardSub3}</p>
          <p className="text-red-600 font-bold text-xl mb-10">{t.hours3}</p>

          <img src="https://picsum.photos/seed/mockup/800/500" alt="Course Mockup" className="w-full max-w-2xl mx-auto mb-10 drop-shadow-2xl" referrerPolicy="no-referrer" />

          <button onClick={handleCtaClick} className="w-full max-w-xl mx-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center">
            <span>{t.ctaButton}</span>
            <span className="text-sm font-normal mt-1">{t.onlyRs}</span>
          </button>
          <p className="mt-4 font-bold text-sm">
            {t.registerBefore.split('₹')[0]}<span className="text-yellow-600">₹ {t.registerBefore.split('₹')[1]}</span>
          </p>
        </div>
      </div>

      {/* Checkmarks Section */}
      <div className="bg-[#1a1025] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.checkmarks.map((mark: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="text-green-500 shrink-0 mt-1" size={20} />
              <p className="text-gray-300 text-sm md:text-base">
                {mark.split('-').map((part, idx) => (
                  <span key={idx} className={idx === 0 ? "font-bold text-white" : "text-green-400"}>
                    {idx > 0 ? ` - ${part}` : part}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* More Results Section */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">{t.moreResultsTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-video bg-black rounded-lg overflow-hidden border-4 border-gray-200 shadow-md">
                <img src={`https://picsum.photos/seed/result${i}/800/450`} alt={`Result ${i}`} className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <Play className="text-black ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <div className="bg-white py-8 px-4 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{t.timeRunningOut}</h2>
          
          <div className="bg-black text-yellow-400 inline-flex rounded-md p-4 mb-6 shadow-xl">
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">DAYS</span>
            </div>
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">HOURS</span>
            </div>
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">MINUTES</span>
            </div>
            <div className="flex flex-col items-center px-4">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">SECONDS</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl font-medium">
            {t.timerZero.split('शून्यावर')[0]}<span className="text-red-600 font-bold">शून्यावर</span>{t.timerZero.split('शून्यावर')[1]?.split('2,000')[0]}<span className="text-red-600 font-bold">2,000</span>{t.timerZero.split('2,000')[1]}
          </p>
        </div>
      </div>

      {/* About Speaker Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img src="https://picsum.photos/seed/speaker/400/500" alt="Speaker" className="w-full rounded-lg shadow-2xl border-4 border-gray-800" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{t.aboutSpeakerTitle}</h2>
            <p className="text-gray-400 italic mb-6">एक वेळ होती...</p>
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">{t.aboutSpeakerText1}</p>
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-bold">{t.aboutSpeakerText2}</p>
            <h3 className="text-xl font-bold">{t.joinMe}</h3>
          </div>
        </div>
      </div>

      {/* Bonuses Section */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-10">
            {t.bonusesTitle.split('₹')[0]}<span className="text-yellow-600">₹ {t.bonusesTitle.split('₹')[1]}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.bonuses.map((bonus: any, i: number) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-yellow-400 text-black font-bold py-2 border-b border-gray-200">
                  🎁 {bonus.title}
                </div>
                <div className="p-6">
                  <img src={`https://picsum.photos/seed/bonus${i}/200/200`} alt={bonus.name} className="w-32 h-32 mx-auto mb-4 object-contain" referrerPolicy="no-referrer" />
                  <h3 className="font-bold text-lg mb-2">{bonus.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{bonus.desc}</p>
                  <p className="font-bold text-sm text-green-600">{bonus.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary & Final CTA */}
      <div className="bg-white py-12 px-4 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.summaryTitle}</h2>
          <p className="text-red-600 font-bold text-xl mb-4">{t.totalValue}</p>
          <p className="text-gray-600 line-through mb-2">{t.normalPrice}</p>
          <p className="text-3xl font-extrabold text-green-700 mb-8">{t.todayPrice}</p>
          
          <h2 className="text-2xl font-bold mb-6">{t.timeRunningOut}</h2>
          
          <div className="bg-black text-yellow-400 inline-flex rounded-md p-4 mb-8 shadow-xl">
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">DAYS</span>
            </div>
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">HOURS</span>
            </div>
            <div className="flex flex-col items-center px-4 border-r border-gray-700">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">MINUTES</span>
            </div>
            <div className="flex flex-col items-center px-4">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm text-white mt-1">SECONDS</span>
            </div>
          </div>

          <p className="text-lg font-bold mb-6">ही कार्यशाळा एखाद्या मॅजिक शोसारखी असणार आहे, जिथे मी माझ्या स्क्रीनवर काय करतो ते पाहून तुम्ही थक्क व्हाल!</p>

          <button className="w-full max-w-xl mx-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center mb-4">
            <span>{t.ctaButton}</span>
            <span className="text-sm font-normal mt-1">{t.onlyRs}</span>
          </button>
          <p className="font-bold text-sm mb-16">
            {t.registerBefore.split('₹')[0]}<span className="text-yellow-600">₹ {t.registerBefore.split('₹')[1]}</span>
          </p>

          {/* FAQ */}
          <h2 className="text-3xl font-bold mb-8">{t.faqTitle}</h2>
          <div className="max-w-3xl mx-auto text-left space-y-4">
            {t.faqs.map((faq: any, i: number) => (
              <div key={i} className="border border-gray-300 rounded-md overflow-hidden bg-[#1a2b4c] text-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center font-bold text-left hover:bg-[#233860] transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white text-gray-800 border-t border-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a] text-white p-4 flex justify-between items-center z-50 border-t border-gray-800 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
          <div className="text-yellow-400 font-bold text-lg md:text-xl">
            {t.stickyPrice.split('₹199/-')[0]}<span className="text-white">₹199/-</span>
          </div>
          <div className="text-xs md:text-sm font-medium hidden sm:block">
            {t.stickyHurry}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex text-yellow-400 font-mono text-lg font-bold">
            {timeLeft.hours.toString().padStart(2, '0')} : {timeLeft.minutes.toString().padStart(2, '0')} : {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md shadow-lg transition-colors whitespace-nowrap text-sm md:text-base">
            Join Bootcamp Now →
          </button>
        </div>
      </div>
      <ContactFAB />
    </div>
  );
}
