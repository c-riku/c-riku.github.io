import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    area: z.enum(['data', 'bi', 'ai']),
    context: z.string(),
    period: z.string(),
    tools: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { work };
