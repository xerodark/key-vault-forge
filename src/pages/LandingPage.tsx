
import React from "react";
import LandingHero from "@/components/landing/LandingHero";
import FeatureBentoGrid from "@/components/landing/FeatureBentoGrid";
import { Bitcoin, Shield, Key, Lock } from "lucide-react";

// Animated/blurred icons in the landing bg
const iconStyle =
  "absolute z-0 pointer-events-none opacity-5 blur-[1.5px] animate-pulse";
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-crypto-gray-darker flex flex-col relative overflow-x-hidden">
      {/* Futuristic gradient overlays */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-[-120px] top-[-120px] w-[600px] h-[400px] bg-gradient-to-br from-crypto-orange via-purple-700/60 to-blue-500/30 blur-[110px] opacity-25 animate-fade-in" />
        <div className="absolute right-[-70px] top-[8%] w-[340px] h-[280px] bg-gradient-to-br from-crypto-orange/40 via-blue-300/30 to-purple-700/20 blur-2xl opacity-20 animate-fade-in delay-150" />
        <div className="absolute right-[-220px] bottom-[-60px] w-[550px] h-[340px] bg-gradient-to-tl from-green-400/10 via-cyan-300/10 to-blue-600/10 blur-[120px] opacity-40 animate-fade-in delay-200" />
        {/* Subtle crypto icons */}
        <Shield size={200} className={iconStyle + " left-[4%] top-[22%] text-crypto-orange animate-fade-in"} style={{ animationDelay: "0.5s" }} />
        <Bitcoin size={130} className={iconStyle + " right-[8%] top-[20%] text-yellow-400 animate-fade-in"} style={{ animationDelay: "1.3s" }} />
        <Lock size={110} className={iconStyle + " left-[38%] bottom-[14%] text-cyan-300 animate-fade-in"} style={{ animationDelay: "1.7s" }} />
        <Key size={100} className={iconStyle + " right-[11%] bottom-[13%] text-purple-400 animate-fade-in"} style={{ animationDelay: "2.1s" }} />
      </div>
      <LandingHero />
      <FeatureBentoGrid />
      {/* Extra section at bottom? */}
      <section className="w-full py-12 md:py-20 flex flex-col items-center gap-4 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3 animate-fade-in">
          Ready to enter the vault?
        </h2>
        <p className="text-lg md:text-xl text-crypto-gray-light max-w-2xl text-center mb-6 animate-fade-in delay-100">
          Set your crypto up for success today. Simple onboarding. Secure forever.
        </p>
      </section>
      {/* Footer */}
      <footer className="flex justify-center items-center py-4 text-crypto-gray-light text-sm bg-crypto-gray-dark/90 border-t border-white/10 mt-auto z-10">
        &copy; {new Date().getFullYear()} Key Vault &mdash; Powered by Solana
      </footer>
    </main>
  );
}
