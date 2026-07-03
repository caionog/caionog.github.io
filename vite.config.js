import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project1: 'project1.html',
        project2: 'project2.html',
        project3: 'project3.html',
      },
    },
  },
});