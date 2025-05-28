<template>
    <Header />
    <div class="font-sans bg-gray-900">
        <!-- Topbar -->
        <TopBar />

        <!-- Hero -->
        <InternHero
            heroImage="/images/contact-hero.jpg"
            heroAlt="Imagem de fundo da página de contato"
            title="Entre em contato"
            description="Estamos aqui para ajudar. Entre em contato conosco e descubra como podemos transformar seu ambiente."
            subtitle="Atendimento de Segunda a Sexta, 8h às 18h"
        />

        <!-- Breadcrumb -->
        <div class="bg-gray-800 border-b border-gray-700">
            <div class="container mx-auto px-4 py-3 text-sm text-gray-400">
                <a href="/" class="hover:text-blue-400 cursor-pointer">Home</a> > <span class="text-blue-400">Contato</span>
            </div>
        </div>

        <!-- Contact Section -->
        <section class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="space-y-8">
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl font-bold text-white mb-4">Vamos conversar?</h2>
                        <p class="text-gray-400 leading-relaxed mb-6">
                            Estamos aqui para ajudar você a encontrar a melhor solução em climatização para seu ambiente. 
                            Preencha o formulário ao lado e nossa equipe especializada entrará em contato o mais breve possível.
                        </p>
                        <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <div class="flex items-center gap-2 text-blue-400">
                                <i class="fas fa-check-circle"></i>
                                <span>Atendimento personalizado</span>
                            </div>
                            <div class="flex items-center gap-2 text-blue-400">
                                <i class="fas fa-check-circle"></i>
                                <span>Resposta em até 24h</span>
                            </div>
                        </div>
                    </div>
                    <EmailForm />
                </div>

                <!-- Contact Info -->
                <div class="space-y-8">
                    <div class="bg-gray-800 rounded-lg border border-gray-700 shadow-md p-8">
                        <h2 class="text-3xl font-bold mb-6 text-white">Informações de contato</h2>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <i class="fas fa-map-marker-alt text-blue-400 text-xl mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-white">Endereço</h3>
                                    <p class="text-gray-400">Rua Exemplo, 123 - Campinas, SP</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <i class="fas fa-phone text-blue-400 text-xl mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-white">Telefone</h3>
                                    <p class="text-gray-400">(19) 99999-9999</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <i class="fas fa-envelope text-blue-400 text-xl mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-white">E-mail</h3>
                                    <p class="text-gray-400">contato@exemplo.com</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <i class="fas fa-clock text-blue-400 text-xl mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-white">Horário de atendimento</h3>
                                    <p class="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                                    <p class="text-gray-400">Sábado: 8h às 12h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Map -->
                    <div class="bg-gray-800 rounded-lg border border-gray-700 shadow-md p-8">
                        <h2 class="text-3xl font-bold mb-6 text-white">Nossa localização</h2>
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.330539380809!2d-47.0655393!3d-22.9071013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="300"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16">
            <div class="container mx-auto px-4">
                <p class="text-2xl font-semibold mb-6">Precisa de um orçamento? Entre em contato agora!</p>
                <Button class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Solicite um orçamento
                </Button>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import EmailForm from '~/components/EmailForm.vue'
</script>

<style scoped>
.aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
}

.aspect-w-16 iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
