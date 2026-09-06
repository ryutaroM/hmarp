import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import moonbit from "vite-plugin-moonbit";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare(), moonbit()],
});
