
import React from 'react';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen white-bg flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[120px] -z-10"></div>

      <header className="mb-12 animate-in fade-in zoom-in duration-700">
        <img 
          src="https://i.ibb.co/5gQmCZbg/logo-1755179078949.png" 
          alt="Saleti Logo" 
          className="h-28 md:h-36 object-contain animate-float drop-shadow-sm"
        />
      </header>

      <main className="text-center max-w-4xl mx-auto space-y-10 z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
            سنعود إليكم <span className="text-[#1e3a8a]">قريباً</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            الموقع حالياً تحت الصيانة والتطوير لتقديم تجربة تسوق استثنائية تفوق توقعاتكم. نحن نعمل بجد لنقدم لكم الأفضل!
          </p>
        </div>

        <div className="pt-8 space-y-8">
          <div className="space-y-4">
            <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest">كن أول من يعلم عند الإطلاق</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full sm:w-80 bg-slate-50 border border-slate-200 rounded-full px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
              <button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-900/10 transition-all hover:scale-105 active:scale-95">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 flex flex-col items-center space-y-8 animate-in fade-in duration-1000">
        <div className="flex gap-4 md:gap-6">
          <SocialLink icon="facebook" href="https://web.facebook.com/Saletiweb/?_rdc=1&_rdr#" />
          <SocialLink icon="instagram" href="https://www.instagram.com/saletiweb/" />
          <SocialLink icon="youtube" href="https://www.youtube.com/@saletiweb?reload=9" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} سلتي ويب. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* AI Bot Integration */}
      <ChatBot />
    </div>
  );
};

const SocialLink = ({ icon, href }: { icon: string; href: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    youtube: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    )
  };

  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all duration-300 hover:-translate-y-1 shadow-sm"
      title={icon}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {icons[icon]}
      </svg>
    </a>
  );
};

export default App;
