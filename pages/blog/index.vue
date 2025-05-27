<template>
  <div class="min-h-screen">
    <Header />
    <div class="container mx-auto px-4 py-24">
      <div class="mb-10">
        <h1 class="text-3xl font-bold tracking-tighter mb-4">Blog</h1>
        <p class="text-muted-foreground mb-6">Confira nossos artigos mais recentes</p>
        <div class="flex justify-between items-center">
          <p class="text-sm text-muted-foreground">{{ posts.length || 0 }} artigos</p>
          <Button v-if="isAuthenticated" @click="navigateTo('/blog/new')" variant="default">
            Novo Post
          </Button>
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

      <!-- Empty state -->
      <Card v-else-if="!posts.length" class="p-12">
        <div class="flex flex-col items-center text-center">
          <h3 class="text-lg font-medium mb-2">Nenhum post encontrado</h3>
          <p class="text-muted-foreground mb-6">Não há posts disponíveis no momento.</p>
          <Button v-if="isAuthenticated" @click="navigateTo('/blog/new')">Criar Post</Button>
        </div>
      </Card>

      <!-- Posts grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="post in posts" :key="post.id" class="h-full flex flex-col">
          <CardHeader>
            <CardTitle class="line-clamp-2">{{ post.title }}</CardTitle>
            <div class="flex flex-wrap gap-2 mt-2">
              <Badge v-for="tag in post.tags" :key="tag" variant="secondary" class="text-xs">
                {{ tag }}
              </Badge>
            </div>
          </CardHeader>
          <CardContent class="flex-grow">
            <p class="line-clamp-3 text-muted-foreground">
              {{ post.content }}
            </p>
          </CardContent>
          <CardFooter class="flex justify-between pt-2 border-t">
            <Button variant="ghost" size="sm" @click="navigateTo(`/blog/${post.id}`)">
              Ver completo
            </Button>
            <span class="text-xs text-muted-foreground">
              {{ formatDate(post.createdAt) }}
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { useBlogStore } from '~/stores/blogStore'
import { useAllPosts } from '~/composables/useBlog'

const blogStore = useBlogStore()
const { status } = useAuth()
const isAuthenticated = computed(() => status.value === 'authenticated')

// Função para formatar data
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

// Usar o composable para buscar posts com SSR
const { data: blogData } = await useAsyncData(
  'blog-index-posts',
  () => useAllPosts(),
  {
    server: true,
    immediate: true
  }
)

// Extrair os valores do resultado do composable
const loading = computed(() => blogData.value?.loading || false)
const error = computed(() => blogData.value?.error || null)
const posts = computed(() => blogData.value?.posts || [])

// Recarregar quando a página é ativada (como ao voltar da navegação)
onActivated(() => {
  blogStore.fetchPosts()
})

definePageMeta({
  middleware: ['blog']
})
</script> 