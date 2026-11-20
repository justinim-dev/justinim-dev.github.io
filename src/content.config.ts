import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each file in src/content/projects/ becomes a page at /projects/<file-name>/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    pageTitle: z.string().optional(), // browser-tab title, if different from `title`
    listed: z.boolean().default(true), // show a card on the home page?
    order: z.number().default(999), // card position on the home page (1 = first)
    cardTitle: z.string().optional(), // card heading, if different from `title`
    date: z.string().optional(), // shown on the card
    summary: z.string().optional(), // shown on the card
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
      .default([]),
    details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    footerTagline: z.string().optional(),
  }),
});

export const collections = { projects };
