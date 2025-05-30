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
      siteUrl: process.env.SITE_URL || 'https://koderra.com.br',
      siteName: process.env.SITE_NAME || 'Koderra - Consultoria Digital',
      siteDescription: process.env.SITE_DESCRIPTION || 'Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas para impulsionar o crescimento do seu negócio.',
      language: process.env.SITE_LANGUAGE || 'pt-BR',
      calUsername: process.env.CAL_USERNAME || '',
      whatsappNumber: process.env.WHATSAPP_NUMBER || '',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },

  modules: [
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/seo'
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
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Koderra - Consultoria Digital' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0891b2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@koderra' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: process.env.SITE_URL || 'https://koderra.com.br' }
      ]
    }
  }
})