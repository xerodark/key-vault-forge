
import React from "react";
import { Shield } from "lucide-react";

export default function AuthPageHeader({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-crypto-orange via-crypto-purple to-crypto-blue opacity-75 blur animate-pulse"></div>
          <div className="relative bg-black/20 p-2 rounded-full">
            <Shield size={36} className="text-crypto-orange drop-shadow-lg animate-pulse" />
          </div>
        </div>
        <span className="text-3xl font-extrabold text-white tracking-tight">
          Key Vault
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-gradient-mixed mt-2">
        {mode === "signup" ? "Create your secure vault" : "Welcome back"}
      </h2>
    </div>
  );
}
