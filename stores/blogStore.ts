import { defineStore } from 'pinia'

interface BlogPost {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

// Interface para respostas de API
interface ApiResponse {
  success: boolean
  error?: string
  data?: any
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [] as BlogPost[],
    currentPost: null as BlogPost | null,
    loading: false,
    error: null as string | null
  }),
  
  getters: {
    getPosts: (state) => state.posts,
    getPostById: (state) => (id: string) => {
      return state.posts.find(post => post.id === id)
    }
  },
  
  actions: {
    async fetchPosts() {
      try {
        this.loading = true
        this.error = null
        
        const { data } = await useFetch('/api/blog')
        
        if (data.value?.success) {
          this.posts = data.value.data
        } else {
          this.error = 'Não foi possível carregar os posts'
        }
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
        this.error = 'Erro ao carregar posts do blog'
      } finally {
        this.loading = false
      }
    },
    
    async fetchPostById(id: string) {
      try {
        this.loading = true
        this.error = null
        
        const { data } = await useFetch(`/api/blog/${id}`)
        
        if (data.value?.success) {
          this.currentPost = data.value.data
          
          // Adicionar o post ao array de posts se ainda não estiver lá
          if (!this.posts.some(post => post.id === id)) {
            this.posts.push(data.value.data)
          } else {
            // Atualizar o post existente no array
            const index = this.posts.findIndex(post => post.id === id)
            if (index !== -1) {
              this.posts[index] = data.value.data
            }
          }
        } else {
          this.error = 'Não foi possível carregar o post'
        }
      } catch (err) {
        console.error('Erro ao buscar post:', err)
        this.error = 'Erro ao carregar o post'
      } finally {
        this.loading = false
      }
    },
    
    async createPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) {
      try {
        this.loading = true
        this.error = null
        
        const { data } = await useFetch('/api/blog', {
          method: 'POST',
          body: postData
        })
        
        if (data.value?.success) {
          // Adicionar o novo post à lista
          this.posts.unshift(data.value.data)
          return { success: true, data: data.value.data }
        } else {
          this.error = data.value?.message || 'Erro ao criar o post'
          return { success: false, error: this.error }
        }
      } catch (err) {
        console.error('Erro ao criar post:', err)
        this.error = 'Erro ao criar o post'
        return { success: false, error: this.error }
      } finally {
        this.loading = false
      }
    },
    
    async updatePost(postId: string, postData: {
      title: string;
      content: string;
      tags: string[];
    }): Promise<ApiResponse> {
      this.loading = true;
      try {
        console.log('Atualizando post:', postId, postData);
        const { data } = await useFetch(`/api/blog/${postId}`, {
          method: 'PUT',
          body: postData,
          // Garantir que não estamos usando cache para obter os dados mais recentes
          cache: 'no-cache'
        });

        if (!data.value?.success) {
          console.error('Erro ao atualizar post:', data.value);
          return {
            success: false,
            error: data.value?.message || 'Erro ao atualizar o post',
          };
        }

        const updatedPost = data.value.data;
        
        // Atualizar o post no array de posts
        const index = this.posts.findIndex((p) => p.id === postId);
        if (index !== -1) {
          // Usamos Vue.set ou atribuição direta para garantir reatividade
          this.posts[index] = { ...updatedPost };
        }

        // Atualizar o post atual se for o mesmo
        if (this.currentPost?.id === postId) {
          // Clone o objeto para garantir reatividade
          this.currentPost = { ...updatedPost };
        }

        console.log('Post atualizado com sucesso na store:', this.currentPost);
        
        // Buscar o post atualizado após a operação para garantir dados atualizados
        await this.fetchPostById(postId);

        return { 
          success: true,
          data: updatedPost
        };
      } catch (error) {
        console.error('Erro ao atualizar post:', error);
        return {
          success: false,
          error: 'Erro ao conectar com o servidor',
        };
      } finally {
        this.loading = false;
      }
    },
    
    async deletePost(id: string) {
      try {
        this.loading = true
        this.error = null
        
        const { data } = await useFetch(`/api/blog/${id}`, {
          method: 'DELETE'
        })
        
        if (data.value?.success) {
          // Remover o post da lista
          this.posts = this.posts.filter(post => post.id !== id)
          
          // Limpar o post atual se for o mesmo
          if (this.currentPost?.id === id) {
            this.currentPost = null
          }
          
          return { success: true }
        } else {
          this.error = data.value?.message || 'Erro ao excluir o post'
          return { success: false, error: this.error }
        }
      } catch (err) {
        console.error('Erro ao excluir post:', err)
        this.error = 'Erro ao excluir o post'
        return { success: false, error: this.error }
      } finally {
        this.loading = false
      }
    }
  }
}) 