
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AuthPageBackground />
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gradient-to-br from-crypto-gray-dark via-crypto-gray-darker/80 to-crypto-gray-dark/80 shadow-2xl rounded-2xl border border-crypto-orange/20 p-8 sm:p-10">
          <AuthPageHeader mode={mode} />
          <AuthForm mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}
