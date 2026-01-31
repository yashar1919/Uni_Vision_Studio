import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a
            href="#home"
            className="text-xl font-bold text-zinc-900 dark:text-white"
          >
            UniVision<span className="text-violet-500">.</span>Studio
          </a>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Engineering the future of digital products.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-violet-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            LinkedIn
          </a>
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} UniVision Studio. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
