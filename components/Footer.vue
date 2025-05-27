<template>
  <footer class="bg-gradient-to-b from-primary-50 to-white border-t border-primary-100">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img src="/images/logos/logo.png" alt="Logo" class="h-10 w-10" />
            <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Empresa</span>
          </div>
          <p class="text-primary-600 leading-relaxed">
            Transformando ideias em realidade digital desde 2010.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-primary-500 hover:text-primary-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="text-primary-500 hover:text-primary-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-primary-900 mb-6">Links Rápidos</h3>
          <ul class="space-y-3">
            <li><a href="/" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Início</a></li>
            <li><a href="/services" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Serviços</a></li>
            <li><a href="/about" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Sobre</a></li>
            <li><a href="/contact" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Contato</a></li>
            <li><a v-if="blogEnabled" href="/blog" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-primary-900 mb-6">Serviços</h3>
          <ul class="space-y-3">
            <li><a href="/services" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Desenvolvimento Web</a></li>
            <li><a href="/services" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Consultoria Digital</a></li>
            <li><a href="/services" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">Marketing Digital</a></li>
            <li><a href="/services" class="text-primary-600 hover:text-primary-800 transition-colors duration-300">SEO</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-primary-900 mb-6">Contato</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              São Paulo, SP
            </li>
            <li class="flex items-center gap-2 text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contato@email.com.br
            </li>
            <li class="flex items-center gap-2 text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (19) 3054-1232
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-primary-100 mt-12 pt-8 text-center text-primary-600">
        <p>&copy; {{ new Date().getFullYear() }} Empresa. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { isBlogEnabled } from '~/lib/utils'

const blogEnabled = isBlogEnabled()
</script> 