
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LandingNavbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="pulse-ring"></div>
            <Shield size={32} className="text-crypto-orange relative z-10" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-gradient-orange">Key</span>
            <span className="text-white"> Vault</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="border border-glass-border hover:bg-glass-light transition-all"
            onClick={() => navigate('/auth?mode=login')}
          >
            Log In
          </Button>
          <Button 
            className="bg-gradient-to-r from-crypto-orange to-crypto-orange-light hover:shadow-glow-sm transition-all"
            onClick={() => navigate('/auth?mode=signup')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
