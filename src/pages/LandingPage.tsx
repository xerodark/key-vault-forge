
import React from "react";
import LandingHero from "@/components/landing/LandingHero";
import FeatureBentoGrid from "@/components/landing/FeatureBentoGrid";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a11] via-[#120f19] to-[#0d0d14] overflow-hidden">
      <LandingHero />
      <FeatureBentoGrid />
      <TestimonialSection />
      
      {/* Footer */}
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
    </main>
  );
}
