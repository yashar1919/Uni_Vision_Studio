
import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-4">
            Our Studio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            Committed to Quality, Built for Scalability
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed">
            At UniVision Studio, we aren't just developers; we are digital architects. Our studio-based team of experienced developers and designers focuses on crafting solutions that don't just work—they excel.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            We specialize in building scalable and maintainable applications using modern tech stacks. From international enterprises to high-growth startups, we bring professional rigor to every line of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">Studio Focus</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Our core team is in-house, ensuring seamless communication and consistent output quality across all projects.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">Scalable Tech</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              We build with the future in mind, selecting frameworks and tools that allow your product to grow with your user base.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">Expert Design</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Design is more than aesthetics. We create user journeys that are intuitive, accessible, and conversion-optimized.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">Agile Delivery</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Our professional project management ensures transparent timelines and iterative feedback loops for perfect results.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
