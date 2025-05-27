import { useBlogStore } from '~/stores/blogStore'

// Composable para buscar todos os posts (usado na página index)
export async function useAllPosts() {
  const blogStore = useBlogStore()
  
  blogStore.loading = true
  blogStore.error = null
  
  try {
    const { data } = await useFetch('/api/blog', { server: true })
    
    if (data.value?.success) {
      blogStore.posts = data.value.data
    } else {
      blogStore.error = 'Não foi possível carregar os posts'
    }
  } catch (err) {
    console.error('Erro ao buscar posts:', err)
    blogStore.error = 'Erro ao carregar posts do blog'
  } finally {
    blogStore.loading = false
  }
  
  return { 
    posts: blogStore.posts,
    loading: blogStore.loading,
    error: blogStore.error
  }
}

// Composable para buscar um post específico (usado na página [id])
export async function usePostById(postId: string) {
  console.log(`Buscando post com ID: ${postId}`)
  const blogStore = useBlogStore()
  
  blogStore.loading = true
  blogStore.error = null
  
  try {
    const { data } = await useFetch(`/api/blog/${postId}`, { 
      server: true,
      // Desabilitar cache para sempre obter dados frescos
      cache: 'no-cache'
    })
    
    if (data.value?.success) {
      blogStore.currentPost = data.value.data
      console.log('Post carregado:', blogStore.currentPost)
    } else {
      blogStore.error = 'Não foi possível carregar o post'
      console.error('Erro ao carregar post:', data.value)
    }
  } catch (err) {
    console.error('Erro ao buscar post:', err)
    blogStore.error = 'Erro ao carregar o post do blog'
  } finally {
    blogStore.loading = false
  }
  
  return {
    post: blogStore.currentPost,
    loading: blogStore.loading,
    error: blogStore.error
  }
} 