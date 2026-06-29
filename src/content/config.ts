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
      isActive: z.boolean().default(true).optional(),
      accountStatus: z.enum(['مفعل', 'موقوف']).default('مفعل').optional(),
      name: z.string(),
      phone: z.string(),
      whatsapp: z.string().optional(),
      governorate: z.enum(['القاهرة', 'الجيزة']),
      avatar: z.string(),
    })),
  }),
});

export const collections = {
  'services': servicesCollection,
};
