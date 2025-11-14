import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMe, login, signUp } from "../../services/AuthServices";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await login(credentials);
      localStorage.setItem("token", res.token);
      return res.user;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (userData, thunkApi) => {
    try {
      const res = await signUp(userData);
      return res.user;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data?.message || "Signup failed"
      );
    }
  }
);

export const getUser = createAsyncThunk("auth/me", async (_, thunkApi) => {
  try {
    const res = await getMe();
    return res.user;
  } catch (err) {
    return thunkApi.rejectWithValue(
      err.response?.data?.message || "User not found"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SIGNUP
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET USER
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
