import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import AuthPage from "../pages/auth/AuthPage";
import AddBlog from "../pages/AddBlog";
import Profile from "../pages/profile";
import Foot from "../components/Foot";
import BlogDetail from "../pages/BlogDetail";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default AppRoutes;
