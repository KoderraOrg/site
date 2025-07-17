<template>
  <div class="min-h-screen bg-gray-900 antialiased">
    <!-- Loading indicator -->
    <div id="loading-screen" class="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-1000 opacity-100 pointer-events-none">
      <div class="relative">
        <div class="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
        <div class="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-300"></div>
      </div>
    </div>

    <!-- Main app container -->
    <div class="relative">
      <NuxtRouteAnnouncer />
      
      <!-- Page content with smooth transitions -->
      <Transition
        name="page"
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <NuxtPage />
      </Transition>
    </div>

    <!-- Scroll to top button -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-0"
    >
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="cursor-pointer fixed bottom-6 right-6 z-40 p-3 bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Voltar ao topo"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showScrollTop = ref(false)

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Show/hide scroll to top button
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

// Hide loading screen after mount
onMounted(() => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen) {
      loadingScreen.style.opacity = '0'
      setTimeout(() => {
        loadingScreen.style.display = 'none'
      }, 1000)
    }
  }, 500)

  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Page meta
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    { name: 'theme-color', content: '#111827' },
    { name: 'msapplication-TileColor', content: '#111827' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ]
})
</script>

<style>
/* Global styles for improved responsiveness */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Animation delay utility */
.animation-delay-300 {
  animation-delay: 300ms;
}

/* Responsive font sizes */
@media (max-width: 640px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  html {
    font-size: 15px;
  }
}

@media (min-width: 1025px) {
  html {
    font-size: 16px;
  }
}

/* Focus improvements for accessibility */
button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #38bdf8;
  outline-offset: 2px;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
