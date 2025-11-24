import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs, removeBlog } from "../redux/slice/blogSlice";
import { getUser } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../components/custom/Loader";
import Button from "../components/custom/Button";
import UpdateButton from "../components/custom/UpdateButton";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const {
    blogs,
    loading: blogsLoading,
    error,
  } = useSelector((state) => state.blogs);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!user) dispatch(getUser());
    if (blogs.length === 0) dispatch(fetchBlogs());
  }, [dispatch, user, blogs.length]);

  if (authLoading || blogsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Please login to view your profile.</p>
      </div>
    );
  }

  const userBlogs = blogs.filter(
    (blog) => blog?.author && user?.id && blog.author.toString() === user.id
  );

  const handleDelete = async (id) => {
    await dispatch(removeBlog({ id, token }));
    dispatch(fetchBlogs());
  };

  const handleUpdate = (id) => {
    navigate(`/edit-blog/${id}`); // 👈 go to edit page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      {/* User Info */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {user.username || "User"}'s Profile
        </h1>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">User ID:</span> {user.id}
        </p>
        <p className="mt-2 text-gray-500">Total Posts: {userBlogs.length}</p>
      </div>

      {/* Blog Section */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Your Posts
      </h2>

      {userBlogs.length === 0 ? (
        <p className="text-center text-gray-600">
          You have not posted any blogs yet.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {userBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={blog.image || "/placeholder.jpg"}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {blog.content}
                </p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{blog.category}</span>
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* ✅ Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={() => handleDelete(blog._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>

                  <UpdateButton
                    onClick={() => handleUpdate(blog._id)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-center text-red-500 mt-6">Error: {error}</p>}
    </div>
  );
}

export default Profile;
