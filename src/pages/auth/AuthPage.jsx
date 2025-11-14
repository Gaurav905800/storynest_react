import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signUpUser, clearError } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) navigate("/home");
    dispatch(clearError());
  }, [user, navigate]);

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLocalError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Email and Password are required.");
      return;
    }

    if (mode === "signup") {
      if (!username) {
        setLocalError("Username is required.");
        return;
      }
      if (password !== confirmPassword) {
        setLocalError("Passwords do not match.");
        return;
      }
      dispatch(signUpUser({ username, email, password }));
    } else {
      dispatch(loginUser({ email, password }));
    }
  };

  const isFormInvalid =
    !email ||
    !password ||
    (mode === "signup" && (!username || password !== confirmPassword));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sm:p-10 transition-all duration-300">
        <h2 className="text-3xl font-extrabold mb-2 text-gray-900 text-center">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {mode === "login"
            ? "Sign in to continue to your dashboard."
            : "Get started with us today!"}
        </p>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 mb-4 rounded transition-all duration-300">
            <p className="font-medium">Authentication Failed</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {localError && (
          <div className="text-red-600 text-sm font-medium mb-4 text-center transition-all duration-300">
            {localError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "signup" && (
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow duration-200"
                placeholder="Choose a unique username"
                autoComplete="username"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow duration-200"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow duration-200"
              placeholder="••••••••"
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />
          </div>

          {mode === "signup" && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow duration-200"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading || isFormInvalid}
            className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 
              ${
                loading || isFormInvalid
                  ? "bg-blue-300 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
              }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>
                  {mode === "login" ? "Logging In..." : "Signing Up..."}
                </span>
              </div>
            ) : mode === "login" ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="text-center text-sm mt-6 pt-4 border-t border-gray-100">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => handleModeSwitch("signup")}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => handleModeSwitch("login")}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
