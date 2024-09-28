// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    site: 'https://stargazers.club',
    integrations: [sitemap()],
    output: 'server',
    adapter: netlify(),
});

