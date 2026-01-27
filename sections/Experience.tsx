import React from 'react';
import Section from '../components/Section';
// Import Code from lucide-react to fix the 'Cannot find name Code' error
import { Shield, Globe2, Layers, Code } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-zinc-950">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-4">
            Proven Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Trusted with High-Stakes Projects
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our portfolio spans international borders, covering diverse industries from finance to healthcare. We don't just build features; we build reliability.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Globe2 size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Global Deployments</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                We have successfully launched applications used across multiple countries, handling localization and international standard compliance.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                <Shield size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Enterprise Standards</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Our team integrates seamlessly with existing enterprise architectures, ensuring secure and high-availability solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400">
                <Layers size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Multi-Platform Ecosystems</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                From web dashboards to companion mobile apps and desktop terminals, we create unified digital ecosystems.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                {/* Code component is now properly imported */}
                <Code size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Modern Tech Debt Reduction</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Extensive experience in refactoring legacy codebases into modern, maintainable React and Node environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;