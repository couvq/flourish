import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: '$1'
      }
    ]
  },
  plugins: [react()]
})
