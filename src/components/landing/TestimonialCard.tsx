
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

const TestimonialCard = ({ quote, name, title, avatar }: TestimonialCardProps) => {
  return (
    <div className="glass-card h-full p-6 rounded-2xl flex flex-col justify-between group hover:shadow-glow-sm transition-all duration-500 transform hover:-translate-y-1">
      <div>
        <Quote className="h-8 w-8 text-crypto-purple/70 mb-4" />
        <p className="text-white/90 text-lg mb-6 leading-relaxed">{quote}</p>
      </div>
      
      <div className="flex items-center">
        {avatar && (
          <div className="relative mr-4">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-crypto-orange via-crypto-purple to-crypto-blue opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <img src={avatar} alt={`${name} avatar`} className="object-cover w-full h-full" />
            </div>
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
