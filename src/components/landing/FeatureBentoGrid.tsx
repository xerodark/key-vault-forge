import React, { useEffect, useRef } from "react";
import { Shield, Users, BarChart, Clock, DollarSign } from "lucide-react";

const features = [
  {
    title: "Security You Can Trust",
    description:
      "Our Solana-based vault leverages advanced cryptography and non-custodial access for total fund protection.",
    icon: <Shield size={30} className="text-crypto-orange" />,
    bg: "bg-gradient-to-br from-[#23283b] to-[#1a1f2c]",
    row: "row-span-2",
  },
  {
    title: "Industry-Leading Yields",
    description:
      "Lock your funds for 6 or 12 months and earn yields higher than a typical savings account.",
    icon: <DollarSign size={28} className="text-green-400" />,
    bg: "bg-gradient-to-br from-green-900/80 to-green-700/40",
    col: "col-span-2",
  },
  {
    title: "Instant Access",
    description:
      "Deposit anytime, withdraw when your lock-in ends. All fully on-chain, 24/7.",
    icon: <Clock size={24} className="text-cyan-300" />,
    bg: "bg-gradient-to-br from-purple-800 to-crypto-gray-dark",
  },
  {
    title: "For All Investors",
    description:
      "Onboard in minutes. Our platform is simple, inclusive, and built for both newcomers and pros.",
    icon: <Users size={28} className="text-violet-300" />,
    bg: "bg-gradient-to-br from-[#363159]/80 to-[#22243c]/90",
  },
  {
    title: "Realtime Analytics",
    description:
      "Track vault performance and returns with beautiful, transparent charts and insights.",
    icon: <BarChart size={25} className="text-blue-300" />,
    bg: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
  },
];

const FeatureBentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for revealing on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('feature-visible');
              }, index * 120); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    
    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);
  
  return (
    <section className="max-w-7xl w-full mx-auto relative px-4 md:px-0 -mt-12 md:-mt-24 z-10" ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-6 md:gap-8">
        {/* Large security card */}
        <div 
          className={`feature-card rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start md:col-span-2 ${features[0].bg} ${features[0].row} border border-white/5 hover:border-crypto-orange/20 transition-all duration-500 transform hover:translate-y-[-5px] opacity-0`}
          style={{transitionDelay: '0ms'}}
        >
          <div className="p-3 rounded-full bg-white/5 border border-white/10">
            {features[0].icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mt-4 mb-3">{features[0].title}</h3>
            <p className="text-crypto-gray-light text-base mb-2">{features[0].description}</p>
          </div>
        </div>
        
        {/* Yield card */}
        <div 
          className={`feature-card rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start ${features[1].bg} ${features[1].col} border border-white/5 hover:border-crypto-orange/20 transition-all duration-500 transform hover:translate-y-[-5px] opacity-0`}
          style={{transitionDelay: '120ms'}}
        >
          <div className="p-3 rounded-full bg-white/5 border border-white/10">
            {features[1].icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mt-4 mb-2">{features[1].title}</h3>
            <p className="text-crypto-gray-light text-base">{features[1].description}</p>
          </div>
        </div>
        
        {/* Small cards */}
        {features.slice(2).map((feature, index) => (
          <div 
            key={index}
            className={`feature-card rounded-2xl p-6 shadow-lg flex flex-col justify-between items-start ${feature.bg} border border-white/5 hover:border-crypto-orange/20 transition-all duration-500 transform hover:translate-y-[-5px] opacity-0`}
            style={{transitionDelay: `${(index + 2) * 120}ms`}}
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">{feature.title}</h3>
              <p className="text-crypto-gray-light text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .feature-card {
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
          }
          
          .feature-card:hover {
            box-shadow: 0 20px 30px -8px rgba(0, 0, 0, 0.5), 0 15px 15px -10px rgba(0, 0, 0, 0.3);
          }
          
          .feature-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </section>
  );
};

export default FeatureBentoGrid;
