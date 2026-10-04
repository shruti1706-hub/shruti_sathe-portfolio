// @lovable.dev/vite-tanstack-config already includes
// TanStack Start, React, Tailwind, TypeScript paths, and Nitro.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // Build the SSR server for Netlify
  nitro: {
    preset: "netlify",
  },
});