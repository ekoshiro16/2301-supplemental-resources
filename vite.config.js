// vite.config.js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: "dist",
  },
  server: {
    fs: {
      strict: false,
    },
  },
  publicDir: "assets",
  base: "/",
});
