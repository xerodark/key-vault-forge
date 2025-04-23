
import React, { useState, useEffect } from "react";
import { AuthForm } from "./AuthForm";
import AuthPageBackground from "@/pages/AuthPageBackground";
import AuthPageHeader from "@/pages/AuthPageHeader";

export function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get("mode");
    if (urlMode === "signup" || urlMode === "login") setMode(urlMode);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-crypto-gray-darker via-[#13131b] to-[#1d1a27]">
      <AuthPageBackground />
      
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[25%] w-[500px] h-[300px] rounded-full bg-crypto-orange/5 blur-[120px]" />
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gradient-to-br from-[#1E2133]/90 to-[#161923]/90 backdrop-blur-lg shadow-2xl rounded-2xl border border-white/5 p-8 sm:p-10">
          <AuthPageHeader mode={mode} />
          <AuthForm mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}
