import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    profession: z.string(),
    professionPlural: z.string(),
    icon: z.string(),
    color: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    intro: z.string(),
    tips: z.array(z.object({
      title: z.string(),
      desc: z.string(),
    })),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
    districts: z.array(z.string()),
    craftsmen: z.array(z.object({
      name: z.string(),
      phone: z.string(),
      rating: z.number(),
      reviewCount: z.number(),
      governorate: z.enum(['القاهرة', 'الجيزة']),
      districts: z.array(z.string()),
      avatar: z.string(),
      verified: z.boolean(),
      responseTime: z.string(),
      priceFrom: z.number(),
      completedJobs: z.number(),
      clientReview: z.string(),
    })),
  }),
});

export const collections = {
  'services': servicesCollection,
};
