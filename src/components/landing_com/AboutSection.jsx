import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About StoryNest
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              StoryNest was born from a simple belief: every writer deserves a
              beautiful, supportive platform to share their voice with the
              world. We're more than just a blogging platform - we're a
              community of storytellers, dreamers, and creators.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower writers of all backgrounds to share
              their stories, connect with readers, and build meaningful careers
              doing what they love.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To create the world's most supportive platform for writers and
                  readers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Creativity, Community, Authenticity, and Empowerment.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="mb-6 opacity-90">
                Become part of a growing community of 10,000+ writers who are
                sharing their stories and building their audiences.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
