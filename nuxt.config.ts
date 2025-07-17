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
    public: {
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
    '@nuxtjs/seo'
  ], 

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
      title: 'Koderra',
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
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png?v=1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png?v=1' },
        { rel: 'canonical', href: process.env.SITE_URL || 'https://koderra.com.br' }
      ]
    }
  }
})