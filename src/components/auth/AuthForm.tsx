
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  mode: "login" | "signup";
  setMode: (mode: "login" | "signup") => void;
}

export function AuthForm({ mode, setMode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      let result;
      if (mode === "signup") {
        result = await supabase.auth.signUp({ email, password });
      } else {
        result = await supabase.auth.signInWithPassword({ email, password });
      }
      if (result.error) throw new Error(result.error.message);
      setSubmitted(true);
      setTimeout(() => navigate("/dashboard", { replace: true }), 800);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input
        type="email"
        required
        placeholder="Email"
        className="rounded bg-crypto-gray-darker text-white border border-crypto-orange/20 px-4 py-3 outline-none placeholder:text-crypto-gray-light transition focus:border-crypto-orange"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        autoComplete="username"
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="rounded bg-crypto-gray-darker text-white border border-crypto-orange/20 px-4 py-3 outline-none placeholder:text-crypto-gray-light transition focus:border-crypto-orange"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        autoComplete={mode === "login" ? "current-password" : "new-password"}
      />
      <Button
        type="submit"
        className="bg-crypto-orange hover:bg-crypto-orange-light text-white font-semibold shadow-lg py-3 text-base tracking-widest transition-all"
        disabled={loading}
      >
        {loading
          ? mode === "signup"
            ? "Signing Up..."
            : "Logging In..."
          : mode === "signup"
          ? "Sign Up"
          : "Log In"}
      </Button>
      {error && (
        <div className="text-red-400 text-center font-semibold animate-fade-in">{error}</div>
      )}
      {submitted && (
        <div className="text-green-500 text-center font-medium">
          {mode === "signup"
            ? "Sign up successful! Please check your email."
            : "Login successful! Redirecting..."}
        </div>
      )}
      <div className="mt-0 text-center text-crypto-gray-light text-sm">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="underline hover:text-crypto-orange font-semibold"
              onClick={() => setMode("login")}
              disabled={loading}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            Don{"'"}t have an account?{" "}
            <button
              type="button"
              className="underline hover:text-crypto-orange font-semibold"
              onClick={() => setMode("signup")}
              disabled={loading}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </form>
  );
}
