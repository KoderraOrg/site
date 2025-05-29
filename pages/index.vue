<template>
  <div class="min-h-screen bg-gray-900">
    <Header />
    
    <!-- Hero Section -->
    <div class="pt-16">
      <Hero />
    </div>

    <!-- Features Section -->
    <section class="py-20 px-6 bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Nossos Serviços
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e impulsionar o crescimento do seu negócio
          </p>
        </div>

        <!-- Features grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Desenvolvimento Web"
            description="Criamos websites modernos, responsivos e otimizados que convertem visitantes em clientes e fortalecem sua marca online."
            icon="code"
          />
          
          <FeatureCard
            title="Consultoria Digital"
            description="Estratégias personalizadas para maximizar sua presença online, otimizar processos e acelerar o crescimento digital."
            icon="lightbulb"
          />
          
          <FeatureCard
            title="Marketing Digital"
            description="Campanhas eficientes e segmentadas para aumentar sua visibilidade, engajamento e conversões nas redes sociais."
            icon="megaphone"
          />
          
          <FeatureCard
            title="Análise de Dados"
            description="Insights valiosos através de análise avançada de dados para tomada de decisões estratégicas baseadas em evidências."
            icon="chart"
          />
          
          <FeatureCard
            title="Gestão de Equipes"
            description="Otimização de processos e gestão eficiente de equipes digitais para maximizar produtividade e resultados."
            icon="users"
          />
          
          <FeatureCard
            title="Inovação & Crescimento"
            description="Soluções inovadoras e estratégias de crescimento acelerado para posicionar sua empresa à frente da concorrência."
            icon="rocket"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Call to Action Section -->
    <CtaSection />

    <!-- Contact Section -->
    <section id="contact" class="py-20 max-w-md mx-auto bg-gray-900">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-100 mb-4">Entre em contato</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Quer saber mais sobre nossos serviços ou precisa de um orçamento? 
          Deixe sua mensagem e nossa equipe especializada entrará em contato.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <div class="flex items-center gap-2 text-cyan-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>Orçamento gratuito</span>
          </div>
          <div class="flex items-center gap-2 text-cyan-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>Atendimento rápido</span>
          </div>
        </div>
      </div>
      <EmailForm />
    </section>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import Testimonials from '@/components/Testimonials.vue'
import CtaSection from '@/components/CtaSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import EmailForm from '@/components/EmailForm.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Consultoria Digital - Transformando Negócios no Mundo Digital',
  description: 'Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas.',
  url: '/',
  type: 'website'
})
</script>
