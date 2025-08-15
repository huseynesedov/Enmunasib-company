import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'), // Daha güvenli alias yolu
    },
  },
  build: {
    rollupOptions: {
      // Sadece dış paketleri external yapıyoruz (örnek: react, react-dom)
      external: ['react', 'react-dom'],
    },
  },
});
