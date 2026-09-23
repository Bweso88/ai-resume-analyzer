import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Environnement de test : ports distincts pour tourner en parallèle de la version principale.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5174 },
  preview: { port: 4174 },
});
