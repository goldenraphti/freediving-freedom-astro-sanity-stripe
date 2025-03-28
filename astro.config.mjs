// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import aiRobotsTxt from "astro-ai-robots-txt";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "axbwgidy",
      dataset: "feediving-freedom-new_dataset",
      useCdn: false, // See note on using the CDN. Set to false if build statically. To true if SSR.
      apiVersion: "2025-03-18", // insert the current date to access the latest version of the API,
      studioBasePath: "/studio", // If you want to access the Studio on a route
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
    aiRobotsTxt(),
  ],

  output: "server",
  adapter: netlify(),
});