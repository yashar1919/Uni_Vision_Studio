
import React, { useState } from 'react';
import Section from '../components/Section';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
            Let's build something extraordinary together.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
            Have a specific project in mind or just want to explore the possibilities? We're here to help you navigate your digital transformation.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">Email us</p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white">hello@univision.studio</p>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">Office</p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white">Central Studio, Digital Park, 10100</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-2 dark:text-white">Message Sent!</h4>
              <p className="text-zinc-500 dark:text-zinc-400">
                Thank you for reaching out. A studio representative will contact you shortly.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="mt-8 text-sm font-bold text-brand-600"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center px-8 py-4 bg-brand-600 text-white rounded-xl font-bold transition-all hover:bg-brand-700 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
