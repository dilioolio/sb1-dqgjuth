import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.tsx',
      name: 'MarketingCalculators',
      formats: ['iife'],
      fileName: () => 'marketing-calculators.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'marketing-calculators.js',
        assetFileNames: 'marketing-calculators.[ext]',
      },
    },
  },
});