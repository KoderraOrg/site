<template>
    <Header />
    <div class="font-sans bg-gray-900">
      <!-- Topbar -->
        <TopBar />
  
      <!-- Hero -->
      <InternHero
            heroImage="/images/about-us-hero.jpg"
            heroAlt="Imagem de fundo da página de sobre nós"
            title="Quem somos"
            description="'Uma empresa jovem e inovadora, criada em 2024, com foco em transformar negócios através de soluções digitais personalizadas. Nossa paixão é ajudar nossos clientes a alcançar seus objetivos com qualidade e agilidade.'"
            subtitle="Equipe Koderra"
        />
  
      <!-- Breadcrumb -->
      <div class="bg-gray-800 border-b border-gray-700">
        <div class="container mx-auto px-4 py-3 text-sm text-gray-400">
          <a href="/" class="hover:text-blue-400 cursor-pointer">Home</a> > <span class="text-blue-400">Empresa</span>
        </div>
      </div>
  
      <!-- Sobre Nós -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Sidebar -->
          <aside class="md:col-span-1">
            <div class="bg-gray-800 rounded-lg border border-gray-700 shadow-md p-6">
              <ul class="space-y-4">
                <li 
                  v-for="(item, index) in menuItems" 
                  :key="index"
                  @click="activeTab = item.id"
                  :class="[
                    'border-l-4 pl-4 py-2 cursor-pointer transition-all duration-300',
                    activeTab === item.id 
                      ? 'border-blue-400 bg-blue-500/20' 
                      : 'border-transparent hover:border-blue-400 hover:bg-blue-500/10'
                  ]"
                >
                  <strong :class="activeTab === item.id ? 'text-blue-400' : 'text-white'">{{ item.title }}</strong>
                </li>
              </ul>
            </div>
          </aside>
  
          <!-- Content -->
          <div class="md:col-span-3">
            <div class="bg-gray-800 rounded-lg border border-gray-700 sm:shadow-md shadow-none p-8">
              <transition name="fade" mode="out-in">
                <div :key="activeTab">
                  <!-- Sobre Nós -->
                  <div v-if="activeTab === 'sobre'">
                    <h2 class="text-3xl font-bold mb-6 text-white">SOBRE NÓS</h2>
                    <div class="space-y-6 text-gray-400">
                      <p class="leading-relaxed">A Koderra é uma empresa nova de consultoria e soluções digitais, fundada em 2024, com o propósito de transformar a jornada digital de nossos clientes.</p>
                      <p class="leading-relaxed">Nascemos com a missão de democratizar o acesso a soluções digitais de qualidade, oferecendo consultoria especializada para empresas que desejam crescer e se destacar no mundo digital.</p>
                      <p class="leading-relaxed">Nossa equipe é formada por profissionais apaixonados por tecnologia e inovação, comprometidos em entregar resultados excepcionais com agilidade e qualidade. Acreditamos que cada projeto é único e merece atenção personalizada.</p>
                      <p class="leading-relaxed">Mesmo sendo uma empresa jovem, trazemos experiência consolidada de nossos profissionais, combinando conhecimento técnico com uma abordagem fresh e inovadora para resolver os desafios digitais de nossos clientes.</p>
                    </div>
                  </div>

                  <!-- Missão / Visão / Valores -->
                  <div v-if="activeTab === 'missao'">
                    <h2 class="text-3xl font-bold mb-6 text-white">MISSÃO / VISÃO / VALORES</h2>
                    <div class="space-y-8">
                      <div>
                        <h3 class="text-xl font-semibold text-blue-400 mb-3">Missão</h3>
                        <p class="text-gray-400">Transformar negócios através de consultoria e soluções digitais personalizadas, entregando resultados de qualidade com agilidade e foco na satisfação do cliente.</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-semibold text-blue-400 mb-3">Visão</h3>
                        <p class="text-gray-400">Ser reconhecida como uma das principais consultorias digitais do mercado, referência em inovação, qualidade e resultados efetivos para nossos clientes.</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-semibold text-blue-400 mb-3">Valores</h3>
                        <ul class="list-disc list-inside text-gray-400 space-y-2">
                          <li>Qualidade em tudo que fazemos</li>
                          <li>Agilidade na entrega de resultados</li>
                          <li>Inovação e criatividade</li>
                          <li>Transparência e ética</li>
                          <li>Foco no sucesso do cliente</li>
                          <li>Aprendizado contínuo</li>
                          <li>Colaboração e trabalho em equipe</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Área de Atendimento -->
                  <div v-if="activeTab === 'area'">
                    <h2 class="text-3xl font-bold mb-6 text-white">ÁREA DE ATENDIMENTO</h2>
                    <div class="space-y-6 text-gray-400">
                      <p class="leading-relaxed">Atendemos clientes em todo o Brasil de forma remota, e presencialmente nas principais cidades do país!</p>
                      <p class="leading-relaxed">Nossa metodologia digital permite que oferecemos consultoria de alta qualidade independente da localização, garantindo o mesmo nível de excelência para todos os nossos clientes.</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li>São Paulo</li>
                        <li>Rio de Janeiro</li>
                        <li>Brasília</li>
                        <li>Salvador</li>
                        <li>Fortaleza</li>
                        <li>Curitiba</li>
                        <li>Belo Horizonte</li>
                        <li>Manaus</li>
                        <li>Recife</li>
                        <li>Porto Alegre</li>
                        <li>E todo o território nacional via consultoria remota</li>
                      </ul>
                    </div>
                  </div>

                  <!-- Clientes -->
                  <div v-if="activeTab === 'clientes'">
                    <h2 class="text-3xl font-bold mb-6 text-white">NOSSOS CLIENTES</h2>
                    <div class="space-y-6 text-gray-400">
                      <p class="leading-relaxed">Atendemos empresas de todos os tamanhos e segmentos, desde startups em crescimento até empresas consolidadas que buscam transformação digital. Cada cliente é único e recebe soluções personalizadas para suas necessidades específicas.</p>
                      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-rocket text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">Startups</h3>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-building text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">PMEs</h3>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-industry text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">Grandes Empresas</h3>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-store text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">E-commerce</h3>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-graduation-cap text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">Educação</h3>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg text-center">
                          <i class="fas fa-heart text-3xl text-blue-400 mb-2"></i>
                          <h3 class="font-semibold text-white">Saúde</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16">
        <div class="container mx-auto px-4">
          <p class="text-2xl font-semibold mb-6">Pronto para transformar seu negócio? Consultoria gratuita!</p>
          <Button class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
            Agende sua consultoria
          </Button>
        </div>
      </div>
  
      <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeo } from '@/composables/useSeo'

// SEO Configuration
useSeo({
    title: 'Sobre Nós - Koderra Consultoria Digital',
    description: 'Conheça a Koderra, empresa especializada em consultoria digital com mais de 500 projetos transformados. Nossa experiência e compromisso com a excelência nos tornam referência no mercado.',
    url: '/aboutUs',
    type: 'website',
    keywords: [
        'sobre koderra',
        'consultoria digital',
        'empresa digital',
        'experiência digital',
        'transformação digital',
        'história empresa',
        'equipe koderra',
        'valores empresa',
        'missão visão valores'
    ],
    author: 'Koderra - Consultoria Digital'
})

const activeTab = ref('sobre')

const menuItems = [
    { id: 'sobre', title: 'Sobre nós' },
    { id: 'missao', title: 'Missão / Visão / Valores' },
    { id: 'area', title: 'Área de atendimento' },
    { id: 'clientes', title: 'Clientes' }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>