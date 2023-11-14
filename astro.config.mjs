import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://gabes-astro-code-blog.netlify.app',
  integrations: [tailwind(), mdx(), astroImageTools],
  output: "server",
  adapter: netlify()
});