export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://koderra.com.br'
  
  // Páginas estáticas
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/aboutUs', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' }
  ]

  // Se o blog estiver habilitado, adicionar páginas do blog
  let blogPages: any[] = []
  if (config.public.blogEnabled) {
    try {
      // Aqui você pode buscar os posts do blog do banco de dados
      // const posts = await getPosts() // implementar conforme sua lógica
      blogPages = [
        { url: '/blog', priority: '0.7', changefreq: 'weekly' }
        // Adicionar posts individuais aqui
      ]
    } catch (error) {
      console.error('Erro ao buscar posts do blog para sitemap:', error)
    }
  }

  const allPages = [...staticPages, ...blogPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
}) 