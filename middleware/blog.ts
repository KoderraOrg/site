export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  
  if (to.path.startsWith('/blog') && !config.public.blogEnabled) {
    return navigateTo('/')
  }
}) 