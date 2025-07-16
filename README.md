# Site Oficial Koderra

Este é o site oficial da **Koderra - Consultoria Digital**, desenvolvido com tecnologias modernas para oferecer a melhor experiência aos nossos clientes e visitantes.

## Sobre a Koderra

Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas.

## Tecnologias Utilizadas

- Nuxt 3
- Vue 3
- TypeScript
- TailwindCSS
- @nuxtjs/seo (SEO otimizado)

## Dependências Principais

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@nuxtjs/seo": "^3.0.3",
    "nuxt": "^3.17.3",
    "tailwindcss": "^4.1.7",
    "vue": "^3.5.14",
    "vue-router": "^4.5.1"
  }
}
```

## Configuração para Desenvolvimento

1. Clone este repositório
2. Instale as dependências:

```bash
# Usando pnpm (recomendado)
pnpm install

# Ou usando npm
npm install
```

3. Configure as variáveis de ambiente:

```bash
# Crie um arquivo .env baseado no exemplo
touch .env

# Edite o arquivo .env com suas configurações
```

**Exemplo de arquivo .env:**

```bash
# Configurações de SEO
SEO=true
SITE_URL=https://koderra.com.br
SITE_NAME=Koderra - Consultoria Digital
SITE_DESCRIPTION=Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas.
SITE_LANGUAGE=pt-BR

# Configurações de Integração
CAL_USERNAME=seu-usuario-cal
WHATSAPP_NUMBER=5511999999999

# Google Analytics (opcional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Google Search Console (opcional)
GOOGLE_SITE_VERIFICATION=your-verification-code

# Configurações de Email (para formulário de contato)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=seu-email@gmail.com
SMTP_TO=contato@koderra.com.br
```

**Variáveis importantes:**

### Configurações de SEO
- `SEO=true`: Habilita as funcionalidades de SEO
- `SITE_URL`: URL do site (https://koderra.com.br)
- `SITE_NAME`: Nome do site (Koderra - Consultoria Digital)
- `SITE_DESCRIPTION`: Descrição do site para SEO
- `SITE_LANGUAGE`: Idioma do site (pt-BR)

### Configurações de Integração
- `CAL_USERNAME`: Nome de usuário do Cal.com para agendamentos
- `WHATSAPP_NUMBER`: Número do WhatsApp com código do país (ex: 5511999999999)

### Configurações de Analytics
- `GOOGLE_ANALYTICS_ID`: ID do Google Analytics (ex: G-XXXXXXXXXX)
- `GOOGLE_SITE_VERIFICATION`: Código de verificação do Google Search Console

### Configurações de Email
- `SMTP_HOST`: Servidor SMTP (ex: smtp.gmail.com)
- `SMTP_PORT`: Porta do servidor SMTP (ex: 587)
- `SMTP_USER`: Email para autenticação
- `SMTP_PASS`: Senha do email
- `SMTP_FROM`: Email de origem
- `SMTP_TO`: Email de destino para receber os formulários

## Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev        # Inicia o servidor de desenvolvimento
pnpm build      # Compila para produção
pnpm preview    # Visualiza a versão de produção localmente
```

## Deploy na Vercel

O projeto está configurado para deploy na Vercel. Para fazer o deploy:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. O deploy será feito automaticamente

## Estrutura do Projeto

```
├── app.vue          # Componente principal
├── nuxt.config.ts   # Configuração do Nuxt
├── composables/     # Composables Vue (incluindo useSeo)
├── server/         # API do servidor (formulário de contato)
├── public/         # Arquivos estáticos
├── plugins/        # Plugins do Nuxt (incluindo Google Analytics)
├── types/          # Definições de tipos TypeScript
└── components/     # Componentes Vue
```

## Recursos de SEO

O site possui configuração completa de SEO com:

### Composable `useSeo`
Utilizado nas páginas para configurar SEO:

```vue
<script setup>
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Título da Página',
  description: 'Descrição da página para SEO',
  url: '/caminho-da-pagina',
  type: 'website',
  keywords: ['palavra1', 'palavra2', 'palavra3'],
  author: 'Nome do Autor'
})
</script>
```

### Funcionalidades Implementadas
- ✅ Meta tags otimizadas (title, description, keywords)
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml dinâmico
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Google Analytics integrado
- ✅ Suporte a múltiplos idiomas

### Sitemap Automático
O sitemap é gerado automaticamente em `/sitemap.xml` e inclui:
- Páginas estáticas do site
- Configuração de prioridade e frequência de atualização

## Funcionalidades

### Agendamento com Cal.com

O site possui integração com [Cal.com](https://cal.com) para agendamento de consultorias. A configuração é feita através da variável de ambiente:

```bash
# No arquivo .env
CAL_USERNAME=koderra
```

O componente de agendamento é exibido automaticamente no cabeçalho quando configurado.

### WhatsApp

Contato direto via WhatsApp configurado através da variável:

```bash
# No arquivo .env
WHATSAPP_NUMBER=5511999999999
```

O botão do WhatsApp aparece automaticamente no cabeçalho quando configurado.

Para utilizar os componentes em outras partes do site:

```vue
<template>
  <!-- Agendamento -->
  <CalendarBookingIframe 
    buttonText="Marcar uma reunião" 
    buttonVariant="outline"
  />
  
  <!-- WhatsApp -->
  <WhatsAppLink 
    buttonText="Falar no WhatsApp"
    message="Olá! Vim pelo site e gostaria de mais informações."
    buttonVariant="outline"
  />
</template>
```

### Formulário de Contato

O site possui um formulário de contato funcional que envia emails através da API `/api/send-email.post.ts`. Para funcionar, configure as variáveis de ambiente de SMTP.

## Roadmap de Desenvolvimento

- [X] Páginas institucionais
- [X] Biblioteca de componentes UI
- [X] Feature flags
- [X] Formulários com envio de email
- [X] Integração com Cal.com para agendamento
- [X] **SEO Completo**
  - [X] Meta tags otimizadas
  - [X] Open Graph e Twitter Cards
  - [X] Structured Data
  - [X] Sitemap dinâmico
  - [X] Google Analytics
- [ ] Testes automatizados
- [ ] Otimizações de performance
- [ ] Integração com CRM

## Deploy

O projeto está otimizado para deploy na Vercel como site estático, mantendo apenas a funcionalidade de envio de email através de serverless functions.
