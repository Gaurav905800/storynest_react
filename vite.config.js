import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // tera local port
    strictPort: true,
    allowedHosts: [
      "localhost",
      ".ngrok-free.dev", // Ngrok ke URLs allow ho jaayenge
    ],
    proxy: {
      "/api": {
        target: "http://localhost:8000", // tera backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
