import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    // Home page intro, plus the name, links and resume used across the site
    home: defineCollection({
      type: "page",
      source: "home.md",
      schema: z.object({
        name: z.string(),
        jobTitle: z.string(),
        employer: z.string(),
        location: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        resume: z.string().url(),
        links: z.array(
          z.object({
            label: z.string(),
            url: z.string(),
            icon: z.string(),
          }),
        ),
      }),
    }),

    // One file per company; the markdown body is the description
    experiences: defineCollection({
      type: "page",
      source: "experiences/*.md",
      schema: z.object({
        company: z.string(),
        url: z.string().url(),
        img: z.string(),
        order: z.number(),
        // Most recent role first
        roles: z.array(z.object({ title: z.string(), time: z.string() })),
        skills: z.array(z.string()).optional(),
      }),
    }),

    // One file per project; the markdown body is the description
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        title: z.string(),
        desc: z.string().optional(),
        url: z.string().url().optional(),
        img: z.string(),
        // Already-optimised animations are served as-is, since resizing would drop every frame but the first
        animated: z.boolean().optional(),
        category: z.enum(["work", "personal"]),
        order: z.number(),
        skills: z.array(z.string()),
      }),
    }),
  },
});
