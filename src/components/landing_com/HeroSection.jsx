import React from "react";
import image from "../../assets/background.svg";
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-[270px] mt-16 hero">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            StoryNest
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Where your stories find their home. Share your thoughts, connect with
          readers, and build your writing community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
            // onClick={() => navigate("/add-blog")}
          >
            Start Writing Now
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition duration-300">
            Explore Stories
          </button>
        </div>

        {/* 🔹 Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-purple-200">Active Writers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-purple-200">Published Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1M+</div>
            <div className="text-purple-200">Monthly Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
