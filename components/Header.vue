<template>
  <header class="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 sm:h-20 items-center justify-between">
        <!-- Logo with enhanced responsiveness -->
        <a href="/" class="flex items-center gap-2 sm:gap-3 group">
          <div class="relative">
            <img src="/images/logos/logo.svg" alt="Logo" class="h-10 w-10 sm:h-12 sm:w-12" />
            <div class="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 transition-opacity duration-300"></div>
          </div>
          <div class="flex flex-col">
            <span class="text-lg sm:text-xl font-bold text-gray-100 transition-colors duration-300 ">
              Koderra
            </span>
          </div>
        </a>
        
        <!-- Desktop Navigation with improved styling -->
        <nav class="hidden lg:flex items-center gap-2">
          <a 
            href="/" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg"
            :class="$route.path === '/' ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            <span class="relative z-10">Início</span>
            <div v-if="$route.path === '/'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg"></div>
          </a>
          
          <a 
            href="/services" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg"
            :class="$route.path === '/services' ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            <span class="relative z-10">Serviços</span>
            <div v-if="$route.path === '/services'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg"></div>
          </a>
          
          <a 
            href="/aboutUs" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg"
            :class="$route.path === '/aboutUs' ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            <span class="relative z-10">Sobre</span>
            <div v-if="$route.path === '/aboutUs'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg"></div>
          </a>
          
          <a 
            href="/contact" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg"
            :class="$route.path === '/contact' ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            <span class="relative z-10">Contato</span>
            <div v-if="$route.path === '/contact'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg"></div>
          </a>
          
          <a 
            v-if="blogEnabled" 
            href="/blog" 
            class="text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg"
            :class="$route.path.startsWith('/blog') ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'"
          >
            <span class="relative z-10">Blog</span>
            <div v-if="$route.path.startsWith('/blog')" class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg"></div>
          </a>
        </nav>

        <!-- Enhanced CTA Buttons for desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <CalendarBookingIframe v-if="calEnabled" buttonSize="sm" />
          
          <a href="/contact">
            <Button 
              size="sm" 
              class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg px-4 py-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span class="hidden xl:inline">Fale Conosco</span>
              <span class="xl:hidden">Contato</span>
            </Button>
          </a>
        </div>

        <!-- Enhanced tablet navigation (md screens) -->
        <div class="hidden md:flex lg:hidden items-center gap-2">
          <a href="/contact">
            <Button 
              size="sm" 
              class="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 rounded-lg px-4 py-2 font-semibold transition-all duration-300"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Button>
          </a>
        </div>

        <!-- Enhanced mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 relative"
          :class="{ 'text-cyan-400 bg-gray-800/50': mobileMenuOpen }"
        >
          <span class="sr-only">Abrir menu</span>
          <div class="w-6 h-6 relative">
            <span 
              class="absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-out"
              :class="mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'"
            ></span>
            <span 
              class="absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-out top-3"
              :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span 
              class="absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-out"
              :class="mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'"
            ></span>
          </div>
        </button>
      </div>

      <!-- Enhanced mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-700/50 bg-gray-900/95 backdrop-blur-md">
          <div class="px-4 py-6">
            <nav class="flex flex-col gap-2">
              <a 
                href="/" 
                @click="closeMobileMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                :class="{ 'text-cyan-400 bg-cyan-400/10': $route.path === '/' }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <span class="font-medium">Início</span>
              </a>
              
              <a 
                href="/services" 
                @click="closeMobileMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                :class="{ 'text-cyan-400 bg-cyan-400/10': $route.path === '/services' }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span class="font-medium">Serviços</span>
              </a>
              
              <a 
                href="/aboutUs" 
                @click="closeMobileMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                :class="{ 'text-cyan-400 bg-cyan-400/10': $route.path === '/aboutUs' }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="font-medium">Sobre</span>
              </a>
              
              <a 
                href="/contact" 
                @click="closeMobileMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                :class="{ 'text-cyan-400 bg-cyan-400/10': $route.path === '/contact' }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">Contato</span>
              </a>
              
              <a 
                v-if="blogEnabled" 
                href="/blog" 
                @click="closeMobileMenu"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                :class="{ 'text-cyan-400 bg-cyan-400/10': $route.path.startsWith('/blog') }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
                <span class="font-medium">Blog</span>
              </a>
            </nav>
            
            <!-- Enhanced mobile CTA -->
            <div class="mt-6 space-y-3">
              <a href="/contact" @click="closeMobileMenu" class="block">
                <Button 
                  class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 rounded-lg py-3 font-semibold transition-all duration-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Fale Conosco
                </Button>
              </a>
              
              <!-- Mobile quick contact info -->
              <div class="text-center">
                <p class="text-xs text-gray-400 mb-2">Atendimento rápido e personalizado</p>
                <div class="flex justify-center gap-4">
                  <div class="flex items-center gap-1 text-xs text-cyan-400">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>Orçamento grátis</span>
                  </div>
                  <div class="flex items-center gap-1 text-xs text-pink-400">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>24h resposta</span>
                  </div>
                </div>
              </div>
            </div>
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