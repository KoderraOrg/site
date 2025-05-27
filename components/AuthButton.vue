<template>
  <div>
    <div v-if="status === 'authenticated'" class="flex items-center gap-4">
      <span>{{ data?.user?.name }}</span>
      <button
        @click="() => signOut()"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut, status, data } = useAuth()
</script> 