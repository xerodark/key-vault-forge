
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  { 
    quote: "Key Vault has revolutionized how I think about crypto investments. The yields are incredible, and I sleep soundly knowing my assets are secure.", 
    name: "Sarah K.", 
    title: "Tech Entrepreneur"
  },
  { 
    quote: "After trying multiple platforms, I've finally found a solution that balances high returns with institutional-grade security. Key Vault is in a league of its own.", 
    name: "Michael R.", 
    title: "Financial Advisor"
  },
  { 
    quote: "The transparency and real-time analytics make Key Vault stand out. I can track my investments with confidence and the returns have consistently exceeded my expectations.", 
    name: "Jessica T.", 
    title: "Retail Investor"
  }
];

const TestimonialSection = () => (
  <section className="relative z-10 py-24 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Trusted by Thousands</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Hear what our investors have to say about their experience with Key Vault.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
