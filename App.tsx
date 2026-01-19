
import React from 'react';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* عناصر زخرفية خفيفة جداً */}
      <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-slate-50/50 rounded-full blur-[100px] -z-10"></div>

      <header className="mb-12 animate-in fade-in zoom-in duration-1000">
        <img 
          src="https://i.ibb.co/5gQmCZbg/logo-1755179078949.png" 
          alt="Saleti Logo" 
          className="h-32 md:h-44 object-contain animate-float drop-shadow-xl"
        />
      </header>

      <main className="text-center max-w-4xl mx-auto space-y-12 z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            سنعود إليكم <span className="text-[#1e3a8a]">قريباً</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            الموقع حالياً تحت الصيانة لتطوير تجربة تسوق أفضل. <br/> شكراً لثقتكم بنا.
          </p>
        </div>

        <div className="pt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني ليصلك جديدنا" 
              className="w-full sm:w-80 bg-white border border-slate-200 rounded-full px-6 py-4 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
            />
            <button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-900/10 transition-all hover:scale-105 active:scale-95">
              اشترك الآن
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-24 flex flex-col items-center space-y-10 animate-in fade-in duration-1000">
        <div className="flex gap-4 md:gap-8">
          <SocialLink icon="facebook" href="https://web.facebook.com/Saletiweb/?_rdc=1&_rdr#" />
          <SocialLink icon="instagram" href="https://www.instagram.com/saletiweb/" />
          <SocialLink icon="youtube" href="https://www.youtube.com/@saletiweb?reload=9" />
          <SocialLink icon="whatsapp" href="https://wa.me/962796933486" />
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} سلتي ويب. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
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
    ),
    whatsapp: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  };

  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-500 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 shadow-sm"
      title={icon}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
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
