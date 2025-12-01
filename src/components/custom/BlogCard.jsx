import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { likeBlog } from "../../redux/slice/blogSlice";

function BlogCard({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  const isLiked = post.likedUsers?.includes(user?._id);

  const handleLike = (e) => {
    e.stopPropagation(); // prevents card navigation on button click
    dispatch(likeBlog({ id: post._id, token }));
  };

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

        {/* Bottom Row */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <span>{post.tags?.[0] || "Unknown"}</span>

          {/* ❤️ Like Button */}
          <div className="flex items-center gap-1" onClick={handleLike}>
            <Heart
              size={20}
              className={`cursor-pointer ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
            <span className="text-gray-700">{post.likes || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
