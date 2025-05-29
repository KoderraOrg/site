<template>
  <header class="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <img src="/images/logos/logo.svg" alt="Logo" class="h-12 w-12" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-gray-100 transition-colors duration-300">
              Koderra
            </span>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-4">
          <NuxtLink 
            to="/" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg"
            :class="$route.path === '/' ? 'text-cyan-400 bg-cyan-400/10 cursor-default' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            Início
          </NuxtLink>
          
          <NuxtLink 
            to="/services" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg"
            :class="$route.path === '/services' ? 'text-cyan-400 bg-cyan-400/10 cursor-default' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            Serviços
          </NuxtLink>
          
          <NuxtLink 
            to="/aboutUs" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg"
            :class="$route.path === '/aboutUs' ? 'text-cyan-400 bg-cyan-400/10 cursor-default' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            Sobre
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg"
            :class="$route.path === '/contact' ? 'text-cyan-400 bg-cyan-400/10 cursor-default' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            Contato
          </NuxtLink>
          
          <NuxtLink 
            v-if="blogEnabled" 
            to="/blog" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg"
            :class="$route.path.startsWith('/blog') ? 'text-cyan-400 bg-cyan-400/10 cursor-default' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            Blog
          </NuxtLink>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <CalendarBookingIframe v-if="calEnabled" buttonSize="sm" />
          
          <NuxtLink to="/contact">
            <Button 
              size="sm" 
              class="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-6 py-2 font-semibold transition-all duration-300 hover:shadow-pink-500/25"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Fale Conosco
            </Button>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
          :class="{ 'text-cyan-400 bg-gray-800/50': mobileMenuOpen }"
        >
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-700/50 py-6">
          <nav class="flex flex-col gap-1">
            <NuxtLink 
              to="/" 
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
              :class="{ 'text-cyan-400 bg-gray-800/30': $route.path === '/' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Início
            </NuxtLink>
            
            <NuxtLink 
              to="/services" 
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
              :class="{ 'text-cyan-400 bg-gray-800/30': $route.path === '/services' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Serviços
            </NuxtLink>
            
            <NuxtLink 
              to="/aboutUs" 
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
              :class="{ 'text-cyan-400 bg-gray-800/30': $route.path === '/aboutUs' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Sobre
            </NuxtLink>
            
            <NuxtLink 
              to="/contact" 
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
              :class="{ 'text-cyan-400 bg-gray-800/30': $route.path === '/contact' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contato
            </NuxtLink>
            
            <NuxtLink 
              v-if="blogEnabled" 
              to="/blog" 
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
              :class="{ 'text-cyan-400 bg-gray-800/30': $route.path.startsWith('/blog') }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              Blog
            </NuxtLink>
          </nav>
          
          <!-- Mobile CTA -->
          <div class="mt-6 px-4">
            <NuxtLink to="/contact" @click="closeMobileMenu">
              <Button 
                class="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3 font-semibold transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Fale Conosco
              </Button>
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { isBlogEnabled } from '~/lib/utils'

const route = useRoute()
const blogEnabled = isBlogEnabled()
const mobileMenuOpen = ref(false)

const calEnabled = computed(() => {
  const config = useRuntimeConfig()
  return !!config.public.calUsername
})

const whatsappEnabled = computed(() => {
  const config = useRuntimeConfig()
  return !!config.public.whatsappNumber
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script> 