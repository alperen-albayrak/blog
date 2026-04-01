import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z
      .union([z.array(z.string()), z.string()])
      .transform((v) =>
        typeof v === 'string' ? v.split(',').map((t) => t.trim()).filter(Boolean) : v
      )
      .default([]),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
