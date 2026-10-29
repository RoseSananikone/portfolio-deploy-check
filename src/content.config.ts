import { glob, file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      year: z.number(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
    name: z.string(),
    type: z.enum(["skill", "tool", "language"]),
    order: z.number().default(0),
  }),
});

export const collections = { projects, skills };
