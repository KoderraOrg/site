<template>
  <div class="min-h-screen">
    <Header />
    
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center">
      <div class="absolute inset-0 z-0">
        <img src="/images/hero-image.jpg" alt="Hero Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/75"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Transformando Ideias em <span class="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Realidade Digital</span>
          </h1>
          <p class="text-lg md:text-xl text-primary-100 mb-8">
            Somos uma empresa de tecnologia focada em criar soluções inovadoras que impulsionam o crescimento do seu negócio.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" class="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Fale Conosco
            </Button>
            <Button size="lg" variant="outline" class="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços Section -->
    <section class="py-20 bg-gradient-to-b from-white to-primary-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Nossos Serviços</h2>
          <p class="text-primary-600 max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas para impulsionar sua presença digital
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Card class="relative h-full bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle class="text-2xl font-bold text-primary-900">Desenvolvimento Web</CardTitle>
                <CardDescription class="text-primary-600">
                  Criamos websites modernos e responsivos que convertem visitantes em clientes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Card class="relative h-full bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle class="text-2xl font-bold text-primary-900">Consultoria Digital</CardTitle>
                <CardDescription class="text-primary-600">
                  Estratégias personalizadas para maximizar sua presença online.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Card class="relative h-full bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <CardTitle class="text-2xl font-bold text-primary-900">Marketing Digital</CardTitle>
                <CardDescription class="text-primary-600">
                  Campanhas eficientes para aumentar sua visibilidade e engajamento.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre Nós Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Sobre Nossa Empresa</h2>
            <p class="text-primary-600 mb-6 text-lg">
              Com mais de 10 anos de experiência no mercado, nos especializamos em criar soluções digitais que transformam negócios.
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-2">
                <h3 class="text-3xl font-bold text-primary-600">500+</h3>
                <p class="text-primary-600">Projetos Entregues</p>
              </div>
              <div class="space-y-2">
                <h3 class="text-3xl font-bold text-primary-600">98%</h3>
                <p class="text-primary-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25"></div>
            <img src="/images/about-image.jpg" alt="About Us" class="w-full h-auto rounded-xl relative z-10 shadow-soft" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary text-primary-foreground">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
        <p class="mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer.
        </p>
        <Button size="lg" variant="secondary">Agende uma Consulta</Button>
      </div>
    </section>
   <section class="py-20 max-w-md mx-auto bg-background">
      <div class="text-center mb-8">
         <h2 class="text-3xl font-bold text-gray-800 mb-4">Entre em contato</h2>
         <p class="text-gray-600 leading-relaxed mb-6">
            Quer saber mais sobre nossos serviços ou precisa de um orçamento? 
            Deixe sua mensagem e nossa equipe especializada entrará em contato.
         </p>
         <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <div class="flex items-center gap-2 text-blue-600">
               <i class="fas fa-check-circle"></i>
               <span>Orçamento gratuito</span>
            </div>
            <div class="flex items-center gap-2 text-blue-600">
               <i class="fas fa-check-circle"></i>
               <span>Atendimento rápido</span>
            </div>
         </div>
      </div>
      <EmailForm />
   </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Home',
  description: 'Welcome to our website. Find the best content and services here.',
  url: '/',
  type: 'website'
})
</script>
