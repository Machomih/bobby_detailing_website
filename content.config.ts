import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        services: defineCollection({
            type: 'page',
            source: 'servicii/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        content: defineCollection({
            type: 'page',
            source:'**/*.md'
        })
    }
})

