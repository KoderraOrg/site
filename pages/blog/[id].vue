<template>
  <div class="min-h-screen">
    <Header />
    <div class="container mx-auto px-4 py-24">
      <!-- Barra de navegação e ações -->
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
        <!-- Botões de ação -->
        <div v-if="isAuthenticated" class="flex gap-2">
          <Button 
            variant="outline" 
            @click="deletePost"
            :disabled="isDeleting"
          >
            <span v-if="isDeleting" class="mr-2">
              <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ isDeleting ? 'Excluindo...' : 'Excluir' }}
          </Button>
          <Button 
            variant="default"
            @click="handleEditClick"
            v-if="!isEditing"
          >
            Editar
          </Button>
          <template v-else>
            <Button 
              variant="outline"
              @click="cancelEdit"
            >
              Cancelar
            </Button>
            <Button 
              variant="default"
              @click="saveEdit"
              :disabled="isSaving"
            >
              <span v-if="isSaving" class="mr-2">
                <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ isSaving ? 'Salvando...' : 'Salvar' }}
            </Button>
          </template>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-20">
        <div class="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>

      <!-- Error state -->
      <Alert v-else-if="error" variant="destructive" class="mb-6">
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>{{ error }}</AlertDescription>
      </Alert>

      <!-- Post content -->
      <Card v-else-if="currentPost" class="max-w-3xl mx-auto">
        <CardContent class="pt-6">
          <!-- Modo de visualização -->
          <div v-if="!isEditing">
            <div class="flex justify-between items-center mb-6">
              <h1 class="text-3xl font-bold">{{ currentPost.title }}</h1>
              <span class="text-sm text-muted-foreground">
                {{ formatDate(currentPost.createdAt) }}
              </span>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <Badge v-for="tag in currentPost.tags" :key="tag" variant="secondary">
                {{ tag }}
              </Badge>
            </div>
            
            <div class="prose max-w-none">
              <p>{{ currentPost.content }}</p>
            </div>
          </div>
          
          <!-- Modo de edição -->
          <form v-else @submit.prevent="saveEdit">
            <!-- Notificações -->
            <Alert v-if="editError" variant="destructive" class="mb-6">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{{ editError }}</AlertDescription>
            </Alert>
            
            <!-- Campo de título -->
            <div class="mb-6">
              <Label for="edit-title">Título</Label>
              <Input 
                id="edit-title" 
                v-model="editedPost.title" 
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
              <Label for="edit-content">Conteúdo</Label>
              <Textarea 
                id="edit-content" 
                v-model="editedPost.content" 
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
              <Label for="edit-tags">Tags (separadas por vírgula)</Label>
              <Input 
                id="edit-tags" 
                v-model="tagsInput" 
                placeholder="tecnologia, blog, dicas" 
                @input="updateTags"
              />
              
              <div v-if="editedPost.tags.length > 0" class="flex flex-wrap gap-2 mt-2">
                <Badge 
                  v-for="tag in editedPost.tags" 
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
          </form>
        </CardContent>
      </Card>
      
      <!-- Confirmar exclusão -->
      <Dialog :open="showDeleteConfirm" @update:open="showDeleteConfirm = $event">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" @click="showDeleteConfirm = false">Cancelar</Button>
            <Button variant="destructive" @click="confirmDelete">Excluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Label } from '~/components/ui/label'
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { useBlogStore } from '~/stores/blogStore'
import { usePostById } from '~/composables/useBlog'

const route = useRoute()
const postId = computed(() => route.params.id as string)
const blogStore = useBlogStore()
const { status } = useAuth()
const isAuthenticated = computed(() => status.value === 'authenticated')

// Estados locais
const isEditing = ref(false)
const isSaving = ref(false)
const isDeleting = ref(false)
const editError = ref('')
const showDeleteConfirm = ref(false)
const editedPost = reactive({
  title: '',
  content: '',
  tags: [] as string[]
})
const tagsInput = ref('')
const validationErrors = reactive({
  title: '',
  content: ''
})

// Buscar dados utilizando useAsyncData para compatibilidade com SSR
const { data: blogData } = await useAsyncData(
  () => `blog-post-detail-${postId.value}`,
  () => usePostById(postId.value),
  {
    server: true,
    immediate: true,
    watch: [postId]
  }
)

// Extrair os valores do resultado do composable
const loading = computed(() => blogData.value?.loading || false)
const error = computed(() => blogData.value?.error || null)
const post = computed(() => blogData.value?.post || null)

// Computed para facilitar acesso ao post atual
const currentPost = computed(() => post.value)

// Recarregar quando a página for reativada
onActivated(() => {
  blogStore.fetchPostById(postId.value)
})

// Inicializar o formulário quando os dados chegarem
watchEffect(() => {
  if (currentPost.value) {
    initEditForm()
  }
})

// Também inicializar quando clicar no botão de editar
watch(isEditing, (newValue) => {
  if (newValue && currentPost.value) {
    initEditForm()
  }
})

// Inicializar o formulário de edição
function initEditForm() {
  if (!currentPost.value) return

  console.log('Inicializando formulário com:', currentPost.value)
  
  editedPost.title = currentPost.value.title || ''
  editedPost.content = currentPost.value.content || ''
  editedPost.tags = [...(currentPost.value.tags || [])]
  tagsInput.value = (currentPost.value.tags || []).join(', ')
}

// Função para formatar data
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

// Atualizar tags a partir do input de texto
const updateTags = () => {
  if (!tagsInput.value) {
    editedPost.tags = []
    return
  }
  
  // Dividir por vírgula e remover espaços em branco
  editedPost.tags = tagsInput.value.split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')
}

// Remover uma tag específica
const removeTag = (tagToRemove: string) => {
  editedPost.tags = editedPost.tags.filter(tag => tag !== tagToRemove)
  // Atualizar o input de tags
  tagsInput.value = editedPost.tags.join(', ')
}

// Validar o formulário
const validateForm = () => {
  let isValid = true
  
  if (!editedPost.title.trim()) {
    validationErrors.title = 'O título é obrigatório'
    isValid = false
  }
  
  if (!editedPost.content.trim()) {
    validationErrors.content = 'O conteúdo é obrigatório'
    isValid = false
  }
  
  return isValid
}

// Cancelar edição
const cancelEdit = () => {
  isEditing.value = false
  editError.value = ''
  validationErrors.title = ''
  validationErrors.content = ''
  
  // Atualizar os dados do post para garantir que temos a versão mais recente
  refreshPostData().then(() => {
    // Restaurar valores originais depois de recarregar os dados
    initEditForm()
  })
}

// Salvar edição
const saveEdit = async () => {
  // Resetar mensagens
  editError.value = ''
  
  // Validar formulário
  if (!validateForm()) return
  
  isSaving.value = true
  
  try {
    const result = await blogStore.updatePost(postId.value, {
      title: editedPost.title,
      content: editedPost.content,
      tags: editedPost.tags
    })
    
    if (!result.success) {
      editError.value = result.error || 'Erro ao atualizar o post'
      return
    }
    
    // Post atualizado com sucesso
    isEditing.value = false
    
    // Recarregar o post para atualizar a visualização
    await refreshPostData()
  } catch (err) {
    console.error('Erro ao atualizar o post:', err)
    editError.value = 'Ocorreu um erro ao atualizar o post. Tente novamente.'
  } finally {
    isSaving.value = false
  }
}

// Função para recarregar os dados do post
async function refreshPostData() {
  try {
    // Recarregar os dados diretamente da API
    const { data } = await useFetch(`/api/blog/${postId.value}`, { 
      method: 'GET',
      server: false, // Forçar execução no cliente após a edição
      cache: 'no-cache' // Não usar cache para garantir dados atualizados
    })
    
    if (data.value?.success) {
      // Atualizar os dados na store
      blogStore.currentPost = data.value.data
      
      // Também atualizar o computed local
      if (blogData.value) {
        blogData.value.post = data.value.data
      }
      
      console.log('Dados do post atualizados após edição:', data.value.data)
    }
  } catch (error) {
    console.error('Erro ao recarregar o post após edição:', error)
  }
}

// Iniciar processo de exclusão
const deletePost = () => {
  showDeleteConfirm.value = true
}

// Confirmar exclusão
const confirmDelete = async () => {
  isDeleting.value = true
  showDeleteConfirm.value = false
  
  try {
    const result = await blogStore.deletePost(postId.value)
    
    if (!result.success) {
      editError.value = result.error || 'Erro ao excluir o post'
      return
    }
    
    // Redirecionar após exclusão bem-sucedida
    navigateTo('/blog')
  } catch (err) {
    console.error('Erro ao excluir o post:', err)
    editError.value = 'Ocorreu um erro ao excluir o post. Tente novamente.'
  } finally {
    isDeleting.value = false
  }
}

// Função para iniciar edição
function handleEditClick() {
  // Certificar-se de que o formulário está inicializado com os dados atuais
  if (currentPost.value) {
    initEditForm();
  }
  isEditing.value = true;
}
</script> 