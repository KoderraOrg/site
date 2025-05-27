<template>
  <div>
    <slot name="trigger">
      <Button 
        :variant="buttonVariant" 
        :size="buttonSize" 
        :class="buttonClass"
        @click="openWhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        {{ buttonText }}
      </Button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const props = defineProps({
  whatsappNumber: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: 'Olá! Gostaria de mais informações.',
  },
  buttonText: {
    type: String,
    default: 'Falar no WhatsApp',
  },
  buttonVariant: {
    type: String as () => ButtonVariant,
    default: 'default',
  },
  buttonSize: {
    type: String as () => ButtonSize,
    default: 'default',
  },
  buttonClass: {
    type: String,
    default: '',
  },
})

const openWhatsApp = () => {
  const config = useRuntimeConfig()
  const whatsappNumber = props.whatsappNumber || config.public.whatsappNumber
  
  if (!whatsappNumber) {
    console.error('Número do WhatsApp não configurado. Configure WHATSAPP_NUMBER no .env')
    return
  }
  
  // Remover caracteres especiais do número
  const cleanNumber = whatsappNumber.replace(/\D/g, '')
  
  // Codificar a mensagem para URL
  const encodedMessage = encodeURIComponent(props.message)
  
  // Criar URL do WhatsApp
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  // Abrir WhatsApp em nova aba
  window.open(whatsappUrl, '_blank')
}
</script> 