import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "📝",
      title: "Easy Writing Interface",
      description:
        "Clean, distraction-free writing environment with markdown support and real-time preview.",
    },
    {
      icon: "🎨",
      title: "Beautiful Themes",
      description:
        "Choose from multiple beautiful themes to make your blog stand out and reflect your style.",
    },
    {
      icon: "👥",
      title: "Community Engagement",
      description:
        "Connect with readers through comments, likes, and direct messaging features.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Track your readership, engagement metrics, and audience growth with detailed analytics.",
    },
    {
      icon: "💰",
      title: "Monetization Options",
      description:
        "Earn from your writing through subscriptions, tips, and sponsored content opportunities.",
    },
    {
      icon: "🔒",
      title: "Privacy Control",
      description:
        "Full control over your content visibility with public, private, or subscriber-only options.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help writers focus on what they do
            best - creating amazing content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
