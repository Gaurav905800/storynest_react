import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../redux/slice/blogSlice";
import { Image, Tag, ClipboardList, Send, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.blogs);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [published, setPublished] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Health",
    "Education",
    "Finance",
    "Sports",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setValidationError((prev) => ({
          ...prev,
          image: "Image size must be less than 2MB.",
        }));
        setImageFile(null);
        setPreview(null);
        return;
      }
      setValidationError((prev) => ({ ...prev, image: "" }));
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTags("");
    setCategory("");
    setImageFile(null);
    setPreview(null);
    setPublished(false);
    setValidationError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (title.trim().length < 5)
      errors.title = "Title must be at least 5 characters.";
    if (content.trim().length < 50)
      errors.content = "Content must be at least 50 characters.";
    if (!category) errors.category = "Please select a category.";

    if (Object.keys(errors).length > 0) {
      setValidationError(errors);
      return;
    }
    setValidationError({});

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("content", content.trim());
    formData.append(
      "tags",
      JSON.stringify(
        tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
      )
    );
    formData.append("category", category);
    formData.append("published", published);
    if (imageFile) formData.append("image", imageFile);

    dispatch(addBlog({ formData, token }))
      .unwrap()
      .then(() => {
        setSuccess(true);
        resetForm();
        setTimeout(() => navigate("/home"), 1500);
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(() => setSuccess(false));
  };

  const ErrorMessage = ({ message }) => (
    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
      <XCircle className="w-4 h-4" /> {message}
    </p>
  );

  const inputClass = (field) =>
    `border mt-1 px-4 py-3 text-base rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150 ${
      validationError[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 bg-white rounded-xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        Create New Post
      </h1>
      <p className="text-gray-600 mb-8">
        Share your insights with the community.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title (min 5 characters)"
              className={inputClass("title")}
              maxLength={100}
              required
            />
            {validationError.title && (
              <ErrorMessage message={validationError.title} />
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post content here (min 50 characters)..."
              className={inputClass("content")}
              rows={8}
              required
            />
            {validationError.content && (
              <ErrorMessage message={validationError.content} />
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t pt-8 border-gray-100">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-indigo-500" /> Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass("category")}
                required
              >
                <option value="">Select a topic category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {validationError.category && (
                <ErrorMessage message={validationError.category} />
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-500" /> Tags
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. react, nodejs, ux (comma-separated)"
                className={inputClass("tags")}
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate tags with a comma.
              </p>
            </div>
          </div>

          {/* Right Column (Image and Publish) */}
          <div className="flex flex-col gap-6">
            {/* Image Upload */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Image className="w-5 h-5 text-indigo-500" /> Cover Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              {validationError.image && (
                <ErrorMessage message={validationError.image} />
              )}
              <p className="text-xs text-gray-500 mt-1">
                Max size: 2MB. Recommended ratio: 16:9.
              </p>

              {/* Image Preview */}
              {preview && (
                <div className="mt-4 relative">
                  <img
                    src={preview}
                    alt="Image Preview"
                    className="w-full h-48 object-cover rounded-xl border-4 border-gray-100 shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setPreview(null);
                    }}
                    className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/80 transition"
                    aria-label="Remove image"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

            {/* Published Checkbox */}
            <div className="flex items-center pt-2">
              <input
                id="published-toggle"
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="published-toggle"
                className="ml-3 text-lg font-medium text-gray-700"
              >
                Publish immediately
              </label>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col items-center">
          <button
            type="submit"
            disabled={
              loading ||
              Object.keys(validationError).some((key) => validationError[key])
            }
            className={`flex items-center gap-2 bg-indigo-600 text-white text-xl px-10 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-indigo-500/30 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700 hover:shadow-indigo-600/50"
            }`}
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 border-4 border-t-white border-indigo-400 rounded-full"></span>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Submit Post
              </>
            )}
          </button>

          {error && (
            <p className="text-red-600 text-lg font-medium mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              Submission Failed: {error}
            </p>
          )}
          {success && !error && (
            <p className="text-green-600 text-lg font-medium mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              Blog post created and submitted successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
