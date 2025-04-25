
import React from "react";
import LandingHero from "@/components/landing/LandingHero";
import FeatureBentoGrid from "@/components/landing/FeatureBentoGrid";
import TestimonialSection from "@/components/landing/TestimonialSection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingNavbar from "@/components/landing/LandingNavbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a11] via-[#120f19] to-[#0d0d14] overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-50%] left-[10%] w-[80%] h-[70%] rounded-full bg-crypto-purple/20 blur-[120px] opacity-30 animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[60%] rounded-full bg-crypto-blue/15 blur-[100px] opacity-20 animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] rounded-full bg-crypto-orange/10 blur-[130px] opacity-30 animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <LandingNavbar />
      <LandingHero />
      <FeatureBentoGrid />
      <TestimonialSection />
      <LandingFooter />
    </main>
  );
}
