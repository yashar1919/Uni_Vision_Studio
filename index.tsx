import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./src/index.css";

import { printConsoleBrand } from "./src/utils/consoleBrand";
printConsoleBrand();

// Initialize i18n
import "./src/i18n/config";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Navigate to="/blog/fa" replace />} />
      <Route path="/blog/:lang" element={<BlogListPage />} />
      <Route path="/blog/:lang/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
);
