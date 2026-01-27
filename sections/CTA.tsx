
import React from 'react';
import Section from '../components/Section';

const CTA: React.FC = () => {
  return (
    <Section className="py-0">
      <div className="bg-brand-600 rounded-[2rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
        
        <h3 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
          Ready to elevate your digital presence?
        </h3>
        <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto mb-12 relative z-10">
          Let's discuss how UniVision Studio can bring your vision to life with professional engineering and world-class design.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-5 bg-white text-brand-600 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 relative z-10"
        >
          Start a Conversation
        </a>
      </div>
    </Section>
  );
};

export default CTA;
