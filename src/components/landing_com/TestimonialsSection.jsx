import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Fiction Writer",
      content:
        "StoryNest transformed my writing journey. The community support and intuitive interface helped me publish my first novel!",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Travel Blogger",
      content:
        "I've tried many blogging platforms, but StoryNest's analytics and monetization features are unmatched. My income doubled in 3 months!",
      avatar: "👩‍💻",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Tech Writer",
      content:
        "The clean writing interface and markdown support make technical writing so much easier. My readers love the reading experience too.",
      avatar: "👨‍🔬",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Writers Say About StoryNest
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of writers who have found their home on StoryNest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl mb-4">{testimonial.avatar}</div>
              <div className="text-yellow-400 text-lg mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-purple-600 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
