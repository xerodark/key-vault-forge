
import React from "react";
import { Shield } from "lucide-react";

export default function AuthPageHeader({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <div className="flex items-center gap-2">
        <Shield size={40} className="text-crypto-orange drop-shadow-lg animate-pulse" />
        <span className="text-3xl font-extrabold text-white tracking-tight">
          Key Vault
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-gradient-orange">
        {mode === "signup" ? "Create your secure vault" : "Welcome back"}
      </h2>
    </div>
  );
}
