import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import AuthPage from "../pages/auth/AuthPage";
import AddBlog from "../pages/AddBlog";
import Profile from "../pages/profile";
import Foot from "../components/Foot";
import BlogDetail from "../pages/BlogDetail";
import Landing from "../pages/landing/Landing";
import LandingNavbar from "../components/landing_com/LandingNavbar";
import EditBlog from "../pages/EditBlog";

function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className="flex flex-col min-h-screen">
      {isLandingPage ? <LandingNavbar /> : <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Hide footer on auth page */}
      {!isAuthPage && <Foot />}
    </div>
  );
}

// ✅ Main AppRoutes
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
