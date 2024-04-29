import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { pluginAPIRoutes } from "vite-plugin-api-routes";

export default defineConfig({
  plugins: [react(), UnoCSS(), pluginAPIRoutes({})],
});
