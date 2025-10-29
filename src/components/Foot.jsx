import React from "react";

function Foot() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-indigo-400">StoryNest</h2>
          <p className="text-gray-400 text-sm mt-2">
            Share your stories with the world 🌍
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex-1">
          <ul className="flex flex-wrap justify-center md:justify-center items-center gap-8 text-gray-300 font-medium">
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Resources
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-center md:justify-end gap-5">
          {/* Instagram */}
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 transition-all transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.8.5 1.1 1.1.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.5.8-1.1 1.1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5a2.51 2.51 0 0 1-1.1-1.1c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.5-.8 1.1-1.1.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.7.4 3.9.8a4.7 4.7 0 0 0-1.7 1.1C1.5 2.6 1 3.3.8 3.9c-.4.8-.6 1.7-.7 3C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.7 3 .2.6.7 1.3 1.4 2a4.7 4.7 0 0 0 1.7 1.1c.8.4 1.7.6 3 .7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.7.6-.2 1.3-.7 2-1.4a4.7 4.7 0 0 0 1.1-1.7c.4-.8.6-1.7.7-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.7-3a4.7 4.7 0 0 0-1.1-1.7C21.4.7 20.7.2 20.1 0c-.8-.4-1.7-.6-3-.7C15.7 0 15.3 0 12 0Z" />
              <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
              <circle cx="18.4" cy="5.6" r="1.4" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition-all transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.05A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.9-4.28 4.28 0 .34.04.68.11 1A12.14 12.14 0 0 1 3.16 5.1a4.27 4.27 0 0 0 1.33 5.7 4.3 4.3 0 0 1-1.94-.54v.06c0 2.02 1.44 3.7 3.36 4.08a4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97 8.6 8.6 0 0 1-5.33 1.84c-.35 0-.7-.02-1.04-.06A12.15 12.15 0 0 0 8.1 21c7.88 0 12.2-6.53 12.2-12.2 0-.18 0-.36-.01-.53A8.73 8.73 0 0 0 22.46 6Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.43c.6.11.82-.26.82-.58v-2.05c-3.34.72-4.04-1.61-4.04-1.61a3.17 3.17 0 0 0-1.33-1.75c-1.09-.74.08-.73.08-.73a2.51 2.51 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.54 2.54 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22a4.57 4.57 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.57 4.57 0 0 1 .12 3.18 4.54 4.54 0 0 1 1.24 3.22c0 4.62-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.46 4.45 5.66V21h-4v-5.14c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.95 1.33-1.95 2.7V21H9z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} StoryNest — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Foot;
