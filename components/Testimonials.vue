<template>
  <section class="relative py-20 px-6 overflow-hidden">
    <!-- Background gradient and patterns -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <!-- Floating orbs -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 opacity-30" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="relative max-w-6xl mx-auto z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          O Que Nossos Clientes Dizem
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Depoimentos reais de empresas que transformaram seus negócios conosco
        </p>
      </div>

      <!-- Testimonials slider -->
      <div class="relative px-8 sm:px-16 md:px-20">
        <div>
          <TransitionGroup
            name="testimonial"
            tag="div"
            class="relative min-h-[400px] md:min-h-[350px] lg:min-h-[320px]"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="index === currentIndex"
              :key="testimonial.id"
              class="absolute inset-0 flex items-center justify-center w-full"
            >
              <div class="bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col items-center text-center max-w-4xl mx-auto w-full border border-gray-600/30 shadow-2xl shadow-black/20">
                <!-- Quote icon -->
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-pink-500/30 rounded-full flex items-center justify-center mb-6 border border-cyan-400/20">
                  <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Testimonial content -->
                <blockquote class="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl">
                  "{{ testimonial.content }}"
                </blockquote>

                <!-- Rating stars -->
                <div class="flex gap-1 mb-4">
                  <svg
                    v-for="star in testimonial.rating"
                    :key="star"
                    class="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>

                <!-- Author info -->
                <div class="text-center">
                  <h4 class="font-semibold text-gray-100 text-lg">{{ testimonial.name }}</h4>
                  <p class="text-cyan-400 font-medium">{{ testimonial.role }}</p>
                  <p class="text-gray-400">{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Navigation buttons -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-cyan-600/20 transition-all duration-300 z-10 border border-gray-600/30 shadow-lg"
          aria-label="Depoimento anterior"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-gray-800/90 to-gray-700/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-cyan-600/20 transition-all duration-300 z-10 border border-gray-600/30 shadow-lg"
          aria-label="Próximo depoimento"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <!-- Dots indicator -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          @click="goToTestimonial(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
          :class="index === currentIndex ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-cyan-400/50' : 'bg-gray-600/60 hover:bg-gray-500/80'"
          :aria-label="`Ir para depoimento ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { testimonials, currentIndex, nextTestimonial, prevTestimonial, goToTestimonial } = useTestimonials()

// Auto-advance testimonials
let autoAdvanceInterval: NodeJS.Timeout | null = null

onMounted(() => {
  autoAdvanceInterval = setInterval(() => {
    nextTestimonial()
  }, 5000) // Change every 5 seconds
})

onUnmounted(() => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
})
</script>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.testimonial-enter-from {
  opacity: 0;
}

.testimonial-leave-to {
  opacity: 0;
}

.testimonial-enter-to,
.testimonial-leave-from {
  opacity: 1;
}
</style> 