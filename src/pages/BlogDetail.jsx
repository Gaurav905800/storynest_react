import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailBlog } from "../redux/slice/blogSlice";
import Loader from "../components/custom/Loader";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedBlog, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(detailBlog(id));
  }, [id, dispatch]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  if (error)
    return <p className="text-center text-red-500 mt-20">Error: {error}</p>;

  if (!selectedBlog)
    return (
      <p className="text-center text-gray-500 mt-20">
        Blog not found or failed to load.
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto py-10">
        {/* Category + Date */}
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            {selectedBlog.category}
          </span>
          <span>
            {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
          {selectedBlog.title}
        </h1>

        {/* Image */}
        {selectedBlog.image && (
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full max-h-[600px] object-cover rounded-xl mb-8 shadow"
          />
        )}

        {/* Content */}
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line tracking-wide pb-10">
          {selectedBlog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
