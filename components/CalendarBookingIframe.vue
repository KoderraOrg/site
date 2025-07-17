<template>
  <div>
    <slot name="trigger">
      <Button 
        :variant="buttonVariant" 
        :size="buttonSize" 
        :class="buttonClass"
        @click="openCalModal"
      >
        {{ buttonText }}
      </Button>
    </slot>
    
    <!-- Cal.com Modal com iframe -->
    <Teleport to="body">
      <div v-if="showModal" class="cal-modal-overlay" @click="closeCalModal">
        <div class="cal-modal-container" @click.stop>
          <button class="cal-modal-close" @click="closeCalModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
          <div class="cal-modal-content">
            <div v-if="loadError" class="cal-error">
              <p class="text-center text-red-600">{{ loadError }}</p>
            </div>
            <iframe 
              v-else
              :src="calUrl" 
              width="100%" 
              height="100%" 
              frameborder="0"
              style="border: none; border-radius: 8px;"
              @load="onIframeLoad"
              @error="onIframeError"
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { computed, ref } from 'vue'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const props = defineProps({
  calUsername: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Agende seu horário',
  },
  buttonVariant: {
    type: String as () => ButtonVariant,
    default: 'outline',
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

const showModal = ref(false)
const loadError = ref('')

const calUrl = computed(() => {
  const username = props.calUsername || useRuntimeConfig().public.calUsername
  
  if (!username) {
    loadError.value = 'Cal.com username não configurado'
    return ''
  }
  
  // URL do Cal.com para embed via iframe
  return `https://cal.com/${username}?embed=true&theme=light`
})

const openCalModal = () => {
  if (!calUrl.value) {
    loadError.value = 'Configure CAL_USERNAME no arquivo .env'
    return
  }
  
  showModal.value = true
  loadError.value = ''
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
}

const closeCalModal = () => {
  showModal.value = false
  loadError.value = ''
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
}

const onIframeLoad = () => {
  console.log('Cal.com iframe carregado com sucesso')
}

const onIframeError = () => {
  loadError.value = 'Erro ao carregar o calendário. Verifique se o username está correto.'
}
</script>

<style scoped>
.cal-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 30px;
}

.cal-modal-container {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 1024px;
  height: 85vh;
  max-height: calc(100vh - 40px);
  position: relative;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.cal-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
}

.cal-modal-close:hover {
  background-color: #f1f5f9;
}

.cal-modal-content {
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.cal-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}
</style> 