import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/slice/blogSlice";
import Button from "../components/custom/Button";
import Loader from "../components/custom/Loader";
import { Search } from "lucide-react";
import BlogCard from "../components/custom/BlogCard";

function Home() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const { blogs, loading, error, totalPages } = useSelector(
    (state) => state.blogs
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const BLOGS_PER_PAGE = 10;

  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Health",
    "Education",
    "Finance",
    "Sports",
  ];

  useEffect(() => {
    dispatch(fetchBlogs({ page, limit: BLOGS_PER_PAGE }));
  }, [dispatch, page]);

  const allBlogs = Array.isArray(blogs) ? blogs : blogs?.data || [];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const categorizedBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  const filteredBlogs = categorizedBlogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && allBlogs.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-medium">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Explore Great Reads
      </h1>
      <p className="text-center text-gray-600 mb-10 text-lg">
        The latest insights from our community.
      </p>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blogs by title or content..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full py-3 pl-12 pr-4 text-gray-700 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 transition duration-150 shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
        {["All", ...categories].map((item) => (
          <div
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`px-4 py-2 rounded-full cursor-pointer border transition-all ${
              selectedCategory === item
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Blogs */}
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-600 text-xl font-medium pt-8">
          No blogs found.
        </p>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} post={blog} />
            ))}
          </div>

          {page < totalPages && (
            <div className="text-center mt-12">
              <Button onClick={handleLoadMore}>
                {loading ? <Loader size="sm" /> : "View More Blogs"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
