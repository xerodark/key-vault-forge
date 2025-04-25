
import React from "react";
import { Shield, Key, Bitcoin, Lock, Zap } from "lucide-react";

const iconStyle =
  "absolute opacity-10 blur-[2px] animate-pulse duration-3000 pointer-events-none";

export default function AuthPageBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-crypto-gray-dark via-crypto-gray-darker to-crypto-gray-dark">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC4zIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      {/* Floating icons */}
      <Shield
        size={120}
        className={iconStyle + " left-[8%] top-[16%] text-crypto-orange animate-float"}
        style={{ animationDelay: "0.2s" }}
      />
      <Bitcoin
        size={96}
        className={iconStyle + " right-[10%] top-[24%] text-yellow-400 animate-float"}
        style={{ animationDelay: "0.8s" }}
      />
      <Lock
        size={110}
        className={iconStyle + " left-[18%] bottom-[18%] text-crypto-blue animate-float"}
        style={{ animationDelay: "1.25s" }}
      />
      <Key
        size={100}
        className={iconStyle + " right-[12%] bottom-[13%] text-crypto-purple animate-float"}
        style={{ animationDelay: "1.7s" }}
      />
      <Zap
        size={70}
        className={iconStyle + " left-[40%] top-[30%] text-green-400 animate-float"}
        style={{ animationDelay: "2.5s" }}
      />
      
      {/* Animated glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-crypto-purple/5 blur-[100px] animate-pulse opacity-60" 
        style={{animationDuration: '10s'}} />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-crypto-orange/5 blur-[120px] animate-pulse opacity-50" 
        style={{animationDuration: '15s'}} />
      <div className="absolute top-[50%] right-[5%] w-[250px] h-[250px] rounded-full bg-crypto-blue/5 blur-[80px] animate-pulse opacity-70" 
        style={{animationDuration: '12s'}} />
        
      {/* Subtle stars */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 8 + 3}s`,
          }}
        />
      ))}
      
      {/* Main radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-crypto-gray-dark/70 to-transparent" />
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
