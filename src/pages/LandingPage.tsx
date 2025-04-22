import React from "react";
import LandingHero from "@/components/landing/LandingHero";
import FeatureBentoGrid from "@/components/landing/FeatureBentoGrid";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-crypto-gray-darker flex flex-col relative">
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
};

export default LandingPage;
