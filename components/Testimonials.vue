<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
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
              <div class="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
                <!-- Quote icon -->
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
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
                    class="w-5 h-5 text-yellow-400 fill-current"
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
          class="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700/80 transition-all duration-300 z-10"
          aria-label="Depoimento anterior"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700/80 transition-all duration-300 z-10"
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
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'"
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
  transition: all 0.6s ease-in-out;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}

.testimonial-enter-to,
.testimonial-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Transição suave para mudanças de altura */
.relative.min-h-\[400px\] {
  transition: min-height 0.3s ease-in-out;
}

/* Melhor responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .testimonial-enter-from,
  .testimonial-leave-to {
    transform: translateY(20px) scale(0.95);
  }
}
</style> 