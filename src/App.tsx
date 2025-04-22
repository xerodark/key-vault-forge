
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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

// AuthPage: simple page allowing login/signup
function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Parse mode from URL
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get("mode");
    if (urlMode === "signup" || urlMode === "login") setMode(urlMode);
  }, []);

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
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-crypto-gray-darker px-4">
      <div className="bg-crypto-gray-dark/80 shadow-xl rounded-xl max-w-sm w-full p-8 border border-crypto-gray-dark/50">
        <h2 className="text-2xl mb-3 font-bold text-white">
          {mode === "signup" ? "Sign Up" : "Log In"} to Key Vault
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email"
            className="rounded px-4 py-2 bg-crypto-gray-darker text-white border border-crypto-gray-dark outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="rounded px-4 py-2 bg-crypto-gray-darker text-white border border-crypto-gray-dark outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            className="bg-crypto-orange hover:bg-crypto-orange-light text-white"
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
        </form>
        {error && (
          <div className="text-red-400 mt-3 text-sm font-medium">{error}</div>
        )}
        {submitted && (
          <div className="text-green-500 mt-3 text-sm">
            {mode === "signup"
              ? "Sign up successful! Please check your email to confirm and log in."
              : "Login successful!"}
          </div>
        )}
        <div className="mt-5 text-center text-crypto-gray-light text-sm">
          {mode === "signup"
            ? (
              <>Already have an account?{" "}
                <button
                  type="button"
                  className="underline hover:text-crypto-orange transition"
                  onClick={() => setMode("login")}
                  disabled={loading}
                >
                  Log In
                </button>
              </>
            ) : (
              <>Don't have an account?{" "}
                <button
                  type="button"
                  className="underline hover:text-crypto-orange transition"
                  onClick={() => setMode("signup")}
                  disabled={loading}
                >
                  Sign Up
                </button>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Listen for changes (always update state)
    const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    // Get current session
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
          {/* Landing page */}
          <Route path="/" element={<LandingPage />} />
          {/* Auth */}
          <Route path="/auth" element={<AuthPage />} />
          {/* Protected routes */}
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
