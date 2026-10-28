import { defineCollection, z } from 'astro:content';

// Three layers, per the taeho.io structure:
//   essays  - long-form, one flagship per topic bucket
//   notes   - 1-3 paragraph zero-structure capture, most never become essays
//   reading - what was consumed, with source provenance and a short takeaway

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    series: z.string().optional(),
    seriesPart: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const reading = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    source: z.string(),
    readDate: z.coerce.date(),
    takeaway: z.string(),
  }),
});

export const collections = { essays, notes, reading };
