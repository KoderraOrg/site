<template>
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-500/5 rounded-2xl"></div>
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <!-- Main heading -->
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-6 leading-tight">
            Pronto para Transformar Seu Negócio?
          </h2>
          
          <!-- Description -->
          <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Não perca mais tempo. Solicite uma proposta personalizada e descubra como 
            podemos impulsionar o crescimento da sua empresa no mundo digital.
          </p>
          
          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              class="bg-pink-500 hover:bg-pink-600 text-white rounded-md py-4 px-8 font-semibold text-lg transition-all duration-300"
              @click="handleCtaClick"
            >
              Solicite Proposta
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              class="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-100 rounded-md py-4 px-8 font-semibold text-lg transition-all duration-300"
              @click="scrollToContact"
            >
              Fale Conosco
            </Button>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 pt-8 border-t border-gray-700/50">
            <div class="flex items-center gap-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">Consultoria gratuita</span>
            </div>
            
            <div class="flex items-center gap-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">Resposta em 24h</span>
            </div>
            
            <div class="flex items-center gap-2 text-gray-300">
              <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const handleCtaClick = () => {
  // Scroll to contact form or open contact modal
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script> 