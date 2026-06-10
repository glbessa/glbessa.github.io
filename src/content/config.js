import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default('Gabriel Leite Bessa'),
    date: z.string().or(z.date()).optional(),
    tags: z.array(z.string()).nullable().optional().transform(val => val || []),
    categories: z.array(z.string()).nullable().optional().transform(val => val || []),
    hero: z.string().optional(),
    description: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.string().or(z.date()).optional(),
    tags: z.array(z.string()).nullable().optional().transform(val => val || []),
    categories: z.array(z.string()).nullable().optional().transform(val => val || []),
    category: z.string().optional(),
    order: z.number().optional().default(0),
    github_url: z.string().optional(),
    website_url: z.string().optional(),
    impact: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
