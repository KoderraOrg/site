<template>
  <header class="border-b">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <img src="/images/logos/logo.png" alt="Logo" class="h-8 w-8" />
          <span class="text-xl font-bold">Empresa</span>
        </a>
        
        <nav class="hidden md:flex items-center gap-6">
          <a href="/" class="text-sm font-medium hover:text-primary">Início</a>
          <a href="/services" class="text-sm font-medium hover:text-primary">Serviços</a>
          <a href="/aboutUs" class="text-sm font-medium hover:text-primary">Sobre</a>
          <a href="/contact" class="text-sm font-medium hover:text-primary">Contato</a>
          <a v-if="blogEnabled" href="/blog" class="text-sm font-medium hover:text-primary">Blog</a>
        </nav>

        <div class="flex items-center gap-4">
          <AuthButton />
          <WhatsAppLink v-if="whatsappEnabled" buttonSize="sm" buttonVariant="outline" />
          <CalendarBookingIframe v-if="calEnabled" buttonSize="sm" />
          <a href="/contact">
            <Button size="sm">Fale Conosco</Button>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { isBlogEnabled } from '~/lib/utils'

const blogEnabled = isBlogEnabled()
const calEnabled = computed(() => {
  const config = useRuntimeConfig()
  return !!config.public.calUsername
})

const whatsappEnabled = computed(() => {
  const config = useRuntimeConfig()
  return !!config.public.whatsappNumber
})
</script> 