import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
  updateBlog,
} from "../../services/BlogServices";

// Fetch all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchAll", async () => {
  const data = await getAllBlogs();
  return data;
});

export const addBlog = createAsyncThunk(
  "blogs/add",
  async ({ formData, token }) => {
    const data = await createBlog(formData, token);
    return data;
  }
);

export const detailBlog = createAsyncThunk("blogs/detail", async (id) => {
  const data = await getBlogById(id);
  return data;
});

export const editBlog = createAsyncThunk(
  "blogs/edit",
  async ({ id, formData, token }) => {
    const data = await updateBlog(id, formData, token);
    return data;
  }
);

// Delete a blog
export const removeBlog = createAsyncThunk(
  "blogs/delete",
  async ({ id, token }) => {
    await deleteBlog(id, token);
    return { id };
  }
);

const blogSlice = createSlice({
  name: "Blog",
  initialState: {
    blogs: [],
    selectedBlog: null,
    loading: false,
    error: null,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload || [];
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add blog
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      })

      // Delete blog
      .addCase(removeBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (blog) => blog.id !== action.payload.id
        );
      })
      .addCase(removeBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      })
      // edit blog
      .addCase(editBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (blog) => blog.id !== action.payload.id
        );
      })
      .addCase(editBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      })
      // detail blog
      .addCase(detailBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(detailBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload?.data || null;
      })
      .addCase(detailBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export default blogSlice.reducer;
