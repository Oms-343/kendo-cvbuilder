import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          kendo: [
            "@progress/kendo-react-buttons",
            "@progress/kendo-react-inputs",
            "@progress/kendo-react-labels",
          ],
        },
      },
    },
  },
});
