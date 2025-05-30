import { useHead, useSeoMeta } from '#imports'

type OgType = 'website' | 'article' | 'book' | 'profile'

interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: OgType
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export const useSeo = ({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SeoOptions) => {
  const config = useRuntimeConfig()
  
  // Return early if SEO is not enabled
  if (!config.public.seoEnabled) {
    return
  }

  const siteName = config.public.siteName as string
  const siteUrl = config.public.siteUrl as string
  const siteDescription = config.public.siteDescription as string
  const language = config.public.language as string

  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const pageDescription = description || siteDescription
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl
  const pageImage = image || `${siteUrl}/og-image.jpg`
  const pageKeywords = keywords.length > 0 ? keywords.join(', ') : 'consultoria digital, desenvolvimento web, marketing digital, koderra'

  useHead({
    title: pageTitle,
    htmlAttrs: {
      lang: language,
    },
    meta: [
      // Palavras-chave
      { name: 'keywords', content: pageKeywords },
      // Autor
      ...(author ? [{ name: 'author', content: author }] : [])
    ],
    link: [
      { rel: 'canonical', href: pageUrl }
    ]
  })

  const seoMetaConfig: any = {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    
    // Open Graph
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogImage: pageImage,
    ogUrl: pageUrl,
    ogType: type,
    ogSiteName: siteName,
    ogLocale: language.replace('-', '_'),
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: pageImage,
    twitterSite: '@koderra',
    twitterCreator: '@koderra',
    
    // Article specific (for blog posts)
    ...(type === 'article' && {
      articleAuthor: author || siteName,
      ...(publishedTime && { articlePublishedTime: publishedTime }),
      ...(modifiedTime && { articleModifiedTime: modifiedTime }),
      ...(section && { articleSection: section }),
      ...(tags.length > 0 && { articleTag: tags })
    })
  }

  useSeoMeta(seoMetaConfig)

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    ...(type === 'website' && {
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`
        }
      }
    }),
    ...(type === 'article' && {
      headline: title,
      author: {
        '@type': 'Person',
        name: author || siteName
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteUrl
      },
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime })
    })
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })
} 