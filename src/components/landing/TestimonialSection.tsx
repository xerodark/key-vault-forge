
import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  { 
    quote: "Key Vault has revolutionized how I think about crypto investments. The yields are incredible, and I sleep soundly knowing my assets are secure.", 
    name: "Sarah K.", 
    title: "Tech Entrepreneur",
    avatar: "/placeholder.svg" 
  },
  { 
    quote: "After trying multiple platforms, I've finally found a solution that balances high returns with institutional-grade security. Key Vault is in a league of its own.", 
    name: "Michael R.", 
    title: "Financial Advisor",
    avatar: "/placeholder.svg" 
  },
  { 
    quote: "The transparency and real-time analytics make Key Vault stand out. I can track my investments with confidence and the returns have consistently exceeded my expectations.", 
    name: "Jessica T.", 
    title: "Retail Investor",
    avatar: "/placeholder.svg" 
  }
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
      
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <section id="testimonials" className="relative z-10 py-28 px-5" ref={sectionRef}>
      <div className="absolute left-[5%] top-[10%] w-[30%] h-[40%] rounded-full bg-crypto-purple/10 blur-[100px] opacity-20" />
      <div className="absolute right-[10%] bottom-[20%] w-[25%] h-[30%] rounded-full bg-crypto-blue/10 blur-[120px] opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what our investors have to say about their experience with Key Vault.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
