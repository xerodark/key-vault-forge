import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import AuthPageBackground from "./pages/AuthPageBackground";
import AuthPageHeader from "./pages/AuthPageHeader";

function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          <AuthForm
            mode={mode}
            setMode={setMode}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </div>
      </div>
    </div>
  );
}

function AuthForm({
  mode,
  setMode,
  email,
  setEmail,
  password,
  setPassword,
  error,
  setError,
  loading,
  setLoading,
  submitted,
  setSubmitted,
}: any) {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

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

function RequireAuth({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any | null>(null);
  const location = useLocation();

  useEffect(() => {
    const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div className="min-h-screen bg-crypto-gray-darker text-white flex items-center justify-center">Loading...</div>;
  if (!session) return <Navigate to="/auth" state={{ from: location }} replace />;
  return <>{children}</>;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Index />
              </RequireAuth>
            }
          />
          <Route
            path="/deposit"
            element={
              <RequireAuth>
                <Deposit />
              </RequireAuth>
            }
          />
          <Route
            path="/withdraw"
            element={
              <RequireAuth>
                <Withdraw />
              </RequireAuth>
            }
          />
          <Route
            path="/transactions"
            element={
              <RequireAuth>
                <Transactions />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
