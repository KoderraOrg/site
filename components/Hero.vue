<template>
  <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background gradient with enhanced design -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
    
    <!-- Grid pattern overlay with better responsiveness -->
    <div class="absolute inset-0 opacity-20 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern"></div>
    </div>
    
    <!-- Enhanced animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-orange-500/5 rounded-full blur-2xl animate-float delay-2000"></div>
    </div>

    <!-- Enhanced content with better responsive design -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <!-- Badge/Tag -->
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        Consultoria Digital Especializada
      </div>

      <!-- Main title with enhanced responsiveness -->
      <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 mb-4 sm:mb-6 leading-tight animate-slide-up">
        <span class="block">Transformamos Sua</span>
        <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          Visão Digital
        </span>
        <span class="block">em Realidade</span>
      </h1>

      <!-- Enhanced subtitle -->
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
        Somos especialistas em consultoria digital, oferecendo soluções inovadoras 
        que impulsionam o crescimento do seu negócio no mundo digital.
      </p>

      <!-- Enhanced statistics -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12 animate-slide-up delay-300">
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">150+</div>
          <div class="text-xs sm:text-sm text-gray-400">Projetos Entregues</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-1">98%</div>
          <div class="text-xs sm:text-sm text-gray-400">Satisfação</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-1">24/7</div>
          <div class="text-xs sm:text-sm text-gray-400">Suporte</div>
        </div>
        <div class="text-center">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1">5+</div>
          <div class="text-xs sm:text-sm text-gray-400">Anos Exp.</div>
        </div>
      </div>

      <!-- Enhanced CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
        <Button 
          size="lg" 
          class="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 rounded-xl py-4 px-8 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          @click="scrollToContact"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Fale Conosco
        </Button>
        
        <Button 
          variant="outline"
          size="lg" 
          class="w-full sm:w-auto border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 bg-transparent hover:bg-cyan-400/10 rounded-xl py-4 px-8 font-semibold text-base sm:text-lg transition-all duration-300"
          @click="scrollToServices"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Ver Serviços
        </Button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToServices = () => {
  // Scroll to services section
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Enhanced grid pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to bottom, transparent, rgb(17, 24, 39)),
    linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px, 40px 40px;
  background-position: 0 0, 0 0, 0 0;
  animation: grid-move 25s linear infinite;
  will-change: transform;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(20px, 20px);
  }
}

/* Enhanced grid pattern with improved dots */
.bg-grid-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0);
  background-size: 30px 30px;
  animation: grid-dots 20s linear infinite reverse;
  will-change: transform;
}

@keyframes grid-dots {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(15px, 15px);
  }
}

/* Gradient animation */
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* Enhanced float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(-10px) rotate(240deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.delay-2000 {
  animation-delay: 2s;
}

/* Enhanced responsive breakpoints */
@media (max-width: 475px) {
  .xs\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

/* Improved animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}

.delay-500 {
  animation-delay: 500ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 