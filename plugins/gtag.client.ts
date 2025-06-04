export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const googleAnalyticsId = config.public.googleAnalyticsId

  if (!googleAnalyticsId) {
    return
  }

  // Carrega o script do Google Analytics
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
        async: true
      }
    ]
  })

  // Configura o Google Analytics
  if (process.client) {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href
    })

    // Disponibiliza globalmente
    window.gtag = gtag
  }
}) 