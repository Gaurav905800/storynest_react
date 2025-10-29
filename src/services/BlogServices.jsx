import axios from "axios";
const baseUrl = "https://storynest-backend-0ikp.onrender.com/api/blogs";

export const getAllBlogs = async () => {
  const response = await axios.get(`${baseUrl}`);
  const blogs = response.data?.data || response.data || [];
  return blogs;
};

export const createBlog = async (formData, token) => {
  const response = await axios.post(`${baseUrl}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const updateBlog = async (id, formData) => {
  const response = await axios.patch(`${baseUrl}/${id}`, formData, {
    headers: {
      "Content:Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteBlog = async (id, token) => {
  const response = await axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
