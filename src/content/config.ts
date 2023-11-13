import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: ({image}) => 
        z.object({
            author: z.string(),
            date: z.string(),
            excerpt: z.string(),
            image: image(),
            tags: z.array(z.string()),
            title: z.string(),
            authorPic: image()
        }),
});

export const collections = {
    posts: postsCollection,
};
