<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 overflow-x-hidden">
    <!-- Background gradient with grid pattern -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-25 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern"></div>
    </div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto text-center -mt-30">
      <!-- Main title -->
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-6 leading-24">
        Transformamos Sua
        <span class="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Visão Digital
        </span>
        em Realidade
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        Somos especialistas em consultoria digital, oferecendo soluções inovadoras 
        que impulsionam o crescimento do seu negócio no mundo digital.
      </p>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <Button 
          size="lg" 
          class="bg-cyan-400 hover:bg-cyan-500 text-gray-800 rounded-md py-3 px-6 font-semibold text-md transition-all duration-300"
          @click="scrollToContact"
        >
          Fale Conosco
        </Button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
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
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to bottom, transparent, rgb(20, 26, 35)),
    linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px);
  background-size: 100% 100%, 50px 50px, 50px 50px;
  background-position: 0 0, 0 0, 0 0;
  animation: grid-move 20s linear infinite;
  will-change: transform;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(25px, 25px);
  }
}

/* Alternative grid pattern with dots */
.bg-grid-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.25) 1px, transparent 0);
  background-size: 25px 25px;
  animation: grid-dots 15s linear infinite reverse;
  will-change: transform;
}

@keyframes grid-dots {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(12px, 12px);
  }
}
</style> 