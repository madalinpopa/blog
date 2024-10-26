import { defineCollection, z } from "astro:content";

// Slug generation function
function generateSlug(slug) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/^(\d+)/g, "post-$1"); // Handle titles that start with numbers
}

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string().or(z.date()),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
