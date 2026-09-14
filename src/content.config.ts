import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    dates: z.string(),
    location: z.string(),
    url: z.string().url().optional(),
    order: z.number(),
    visual: z.enum(['documents', 'graph', 'layers', 'frames']).default('documents'),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    order: z.number(),
  }),
});

export const collections = { projects, notes };
