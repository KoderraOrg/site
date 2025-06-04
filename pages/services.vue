<template>
    <Header />
    <TopBar />
    <InternHero
        heroImage="/images/services-hero.jpg"
        heroAlt="Imagem de fundo da página de serviços"
        title="Nossos Serviços"
        description="Soluções completas em climatização e refrigeração para seu negócio"
        subtitle="Excelência e compromisso em cada projeto"
    />
    
    <!-- Breadcrumb -->
    <div class="bg-gray-800 border-b border-gray-700">
        <div class="container mx-auto px-4 py-3 text-sm text-gray-400">
            <a href="/" class="hover:text-blue-400 cursor-pointer transition-colors duration-200">Home</a> 
            <span class="mx-2">></span> 
            <span class="text-blue-400">Serviços</span>
        </div>
    </div>

    <!-- Main Content -->
    <div class="bg-gray-900 min-h-screen">
        <div class="container mx-auto px-4 py-16">
            <!-- Services Section -->
            <section class="mb-20">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        O Que Oferecemos
                    </h2>
                    <p class="text-gray-400 text-lg leading-relaxed">
                        Soluções completas e inovadoras para transformar sua presença digital
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="group relative">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10 transition duration-1000 group-hover:duration-200"></div>
                        <Card class="relative h-full bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300">
                            <CardHeader class="pb-4">
                                <div class="w-16 h-16 bg-gray-700/50 border border-gray-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <CardTitle class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Desenvolvimento Web
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="text-gray-400 leading-relaxed">
                                    Sites e aplicações web modernas e responsivas, utilizando as mais recentes tecnologias do mercado para garantir performance e usabilidade excepcionais.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div class="group relative">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-10 transition duration-1000 group-hover:duration-200"></div>
                        <Card class="relative h-full bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300">
                            <CardHeader class="pb-4">
                                <div class="w-16 h-16 bg-gray-700/50 border border-gray-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <CardTitle class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Aplicativos Móveis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="text-gray-400 leading-relaxed">
                                    Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, com foco na experiência do usuário e performance otimizada.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div class="group relative">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10 transition duration-1000 group-hover:duration-200"></div>
                        <Card class="relative h-full bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300">
                            <CardHeader class="pb-4">
                                <div class="w-16 h-16 bg-gray-700/50 border border-gray-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <CardTitle class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Consultoria Digital
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="text-gray-400 leading-relaxed">
                                    Análise e otimização de processos digitais para maximizar resultados e impulsionar o crescimento do seu negócio.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <!-- Quality Section -->
            <section class="mb-20">
                <div class="bg-gray-800/50 backdrop-blur-sm py-16 px-8 rounded-3xl border border-gray-700">
                    <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center">
                        Nossa Qualidade
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        <div class="text-center group">
                            <div class="w-20 h-20 bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-4 text-white">Excelência Técnica</h3>
                            <p class="text-gray-400 leading-relaxed">
                                Utilizamos as melhores práticas de desenvolvimento e metodologias ágeis para garantir a qualidade do código e entrega no prazo.
                            </p>
                        </div>

                        <div class="text-center group">
                            <div class="w-20 h-20 bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-4 text-white">Suporte Contínuo</h3>
                            <p class="text-gray-400 leading-relaxed">
                                Oferecemos suporte técnico e manutenção contínua para todos os nossos projetos, garantindo funcionamento perfeito.
                            </p>
                        </div>

                        <div class="text-center group">
                            <div class="w-20 h-20 bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:bg-gray-600/50 hover:border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-4 text-white">Inovação</h3>
                            <p class="text-gray-400 leading-relaxed">
                                Estamos sempre atualizados com as últimas tendências e tecnologias do mercado para oferecer soluções modernas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Clients Section -->
            <section class="py-16">
                <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center">
                    Nossos Clientes
                </h2>
                <div class="w-full overflow-hidden">
                    <swiper
                        :modules="[Autoplay]"
                        :slides-per-view="1"
                        :space-between="32"
                        :loop="true"
                        :autoplay="{
                            delay: 0,
                            disableOnInteraction: false,
                        }"
                        :speed="3500"
                        :breakpoints="{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }"
                        class="clients-swiper"
                    >
                        <swiper-slide v-for="(logo, i) in logos" :key="i">
                            <div class="flex items-center justify-center h-32 p-4">
                                <img 
                                    :src="logo.src" 
                                    :alt="logo.alt" 
                                    class="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                                />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useSeo } from '@/composables/useSeo'

// SEO Configuration
useSeo({
    title: 'Nossos Serviços - Soluções Digitais Completas',
    description: 'Oferecemos desenvolvimento web, aplicativos móveis e consultoria digital. Soluções completas em tecnologia para transformar seu negócio e acelerar seu crescimento digital.',
    url: '/services',
    type: 'website',
    keywords: [
        'desenvolvimento web',
        'aplicativos móveis',
        'consultoria digital',
        'soluções digitais',
        'tecnologia',
        'programação',
        'websites responsivos',
        'transformação digital',
        'koderra serviços',
        'agência digital'
    ],
    author: 'Koderra - Consultoria Digital'
})

const logos = [
    { src: '/images/logos/clients/cliente1.png', alt: 'Logo Cliente 1' },
    { src: '/images/logos/clients/cliente2.png', alt: 'Logo Cliente 2' },
    { src: '/images/logos/clients/cliente3.png', alt: 'Logo Cliente 3' },
    { src: '/images/logos/clients/cliente4.png', alt: 'Logo Cliente 4' },
    { src: '/images/logos/clients/cliente5.png', alt: 'Logo Cliente 5' },
    { src: '/images/logos/clients/cliente6.png', alt: 'Logo Cliente 6' },
    { src: '/images/logos/clients/cliente7.png', alt: 'Logo Cliente 7' },
    { src: '/images/logos/clients/cliente8.png', alt: 'Logo Cliente 8' }
]
</script>

<style scoped>
.clients-swiper {
    padding: 1rem 0;
}

.clients-swiper .swiper-slide {
    height: auto;
}
</style>
