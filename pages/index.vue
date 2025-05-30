<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <Header />
    
    <!-- Hero Section -->
    <div class="sm:pt-12 pt-4">
      <Hero />
    </div>

    <!-- Features Section -->
    <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4 sm:mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Nossos Serviços
          </div>
          
          <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 mb-4 sm:mb-6 leading-tight">
            Soluções Completas para
            <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Seu Negócio Digital
            </span>
          </h2>
          
          <p class="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforme sua presença digital e impulsione o crescimento do seu negócio com nossas soluções especializadas
          </p>
        </div>

        <!-- Features grid with enhanced responsiveness -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <FeatureCard
            title="Desenvolvimento Web"
            description="Criamos websites modernos, responsivos e otimizados que convertem visitantes em clientes e fortalecem sua marca online."
            icon="code"
            :gradient="['from-cyan-400', 'to-blue-500']"
          />
          
          <FeatureCard
            title="Consultoria Digital"
            description="Estratégias personalizadas para maximizar sua presença online, otimizar processos e acelerar o crescimento digital."
            icon="lightbulb"
            :gradient="['from-purple-400', 'to-pink-500']"
          />
          
          <FeatureCard
            title="Marketing Digital"
            description="Campanhas eficientes e segmentadas para aumentar sua visibilidade, engajamento e conversões nas redes sociais."
            icon="megaphone"
            :gradient="['from-orange-400', 'to-red-500']"
          />
          
          <FeatureCard
            title="Análise de Dados"
            description="Insights valiosos através de análise avançada de dados para tomada de decisões estratégicas baseadas em evidências."
            icon="chart"
            :gradient="['from-green-400', 'to-emerald-500']"
          />
          
          <FeatureCard
            title="Gestão de Equipes"
            description="Otimização de processos e gestão eficiente de equipes digitais para maximizar produtividade e resultados."
            icon="users"
            :gradient="['from-indigo-400', 'to-purple-500']"
          />
          
          <FeatureCard
            title="Inovação & Crescimento"
            description="Soluções inovadoras e estratégias de crescimento acelerado para posicionar sua empresa à frente da concorrência."
            icon="rocket"
            :gradient="['from-pink-400', 'to-rose-500']"
          />
        </div>

        <!-- Additional features section -->
        <div class="mt-16 sm:mt-20 lg:mt-24">
          <div class="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700/50">
            <div class="text-center mb-8 sm:mb-12">
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
                Por que escolher a Koderra?
              </h3>
              <p class="text-gray-300 max-w-2xl mx-auto">
                Somos mais que uma agência digital. Somos seus parceiros no crescimento.
              </p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-100 mb-2">Entrega Rápida</h4>
                <p class="text-gray-400 text-sm">Projetos entregues no prazo com qualidade excepcional</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-100 mb-2">Segurança Total</h4>
                <p class="text-gray-400 text-sm">Protocolos de segurança avançados em todos os projetos</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-100 mb-2">Soluções Personalizadas</h4>
                <p class="text-gray-400 text-sm">Soluções personalizadas para atender as necessidades de cada cliente</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-100 mb-2">Resultados Mensuráveis</h4>
                <p class="text-gray-400 text-sm">Métricas claras e relatórios detalhados de performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Call to Action Section -->
    <CtaSection />

    <!-- Contact Section with enhanced design -->
    <section id="contact" class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-4 sm:mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Entre em Contato
          </div>
          
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 sm:mb-6">
            Vamos Conversar Sobre
            <span class="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Seu Próximo Projeto
            </span>
          </h2>
          
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Quer saber mais sobre nossos serviços ou precisa de um orçamento? 
            Deixe sua mensagem e nossa equipe especializada entrará em contato.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
            <div class="flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Orçamento gratuito</span>
            </div>
            <div class="flex items-center gap-2 text-pink-400 bg-pink-400/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Atendimento rápido</span>
            </div>
            <div class="flex items-center gap-2 text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Consultoria especializada</span>
            </div>
          </div>
        </div>
        
        <!-- Contact form container -->
        <div class="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700/50">
          <EmailForm />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import Testimonials from '@/components/Testimonials.vue'
import CtaSection from '@/components/CtaSection.vue'
import Footer from '~/components/Footer.vue'
import EmailForm from '@/components/EmailForm.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Consultoria Digital - Transformando Negócios no Mundo Digital',
  description: 'Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas para impulsionar o crescimento do seu negócio.',
  url: '/',
  type: 'website',
  keywords: [
    'consultoria digital',
    'desenvolvimento web',
    'marketing digital',
    'transformação digital',
    'soluções digitais',
    'crescimento digital',
    'koderra',
    'agência digital',
    'websites responsivos',
    'estratégias digitais'
  ],
  author: 'Koderra - Consultoria Digital'
})
</script>
