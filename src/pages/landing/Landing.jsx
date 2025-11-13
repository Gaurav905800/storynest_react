import React from "react";
import LandingNavbar from "../../components/landing_com/LandingNavbar";
import HeroSection from "../../components/landing_com/HeroSection";
import FeaturesSection from "../../components/landing_com/FeaturesSection";
import PreviewSection from "../../components/landing_com/PreviewSection";
import TestimonialsSection from "../../components/landing_com/TestimonialsSection";
import AboutSection from "../../components/landing_com/AboutSection";
import ContactSection from "../../components/landing_com/ContactSection";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <PreviewSection />
      <TestimonialsSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default Landing;
