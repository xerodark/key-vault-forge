

import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 md:pb-28 bg-crypto-gray-darker overflow-hidden">
      {/* Decorative glowy gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[1100px] h-[390px] bg-gradient-to-tr from-crypto-orange/30 via-purple-700/40 to-blue-500/20 blur-3xl opacity-40 animate-fade-in" />
        <div className="absolute bottom-[-135px] right-[-120px] w-[410px] h-[250px] bg-gradient-to-tl from-green-400/15 via-purple-600/20 to-blue-500/10 blur-3xl opacity-35 animate-fade-in delay-100" />
        <div className="absolute left-[4%] top-[37%] w-16 h-16 rounded-full bg-crypto-orange/30 blur-2xl opacity-60 animate-pulse" />
        <div className="absolute right-[6%] bottom-[6%] w-14 h-14 rounded-full bg-purple-600/30 blur-2xl opacity-40 animate-pulse delay-150" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl text-center">
        {/* Logo & headline */}
        <div className="flex flex-row gap-3 items-center justify-center mb-6">
          <Shield size={46} className="text-crypto-orange drop-shadow-[0_6px_20px_rgba(251,146,60,0.55)] animate-pulse" />
          <span className="text-4xl md:text-5xl font-bold text-white tracking-tight font-[Inter]">
            Key Vault
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-orange mb-4 leading-tight drop-shadow-lg animate-fade-in">
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
            <TrendingUp size={22} className="ml-2" />
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
        <div className="flex items-center gap-2 justify-center text-crypto-gray-light text-xs mt-0">
          <Award size={19} className="text-green-400" />
          <span>
            Fully non-custodial • Powered by Solana • 24/7 Smart Vault Security
          </span>
        </div>
      </div>
    </section>
  );
}
