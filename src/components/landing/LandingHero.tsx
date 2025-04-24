import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center px-4 pt-24 pb-32 md:pb-44 bg-crypto-gray-darker overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-tr from-crypto-orange/30 via-purple-700/40 to-blue-500/20 blur-[80px] opacity-40 animate-pulse" style={{animationDuration: '10s'}} />
        <div className="absolute bottom-[-135px] right-[-120px] w-[410px] h-[350px] bg-gradient-to-tl from-green-400/15 via-purple-600/20 to-blue-500/10 blur-[100px] opacity-35 animate-pulse" style={{animationDuration: '12s'}}/>
        
        <div className="absolute left-[10%] top-[30%] w-16 h-16 rounded-full bg-crypto-orange/20 blur-2xl opacity-70 animate-pulse" style={{animationDuration: '8s'}}/>
        <div className="absolute right-[12%] bottom-[15%] w-20 h-20 rounded-full bg-purple-600/20 blur-2xl opacity-60 animate-pulse" style={{animationDuration: '7s'}}/>
        <div className="absolute right-[25%] top-[20%] w-12 h-12 rounded-full bg-blue-500/20 blur-2xl opacity-50 animate-pulse" style={{animationDuration: '9s'}}/>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC4zIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjwvZz48L3N2Zz4=')] opacity-10" />
        
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl text-center space-y-8">
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 delay-100">
          <div className="flex flex-row gap-3 items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-crypto-orange/20 blur-2xl opacity-70 animate-pulse" style={{animationDuration: '3s'}}></div>
            <Shield size={52} className="text-crypto-orange drop-shadow-[0_0_25px_rgba(251,146,60,0.6)] animate-glow" />
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight font-[Inter] drop-shadow-md">
              Key Vault
            </span>
          </div>
        </div>
        
        <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 delay-200 text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 drop-shadow-lg">
            The Future of Secure
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange via-amber-500 to-amber-300">
            Crypto Investing
          </span>
        </h1>
        
        <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 delay-300 text-base md:text-xl text-crypto-gray-light mb-2 max-w-2xl font-medium leading-relaxed">
          Grow your wealth safely and earn exclusive, industry-leading yields by locking your funds with Key Vault—Solana-powered, fully non-custodial, and designed for every investor.
        </p>
        
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 delay-400 flex flex-col sm:flex-row gap-4 mb-10 justify-center w-full max-w-md">
          <Button
            size="lg"
            className="bg-gradient-to-r from-crypto-orange to-amber-500 hover:from-crypto-orange-light hover:to-amber-400 text-lg shadow-lg shadow-crypto-orange/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto px-8 py-6"
            onClick={() => navigate("/auth?mode=signup")}
          >
            Start Investing
            <ArrowRight className="ml-2 animate-pulse" style={{animationDuration: '3s'}} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-600 hover:border-crypto-orange/50 hover:bg-crypto-orange/5 text-lg transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto px-8 py-6"
            onClick={() => navigate("/auth?mode=login")}
          >
            Log In
          </Button>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 delay-500 flex items-center gap-2 justify-center text-crypto-gray-light text-xs mt-4">
          <Award size={19} className="text-green-400 animate-pulse" style={{animationDuration: '4s'}} />
          <span className="text-gray-400">
            Fully non-custodial • Powered by Solana • 24/7 Smart Vault Security
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70">
        <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1 mx-auto">
          <div className="w-1 h-2 bg-crypto-orange rounded-full animate-bounce delay-75"></div>
        </div>
      </div>
      
      <style jsx="true">{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(249,115,22,0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(249,115,22,0.7)); }
        }
        
        .animate-twinkle {
          animation: twinkle var(--duration, 5s) infinite ease-in-out;
        }
        
        .animate-glow {
          animation: glow 4s infinite ease-in-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
