import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Define the public directory explicitly
  publicDir: 'public',
  
  // Set the base path
  base: '/',
  
  // Configure asset handling
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  
  // Ensure dev server handles paths correctly
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['.']
    }
  }
})