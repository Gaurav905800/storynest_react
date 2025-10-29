import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center px-6">
      {/* SVG Illustration */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-64 mb-8"
        viewBox="0 0 512 512"
        fill="none"
      >
        <circle cx="256" cy="256" r="256" fill="#e0e7ff" />
        <path
          d="M156 330h200M180 270h160M210 210h100M246 120a10 10 0 1 1 20 0v20a10 10 0 1 1-20 0v-20zM136 200a10 10 0 1 1 20 0v10a10 10 0 1 1-20 0v-10zM356 200a10 10 0 1 1 20 0v10a10 10 0 1 1-20 0v-10z"
          stroke="#6366f1"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M130 370h252a10 10 0 0 1 10 10v10a50 50 0 0 1-50 50H170a50 50 0 0 1-50-50v-10a10 10 0 0 1 10-10z"
          fill="#a5b4fc"
        />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontSize="72"
          fontWeight="700"
          fill="#4338ca"
        >
          404
        </text>
      </svg>

      {/* Text Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-lg max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
