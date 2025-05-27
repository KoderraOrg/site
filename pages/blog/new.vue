<template>
  <div class="min-h-screen">
    <Header />
    <div class="container mx-auto px-4 py-24">
      <!-- Barra de navegação -->
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center">
          <Button 
            variant="ghost" 
            class="mr-4" 
            @click="navigateTo('/blog')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Voltar para o Blog
          </Button>
        </div>
      </div>
      
      <Card class="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Criar Novo Post</CardTitle>
          <CardDescription>Preencha os campos abaixo para criar um novo post no blog</CardDescription>
        </CardHeader>
        <CardContent>
          <!-- Notificações -->
          <Alert v-if="error" variant="destructive" class="mb-6">
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>{{ error }}</AlertDescription>
          </Alert>
          
          <form @submit.prevent="savePost">
            <!-- Campo de título -->
            <div class="mb-6">
              <Label for="title">Título</Label>
              <Input 
                id="title" 
                v-model="post.title" 
                placeholder="Digite o título do post" 
                :class="{'border-red-500': validationErrors.title}"
                @input="validationErrors.title = ''"
              />
              <p v-if="validationErrors.title" class="text-red-500 text-sm mt-1">
                {{ validationErrors.title }}
              </p>
            </div>
            
            <!-- Campo de conteúdo -->
            <div class="mb-6">
              <Label for="content">Conteúdo</Label>
              <Textarea 
                id="content" 
                v-model="post.content" 
                placeholder="Digite o conteúdo do post" 
                class="min-h-[200px]"
                :class="{'border-red-500': validationErrors.content}"
                @input="validationErrors.content = ''"
              />
              <p v-if="validationErrors.content" class="text-red-500 text-sm mt-1">
                {{ validationErrors.content }}
              </p>
            </div>
            
            <!-- Campo de tags -->
            <div class="mb-8">
              <Label for="tags">Tags (separadas por vírgula)</Label>
              <Input 
                id="tags" 
                v-model="tagsInput" 
                placeholder="tecnologia, blog, dicas" 
                @input="updateTags"
              />
              
              <div v-if="post.tags.length > 0" class="flex flex-wrap gap-2 mt-2">
                <Badge 
                  v-for="tag in post.tags" 
                  :key="tag" 
                  variant="secondary"
                  class="flex items-center gap-1"
                >
                  {{ tag }}
                  <button 
                    @click="removeTag(tag)" 
                    type="button"
                    class="text-muted-foreground hover:text-foreground transition-colors ml-1"
                  >
                    <span class="sr-only">Remover</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                  </button>
                </Badge>
              </div>
            </div>
            
            <div class="flex justify-end gap-2">
              <Button variant="outline" type="button" @click="navigateTo('/blog')">
                Cancelar
              </Button>
              <Button 
                type="submit" 
                :disabled="isSaving"
              >
                <span v-if="isSaving" class="mr-2">
                  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ isSaving ? 'Salvando...' : 'Publicar' }}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Label } from '~/components/ui/label'
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { useBlogStore } from '~/stores/blogStore'

const blogStore = useBlogStore()
const error = ref('')
const isSaving = ref(false)

// Post em edição
const post = reactive({
  title: '',
  content: '',
  tags: [] as string[]
})
const tagsInput = ref('')
const validationErrors = reactive({
  title: '',
  content: ''
})

// Atualizar tags a partir do input de texto
const updateTags = () => {
  if (!tagsInput.value) {
    post.tags = []
    return
  }
  
  // Dividir por vírgula e remover espaços em branco
  post.tags = tagsInput.value.split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')
}

// Remover uma tag específica
const removeTag = (tagToRemove: string) => {
  post.tags = post.tags.filter(tag => tag !== tagToRemove)
  // Atualizar o input de tags
  tagsInput.value = post.tags.join(', ')
}

// Validar o formulário
const validateForm = () => {
  let isValid = true
  
  if (!post.title.trim()) {
    validationErrors.title = 'O título é obrigatório'
    isValid = false
  }
  
  if (!post.content.trim()) {
    validationErrors.content = 'O conteúdo é obrigatório'
    isValid = false
  }
  
  return isValid
}

// Salvar novo post
const savePost = async () => {
  // Resetar mensagens
  error.value = ''
  
  // Validar formulário
  if (!validateForm()) return
  
  isSaving.value = true
  
  try {
    const result = await blogStore.createPost({
      title: post.title,
      content: post.content,
      tags: post.tags
    })
    
    if (!result.success) {
      error.value = result.error || 'Erro ao criar o post'
      return
    }
    
    // Post criado com sucesso, redirecionar para a lista de posts
    navigateTo('/blog')
  } catch (err) {
    console.error('Erro ao criar o post:', err)
    error.value = 'Ocorreu um erro ao criar o post. Tente novamente.'
  } finally {
    isSaving.value = false
  }
}
</script> 