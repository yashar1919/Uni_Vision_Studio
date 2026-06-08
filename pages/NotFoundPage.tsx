import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useTheme } from "../src/hooks/useTheme";

const NotFoundPage: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        theme === "dark"
          ? "bg-zinc-950 text-zinc-50"
          : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-500">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p
          className={`mb-8 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
        >
          The page you are looking for does not exist or was moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white"
        >
          <Home size={16} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
