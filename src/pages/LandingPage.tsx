import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Users, BarChart, ArrowRight, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;
      
      if (heroElement) {
        // Apply parallax to the hero section
        heroElement.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }

      // Add smooth reveal animations for sections as they scroll into view
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial animation
    setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.classList.add('active');
      }
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Security You Can Trust",
      description:
        "Our Solana-based vault leverages advanced cryptography and non-custodial access for total fund protection.",
      icon: <Shield size={34} className="text-crypto-orange" />,
      iconBg: "bg-navy-dark",
      className: "md:row-span-2 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Industry-Leading Yields",
      description:
        "Lock your funds for 6 or 12 months and earn yields higher than a typical savings account.",
      icon: <DollarSign size={34} className="text-green-400" />,
      iconBg: "bg-green-800/30",
      className: "lg:col-span-2",
    },
    {
      title: "Instant Access",
      description:
        "Deposit anytime, withdraw when your lock-in ends. All fully on-chain, 24/7.",
      icon: <Clock size={34} className="text-violet-300" />,
      iconBg: "bg-purple-900/50",
      className: "",
    },
    {
      title: "For All Investors",
      description:
        "Onboard in minutes. Our platform is simple, inclusive, and built for both newcomers and pros.",
      icon: <Users size={34} className="text-blue-300" />,
      iconBg: "bg-indigo-900/40",
      className: "",
    },
    {
      title: "Realtime Analytics",
      description:
        "Track vault performance and returns with beautiful, transparent charts and insights.",
      icon: <BarChart size={34} className="text-blue-300" />,
      iconBg: "bg-blue-900/40",
      className: "md:col-span-2 lg:col-span-1",
    },
  ];

  const stats = [
    { value: "$487M", label: "Assets Under Management" },
    { value: "24.8%", label: "Annual Average Return" },
    { value: "3,400+", label: "Active Investors" },
    { value: "99.9%", label: "Security Uptime" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a11] via-[#120f19] to-[#0d0d14] overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[100vh] flex flex-col items-center justify-center px-5 md:px-8 pt-16 pb-32 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.12) 0%, rgba(16, 16, 28, 0) 70%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-crypto-orange/5 blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
          
          {/* Floating orbs */}
          <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-crypto-orange/70 animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[30%] left-[20%] w-1 h-1 rounded-full bg-purple-400/70 animate-ping" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-[25%] right-[30%] w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-ping" style={{ animationDuration: '3s' }} />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjwvZz48L3N2Zz4=')] opacity-5" />
        </div>

        <div className="hero-content opacity-0 transform translate-y-8 transition-all duration-1000 ease-out z-10 w-full max-w-6xl mx-auto text-center">
          {/* Animated logo appearance */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 rounded-full bg-crypto-orange/20 blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="relative flex items-center justify-center mb-4 w-24 h-24 mx-auto bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] rounded-full border border-crypto-orange/30 shadow-lg shadow-crypto-orange/5">
              <Shield size={50} className="text-crypto-orange animate-glow" />
            </div>
          </div>
          
          {/* Main Headline with animated gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 mb-6 tracking-tight drop-shadow-sm max-w-5xl mx-auto leading-[1.1]">
            <span className="block">Key Vault</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-crypto-orange via-crypto-orange/90 to-rose-500/80 text-transparent bg-clip-text">
              The Future of Secure Crypto Investing
            </span>
          </h1>
          
          {/* Subheadline with animated reveal */}
          <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Grow your wealth safely and earn exclusive, industry-leading yields by locking your funds with Key Vault—Solana-powered, fully non-custodial, and designed for every investor.
          </p>
          
          {/* CTA Buttons with glow effects */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-16 justify-center z-10 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button
              size="lg"
              className="h-[60px] min-w-[220px] bg-gradient-to-r from-crypto-orange to-amber-500 hover:from-crypto-orange-light hover:to-amber-400 text-lg rounded-lg shadow-lg shadow-crypto-orange/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crypto-orange/30 font-medium"
              onClick={() => navigate("/auth?mode=signup")}
            >
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5 animate-pulse" style={{ animationDuration: '3s' }} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[60px] min-w-[220px] border-2 border-gray-700 hover:border-crypto-orange/50 hover:bg-crypto-orange/5 text-lg rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate("/auth?mode=login")}
            >
              Log In
              <Lock className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Animated Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-4 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-crypto-orange/90 to-amber-300 text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Security Badge */}
          <div className="flex items-center justify-center text-gray-400 text-sm mt-12 opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <Shield size={16} className="text-green-400 mr-2" />
            <span>Fully non-custodial • Powered by Solana • 24/7 Smart Vault Security</span>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fadeIn" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-crypto-orange rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid Section with reveal animations */}
      <section className="relative z-10 px-5 md:px-10 lg:px-20 xl:px-40 py-24 -mt-20">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Why Choose Key Vault?</h2>
          <p className="text-xl text-gray-300">Our platform combines cutting-edge technology with institutional-grade security to deliver exceptional returns.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#1E2133]/80 to-[#161923]/80 backdrop-blur-sm border border-white/5 shadow-xl ${feature.className} reveal transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-crypto-orange/5 hover:border-crypto-orange/10`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon with animated background */}
              <div className={`w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center mb-8 border border-white/5 shadow-inner relative overflow-hidden group-hover:border-white/20`}>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{feature.title}</h3>
              <p className="text-lg text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Trusted by Thousands</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Hear what our investors have to say about their experience with Key Vault.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {[
              { 
                quote: "Key Vault has revolutionized how I think about crypto investments. The yields are incredible, and I sleep soundly knowing my assets are secure.", 
                name: "Sarah K.", 
                title: "Tech Entrepreneur"
              },
              { 
                quote: "After trying multiple platforms, I've finally found a solution that balances high returns with institutional-grade security. Key Vault is in a league of its own.", 
                name: "Michael R.", 
                title: "Financial Advisor"
              },
              { 
                quote: "The transparency and real-time analytics make Key Vault stand out. I can track my investments with confidence and the returns have consistently exceeded my expectations.", 
                name: "Jessica T.", 
                title: "Retail Investor"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1E2133]/80 to-[#161923]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:shadow-crypto-orange/5 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-crypto-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with parallax effect */}
      <section className="relative z-10 py-32 flex flex-col items-center text-center px-5">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-crypto-orange/5 blur-[100px]" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/5 blur-[80px]" />
        </div>
        
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">Ready to Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-orange to-amber-400">Financial Future?</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Start your journey with Key Vault today and experience the next generation of crypto investing.
          </p>
          <Button
            size="lg"
            className="h-[60px] px-10 bg-gradient-to-r from-crypto-orange to-amber-500 hover:from-crypto-orange-light hover:to-amber-400 text-lg rounded-lg shadow-lg shadow-crypto-orange/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crypto-orange/30 font-medium"
            onClick={() => navigate("/auth?mode=signup")}
          >
            Start Investing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer with animated gradient border */}
      <footer className="relative py-12 border-t border-white/10 mt-auto text-center">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-orange/30 to-transparent"></div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Key Vault &mdash; Powered by Solana
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {['Terms', 'Privacy', 'Support'].map((item, i) => (
            <a key={i} href="#" className="text-sm text-gray-500 hover:text-crypto-orange transition-colors">{item}</a>
          ))}
        </div>
      </footer>

      {/* Global animations styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-glow {
            animation: glow 4s infinite;
          }
          
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1s ease-out;
          }
          
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
          
          .hero-content.active {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </main>
  );
}
