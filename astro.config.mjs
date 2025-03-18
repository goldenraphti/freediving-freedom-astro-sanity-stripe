// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "axbwgidy",
      dataset: "freediving-freedom-new_dataset",
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-03-18", // insert the current date to access the latest version of the API,
      studioBasePath: "/studio", // If you want to access the Studio on a route
    }),
    react(),
  ],
});
