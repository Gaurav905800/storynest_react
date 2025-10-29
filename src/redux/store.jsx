import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    auth: authReducer,
  },
});
