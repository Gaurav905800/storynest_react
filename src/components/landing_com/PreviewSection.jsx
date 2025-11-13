import React from "react";

const PreviewSection = () => {
  const blogPosts = [
    {
      title: "The Art of Storytelling",
      excerpt:
        "Discover how to craft compelling narratives that captivate your readers from the first sentence...",
      author: "Sarah Johnson",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVWOXXPx1T5N42hIC5EEtJAAd4qKY1hd9Gg&s",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Writing Tips",
    },
    {
      title: "Building Your Writing Habit",
      excerpt:
        "Practical strategies to develop a consistent writing routine that actually sticks...",
      author: "Mike Chen",
      imageUrl:
        "https://media.cnn.com/api/v1/images/stellar/prod/211124144641-5-steps-habit-builder-wellness-112421.jpg?q=x_4,y_88,h_2246,w_3991,c_crop/h_833,w_1480",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Productivity",
    },
    {
      title: "Finding Your Unique Voice",
      excerpt:
        "Learn how to develop and refine your authentic writing style that sets you apart...",
      author: "Emma Rodriguez",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/57bbc7a6725e25f9d006b655/1625457273708-9TV7RE5L9KRTGXDUTLQ8/authentic-singing-voice-unique-singer-tone.jpg",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Creative Writing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Recent Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by what our writers are creating on StoryNest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 w-full relative overflow-hidden rounded-xl shadow-md">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title || "Blog Image"}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white font-semibold">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Explore All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
