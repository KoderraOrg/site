import { useHead, useSeoMeta } from '#imports'

type OgType = 'website' | 'article' | 'book' | 'profile'

export const useSeo = ({
  title,
  description,
  image,
  url,
  type = 'website',
}: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: OgType
}) => {
  const config = useRuntimeConfig()
  
  // Return early if SEO is not enabled
  if (!config.public.seoEnabled) {
    return
  }

  const siteName = config.public.siteName as string
  const siteUrl = config.public.siteUrl as string
  const siteDescription = config.public.siteDescription as string

  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const pageDescription = description || siteDescription
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl
  const pageImage = image || `${siteUrl}/og-image.jpg`

  useHead({
    title: pageTitle,
    htmlAttrs: {
      lang: config.public.language as string,
    },
  })

  useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogImage: pageImage,
    ogUrl: pageUrl,
    ogType: type,
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: pageImage,
  })
} 