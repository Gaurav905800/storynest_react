import { useNavigate } from "react-router-dom";

function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      onClick={() => navigate(`/blog/${post._id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="h-56 sm:h-52 md:h-65 lg:h-70 w-full overflow-hidden rounded-xl">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-400 text-white">
            No Image
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {post.content?.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <span>{post.tags?.[0] || "Unknown"}</span>
          <span>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
