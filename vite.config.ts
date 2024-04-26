import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [react(),UnoCSS()],
});
