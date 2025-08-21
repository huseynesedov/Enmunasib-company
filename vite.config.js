import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/Pages"),
      "@assets": resolve(__dirname, "src/Assets"),
    },
  },
  server: {
    port: 5173, // Geliştirme portu
    open: true, // Otomatik tarayıcı açma
  },
  build: {
    outDir: "dist", // Derlenen dosyaların çıkış klasörü
    sourcemap: true, // Debug için kaynak haritası
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Vendor kodlarını ayırma
        },
      },
    },
  },
});
