<template>
  <div class="w-full mx-auto p-6 bg-white border border-gray-100 rounded-lg sm:shadow-md shadow-none">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Envie-nos uma mensagem</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Digite seu nome"
          class="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Digite seu email"
          class="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700">Assunto</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          placeholder="Digite o assunto"
          class="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Digite sua mensagem"
          rows="4"
          class="mt-1 block w-full resize-none rounded border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        :disabled="loading"
      >
        {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
      </button>
    </form>

    <div v-if="success" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
      Mensagem enviada com sucesso!
    </div>

    <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
      {{ error }}
    </div>
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
  } catch (e) {
    error.value = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
  } finally {
    loading.value = false
  }
}
</script> 