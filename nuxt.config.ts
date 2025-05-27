import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  runtimeConfig: {
    auth: {
      secret: process.env.AUTH_SECRET
    },
    public: {
      blogEnabled: process.env.BLOG === 'true',
      seoEnabled: process.env.SEO === 'true',
      siteUrl: process.env.SITE_URL || 'https://your-domain.com',
      siteName: 'Your Site Name',
      siteDescription: 'Your site description',
      language: 'en',
      calUsername: process.env.CAL_USERNAME || '',
      whatsappNumber: process.env.WHATSAPP_NUMBER || ''
    }
  },

  modules: [
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    ...(process.env.SEO === 'true' ? ['@nuxtjs/seo'] : [])
  ], 

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  // SEO Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ...(process.env.SEO === 'true' ? [
          { name: 'description', content: 'Your site description' },
          { name: 'format-detection', content: 'telephone=no' }
        ] : []),
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})