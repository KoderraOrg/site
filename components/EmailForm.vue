<template>
  <div class="w-full mx-auto p-8 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-100">Envie-nos uma mensagem</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nome</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Digite seu nome"
          class="w-full rounded-md border border-gray-600 bg-gray-700/50 p-3 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Digite seu email"
          class="w-full rounded-md border border-gray-600 bg-gray-700/50 p-3 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
          required
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          placeholder="Digite o assunto"
          class="w-full rounded-md border border-gray-600 bg-gray-700/50 p-3 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Digite sua mensagem"
          rows="4"
          class="w-full resize-none rounded-md border border-gray-600 bg-gray-700/50 p-3 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="cursor-pointer w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        :disabled="loading"
      >
        <span v-if="loading" class="flex items-center justify-center gap-2">
          <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Enviando...
        </span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          Enviar Mensagem
        </span>
      </button>
    </form>

    <!-- Success message -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="success" class="mt-6 p-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl flex items-center gap-3">
        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
      </div>
    </Transition>

    <!-- Error message -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="error" class="mt-6 p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl flex items-center gap-3">
        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <span>{{ error }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  success.value = false

  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: form
    })
    
    // Limpar o formulário após o envio
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    
    success.value = true
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (e) {
    error.value = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
    
    // Auto-hide error message after 5 seconds
    setTimeout(() => {
      error.value = ''
    }, 5000)
  } finally {
    loading.value = false
  }
}
</script> 