<template>
  <a href="/services" class="group h-full">
    <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-700/50 p-6 sm:p-8 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      <!-- Background glow effect -->
      <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl sm:rounded-3xl blur-xl"
           :class="gradientClasses"></div>
      
      <!-- Icon container with enhanced gradient -->
      <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500"
           :class="`bg-gradient-to-br ${gradientClasses} shadow-lg`">
        <component :is="iconComponent" class="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
        
        <!-- Icon glow effect -->
        <div class="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"
             :class="`bg-gradient-to-br ${gradientClasses}`"></div>
      </div>

      <!-- Content wrapper for flex layout -->
      <div class="flex-1 flex flex-col">
        <!-- Title with better typography -->
        <h3 class="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
          {{ title }}
        </h3>

        <!-- Description with improved readability -->
        <p class="text-gray-300 group-hover:text-gray-200 leading-relaxed text-sm sm:text-base flex-1 transition-colors duration-300">
          {{ description }}
        </p>

        <!-- Call to action link with fixed colors -->
        <div class="mt-4 sm:mt-6">
          <div class="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
               :class="linkColorClass">
            <span>Saiba mais</span>
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <component :is="iconComponent" class="w-full h-full" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  gradient?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  gradient: () => ['from-cyan-400', 'to-blue-500']
})

// Generate gradient classes from props
const gradientClasses = computed(() => {
  return props.gradient ? props.gradient.join(' ') : 'from-cyan-400 to-blue-500'
})

// Map gradient colors to text colors (fixed approach)
const linkColorClass = computed(() => {
  const gradientToColorMap: Record<string, string> = {
    'from-cyan-400': 'text-cyan-400 group-hover:text-cyan-300',
    'from-purple-400': 'text-purple-400 group-hover:text-purple-300',
    'from-orange-400': 'text-orange-400 group-hover:text-orange-300',
    'from-green-400': 'text-green-400 group-hover:text-green-300',
    'from-indigo-400': 'text-indigo-400 group-hover:text-indigo-300',
    'from-pink-400': 'text-pink-400 group-hover:text-pink-300',
  }
  
  const firstColor = props.gradient?.[0] || 'from-cyan-400'
  return gradientToColorMap[firstColor] || 'text-cyan-400 group-hover:text-cyan-300'
})

// Enhanced icon components mapping with better designs
const iconComponents = {
  code: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    })
  ]),
  
  chart: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    })
  ]),
  
  megaphone: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
    })
  ]),
  
  lightbulb: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    })
  ]),
  
  users: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
    })
  ]),
  
  rocket: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '2',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
    })
  ])
}

const iconComponent = computed(() => {
  return iconComponents[props.icon as keyof typeof iconComponents] || iconComponents.lightbulb
})
</script> 