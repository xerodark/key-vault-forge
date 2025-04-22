
import React from "react";
import { Shield, Key, Bitcoin, Lock, Zap } from "lucide-react";

// Subtle, blurred crypto icons using Lucide, positioned in the background
const iconStyle =
  "absolute opacity-10 blur-[2px] animate-pulse duration-3000 pointer-events-none";
export default function AuthPageBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-crypto-gray-dark via-crypto-gray-darker to-crypto-gray-dark">
      <Shield
        size={120}
        className={iconStyle + " left-[8%] top-[16%] text-crypto-orange animate-fade-in"}
        style={{ animationDelay: "0.2s" }}
      />
      <Bitcoin
        size={96}
        className={iconStyle + " right-[10%] top-[24%] text-yellow-400 animate-fade-in"}
        style={{ animationDelay: "0.8s" }}
      />
      <Lock
        size={110}
        className={iconStyle + " left-[18%] bottom-[18%] text-cyan-300 animate-fade-in"}
        style={{ animationDelay: "1.25s" }}
      />
      <Key
        size={100}
        className={iconStyle + " right-[12%] bottom-[13%] text-purple-400 animate-fade-in"}
        style={{ animationDelay: "1.7s" }}
      />
      <Zap
        size={70}
        className={iconStyle + " left-[40%] top-[30%] text-green-400 animate-fade-in"}
        style={{ animationDelay: "2.5s" }}
      />
      {/* Main radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-crypto-orange/20 via-crypto-gray-dark/70 to-transparent" />
    </div>
  );
}
