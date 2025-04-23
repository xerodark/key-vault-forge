
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Users, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-crypto-gray-darker via-[#13131b] to-[#1d1a27] flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-5 md:px-8 pt-28 pb-32 overflow-hidden text-center">
        {/* Gradient Backgrounds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[100px]" />
          <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[25%] w-[600px] h-[400px] rounded-full bg-crypto-orange/5 blur-[120px]" />
        </div>

        {/* Glow effect behind logo */}
        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full bg-crypto-orange/5 blur-[60px]"></div>

        {/* Logo Section */}
        <div className="relative mb-10">
          <div className="mb-6 flex items-center justify-center">
            <Shield size={70} className="text-crypto-orange drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-7">
            Key Vault
          </h1>
        </div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-crypto-orange mb-8 max-w-4xl mx-auto leading-tight tracking-tight">
          The Future of Secure Crypto Investing
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Grow your wealth safely and earn exclusive, industry-leading yields by locking your funds with Key Vault—Solana-powered, fully non-custodial, and designed for every investor.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-16 justify-center z-10">
          <Button
            size="lg"
            className="h-[56px] min-w-[200px] bg-crypto-orange hover:bg-crypto-orange-light text-lg rounded-lg"
            onClick={() => navigate("/auth?mode=signup")}
          >
            Start Investing
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-[56px] min-w-[200px] border-gray-700 hover:bg-gray-800 text-lg rounded-lg"
            onClick={() => navigate("/auth?mode=login")}
          >
            Log In
          </Button>
        </div>
        
        {/* Security Badge */}
        <div className="flex items-center justify-center text-gray-400 text-sm">
          <Shield size={16} className="text-green-400 mr-2" />
          <span>Fully non-custodial • Powered by Solana • 24/7 Smart Vault Security</span>
        </div>
      </section>
      
      {/* Features Grid Section */}
      <section className="relative z-10 px-5 md:px-10 lg:px-20 xl:px-40 pb-24 -mt-20 md:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 md:gap-7">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#1E2133]/80 to-[#161923]/80 backdrop-blur-sm border border-white/5 shadow-xl ${feature.className}`}
            >
              {/* Icon with background */}
              <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-24 flex flex-col items-center text-center px-5">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-crypto-orange/5 blur-[100px]" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to secure your financial future?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Start your journey with Key Vault today and experience the next generation of crypto investing.
        </p>
        <Button
          size="lg"
          className="h-[56px] px-8 bg-crypto-orange hover:bg-crypto-orange-light text-lg rounded-lg"
          onClick={() => navigate("/auth?mode=signup")}
        >
          Start Investing
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 mt-auto text-center text-gray-400 text-sm px-5">
        &copy; {new Date().getFullYear()} Key Vault &mdash; Powered by Solana
      </footer>
    </main>
  );
}
