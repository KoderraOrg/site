<template>
    <section class="bg-cover bg-center text-white relative h-[32rem]">
        <div class="absolute inset-0 z-0">
            <img :src="heroImage" :alt="heroAlt" class="w-full h-full object-cover brightness-50" />
            <div class="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>
        </div>
        <div class="container mx-auto px-4 h-full flex items-center relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                    {{ title }}
                </h1>
                <p class="text-xl md:text-2xl italic leading-relaxed font-light text-primary-100 max-w-2xl mx-auto">
                    {{ description }}
                </p>
                <div class="my-8 mb-4 bg-gradient-to-r from-primary-400 to-primary-300 w-20 h-1 mx-auto rounded-full"></div>
                <span class="text-primary-200 text-sm font-medium">
                    {{ subtitle }}
                </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    heroImage: string
    heroAlt?: string
    title: string
    description: string
    subtitle: string
}>()
</script>


