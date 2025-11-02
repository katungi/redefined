import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import vercel from '@astrojs/vercel/serverless';
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig, sharpImageService } from "astro/config";

import { site } from "./src/constants";

// https://astro.build/config
export default defineConfig({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	image: {
		service: sharpImageService(),
	},
	integrations: [konamiEmojiBlast(), solidJs(), mdx(), sitemap()],
	markdown: {
		syntaxHighlight: "prism",
	},
	output: 'server',
	prefetch: true,
	site,
});
