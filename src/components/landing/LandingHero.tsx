
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 md:pb-28 bg-crypto-gray-darker overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-crypto-orange/30 to-purple-700/30 blur-3xl opacity-40" />
        <div className="absolute bottom-[-150px] right-[-200px] w-[500px] h-[300px] bg-gradient-to-tl from-green-400/10 via-purple-600/10 to-blue-500/10 blur-3xl opacity-35" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl text-center">
        {/* Logo & headline */}
        <div className="flex flex-row gap-3 items-center justify-center mb-6">
          <Shield size={40} className="text-crypto-orange drop-shadow-xl" />
          <span className="text-4xl md:text-5xl font-bold text-white tracking-tight font-[Inter]">
            Key Vault
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-orange mb-4 leading-tight animate-fade-in">
          The Future of Secure Crypto Investing
        </h1>
        {/* Subheadline */}
        <p className="text-base md:text-xl text-crypto-gray-light mb-8 max-w-2xl font-medium animate-fade-in delay-150">
          Grow your wealth safely and earn exclusive, industry-leading yields by locking your funds with Key Vault—Solana-powered, fully non-custodial, and designed for every investor.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center animate-fade-in delay-200">
          <Button
            size="lg"
            className="bg-crypto-orange hover:bg-crypto-orange-light transition-colors text-lg shadow-lg px-8"
            onClick={() => navigate("/auth?mode=signup")}
          >
            Start Investing
            <TrendingUp size={20} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 shadow"
            onClick={() => navigate("/auth?mode=login")}
          >
            Log In
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-center text-crypto-gray-light text-xs mt-1">
          <Award size={18} className="text-green-400" />
          <span>Fully non-custodial • Powered by Solana • 24/7 Smart Vault Security</span>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
