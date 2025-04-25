
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "Pricing", href: "#pricing" },
      { name: "Roadmap", href: "#roadmap" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "API", href: "/api" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "Licenses", href: "/licenses" },
    ]
  },
];

export default function LandingFooter() {
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-orange/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={32} className="text-crypto-orange" />
              <span className="text-2xl font-bold text-white">Key Vault</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Revolutionizing crypto investments with secure, high-yield solutions for every investor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-crypto-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto-orange transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-crypto-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Key Vault &mdash; Powered by Solana
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-crypto-orange transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-crypto-orange transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-crypto-orange transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
