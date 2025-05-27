<template>
    <Header />
    <div class="font-sans">
      <!-- Topbar -->
        <TopBar />
  
      <!-- Hero -->
      <InternHero
            heroImage="/images/about-us-hero.jpg"
            heroAlt="Imagem de fundo da página de sobre nós"
            title="Quem somos"
            description="'Uma empresa que já transformou mais de 500 ambientes com soluções inovadoras em climatização. Nossa experiência e compromisso com a excelência nos tornam referência no mercado.'"
            subtitle="Vinicius Andrade"
        />
  
      <!-- Breadcrumb -->
      <div class="bg-gray-50 border-b">
        <div class="container mx-auto px-4 py-3 text-sm text-gray-600">
          <a href="/" class="hover:text-blue-600 cursor-pointer">Home</a> > <span class="text-blue-600">Empresa</span>
        </div>
      </div>
  
      <!-- Sobre Nós -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Sidebar -->
          <aside class="md:col-span-1">
            <div class="bg-white rounded-lg border border-gray-100 shadow-md p-6">
              <ul class="space-y-4">
                <li 
                  v-for="(item, index) in menuItems" 
                  :key="index"
                  @click="activeTab = item.id"
                  :class="[
                    'border-l-4 pl-4 py-2 cursor-pointer transition-all duration-300',
                    activeTab === item.id 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-transparent hover:border-blue-400 hover:bg-blue-50'
                  ]"
                >
                  <strong :class="activeTab === item.id ? 'text-blue-600' : ''">{{ item.title }}</strong>
                </li>
              </ul>
            </div>
          </aside>
  
          <!-- Content -->
          <div class="md:col-span-3">
            <div class="bg-white rounded-lg border border-gray-100 sm:shadow-md shadow-none p-8">
              <transition name="fade" mode="out-in">
                <div :key="activeTab">
                  <!-- Sobre Nós -->
                  <div v-if="activeTab === 'sobre'">
                    <h2 class="text-3xl font-bold mb-6 text-gray-800">SOBRE NÓS</h2>
                    <div class="space-y-6 text-gray-600">
                      <p class="leading-relaxed">A Andrade Climatização, fundada em 2015, trabalha no segmento de ar-condicionado, com venda, instalação e manutenção.</p>
                      <p class="leading-relaxed">Nosso foco é o bem-estar de nossos clientes, por isso somos especializados na climatização de ambientes. Para tanto, dispomos de ferramentas adequadas para atender você, nosso cliente, da melhor maneira possível.</p>
                      <p class="leading-relaxed">Contamos com equipe qualificada e comprometida, pois nosso objetivo é garantir um atendimento rápido e eficiente, onde a qualidade e o compromisso com o cliente sejam sempre prioridade.</p>
                    </div>
                  </div>

                  <!-- Missão / Visão / Valores -->
                  <div v-if="activeTab === 'missao'">
                    <h2 class="text-3xl font-bold mb-6 text-gray-800">MISSÃO / VISÃO / VALORES</h2>
                    <div class="space-y-8">
                      <div>
                        <h3 class="text-xl font-semibold text-blue-600 mb-3">Missão</h3>
                        <p class="text-gray-600">Fornecer soluções em climatização com excelência, qualidade e compromisso, garantindo a satisfação total de nossos clientes.</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-semibold text-blue-600 mb-3">Visão</h3>
                        <p class="text-gray-600">Ser referência no mercado de climatização, reconhecida pela excelência em serviços e atendimento ao cliente.</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-semibold text-blue-600 mb-3">Valores</h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-2">
                          <li>Compromisso com a qualidade</li>
                          <li>Ética e transparência</li>
                          <li>Inovação e tecnologia</li>
                          <li>Satisfação do cliente</li>
                          <li>Responsabilidade social</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Área de Atendimento -->
                  <div v-if="activeTab === 'area'">
                    <h2 class="text-3xl font-bold mb-6 text-gray-800">ÁREA DE ATENDIMENTO</h2>
                    <div class="space-y-6 text-gray-600">
                      <p class="leading-relaxed">Atendemos toda a região de Campinas e cidades vizinhas, incluindo:</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li>Campinas</li>
                        <li>Valinhos</li>
                        <li>Vinhedo</li>
                        <li>Hortolândia</li>
                        <li>Sumaré</li>
                        <li>Monte Mor</li>
                      </ul>
                    </div>
                  </div>

                  <!-- Clientes -->
                  <div v-if="activeTab === 'clientes'">
                    <h2 class="text-3xl font-bold mb-6 text-gray-800">NOSSOS CLIENTES</h2>
                    <div class="space-y-6 text-gray-600">
                      <p class="leading-relaxed">Temos orgulho de atender diversos segmentos do mercado, desde residências até grandes empresas. Nossos clientes são nossa maior motivação para continuar oferecendo o melhor serviço.</p>
                      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div class="bg-gray-50 p-4 rounded-lg text-center">
                          <i class="fas fa-home text-3xl text-blue-600 mb-2"></i>
                          <h3 class="font-semibold">Residências</h3>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg text-center">
                          <i class="fas fa-building text-3xl text-blue-600 mb-2"></i>
                          <h3 class="font-semibold">Empresas</h3>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg text-center">
                          <i class="fas fa-industry text-3xl text-blue-600 mb-2"></i>
                          <h3 class="font-semibold">Indústrias</h3>
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
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-16">
        <div class="container mx-auto px-4">
          <p class="text-2xl font-semibold mb-6">Quer fazer um projeto com profissionais? Orçamento grátis!</p>
          <Button class="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
            Solicite agora
          </Button>
        </div>
      </div>
  
      <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'

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