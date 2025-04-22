
import React from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const bgImage = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&q=80";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        background: `linear-gradient(90deg, #0f2027 0%, #2c5364 100%), url(${bgImage}) center center / cover no-repeat`
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-5">
          <Home size={48} className="text-crypto-orange drop-shadow-lg" />
          <span className="text-5xl font-bold text-white tracking-tight">
            Key Vault
          </span>
        </div>
        <p className="text-xl text-white/90 max-w-lg mb-8 text-center">
          A modern crypto time vault. Earn more by locking in your funds securely for 6 or 12 months. Sign up to get started and unlock exclusive yields.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-crypto-orange hover:bg-crypto-orange-light text-white text-lg px-8"
            onClick={() => navigate("/auth?mode=signup")}>
            Sign Up
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8"
            onClick={() => navigate("/auth?mode=login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
