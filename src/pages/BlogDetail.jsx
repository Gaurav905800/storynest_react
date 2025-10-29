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
    console.log("Blog ID from params:", id);
    dispatch(detailBlog(id)).then((res) => {
      console.log("Detail Blog Response:", res);
    });
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
    <div className="min-h-screen max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">{selectedBlog.title}</h1>

      {selectedBlog.image && (
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full rounded-xl mb-6"
        />
      )}

      <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
        <span>{selectedBlog.category}</span>
        <span>
          {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {selectedBlog.content}
      </p>
    </div>
  );
};

export default BlogDetail;
