# Site Oficial Koderra

Este é o site oficial da **Koderra - Consultoria Digital**, desenvolvido com tecnologias modernas para oferecer a melhor experiência aos nossos clientes e visitantes.

## Sobre a Koderra

Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas.

## Tecnologias Utilizadas

- Nuxt 3
- Vue 3
- TypeScript
- TailwindCSS
- Prisma (ORM)
- Docker
- @nuxtjs/seo (SEO otimizado)

## Dependências Principais

```json
{
  "dependencies": {
    "@prisma/client": "^6.8.2",
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
# Configurações de Autenticação
AUTH_SECRET=your-auth-secret-key-here
AUTH_ORIGIN=http://localhost:3000

# Configurações do Banco de Dados
DATABASE_URL=postgresql://user:password@localhost:5432/database_name

# Configurações de SEO
SEO=true
SITE_URL=https://koderra.com.br
SITE_NAME=Koderra - Consultoria Digital
SITE_DESCRIPTION=Especialistas em consultoria digital, desenvolvimento web e marketing digital. Transformamos sua visão em realidade com soluções inovadoras e personalizadas.
SITE_LANGUAGE=pt-BR

# Configurações de Blog
BLOG=true

# Configurações de Integração
CAL_USERNAME=seu-usuario-cal
WHATSAPP_NUMBER=5511999999999

# Google Analytics (opcional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Google Search Console (opcional)
GOOGLE_SITE_VERIFICATION=your-verification-code
```

**Variáveis importantes:**

### Configurações Básicas
- `AUTH_SECRET`: Chave secreta para autenticação
- `AUTH_ORIGIN`: URL de origem para autenticação (ex: http://localhost:3000)
- `DATABASE_URL`: String de conexão com o PostgreSQL

### Configurações de SEO
- `SEO=true`: Habilita as funcionalidades de SEO
- `SITE_URL`: URL do site (https://koderra.com.br)
- `SITE_NAME`: Nome do site (Koderra - Consultoria Digital)
- `SITE_DESCRIPTION`: Descrição do site para SEO
- `SITE_LANGUAGE`: Idioma do site (pt-BR)

### Configurações de Integração
- `CAL_USERNAME`: Nome de usuário do Cal.com para agendamentos
- `WHATSAPP_NUMBER`: Número do WhatsApp com código do país (ex: 5511999999999)
- `BLOG=true`: Habilita funcionalidades do blog

### Configurações de Analytics
- `GOOGLE_ANALYTICS_ID`: ID do Google Analytics (ex: G-XXXXXXXXXX)
- `GOOGLE_SITE_VERIFICATION`: Código de verificação do Google Search Console

## Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev        # Inicia o servidor de desenvolvimento
pnpm build      # Compila para produção
pnpm preview    # Visualiza a versão de produção localmente

# Banco de Dados
pnpm db         # Inicia o banco de dados
pnpm db:up      # Inicia o container do banco
pnpm db:down    # Para o container do banco
pnpm db:migrate # Executa as migrações do Prisma
```

## Estrutura do Projeto

```
├── app.vue          # Componente principal
├── nuxt.config.ts   # Configuração do Nuxt
├── composables/     # Composables Vue (incluindo useSeo)
├── prisma/         # Configurações do Prisma
├── server/         # API e rotas do servidor
├── public/         # Arquivos estáticos
├── plugins/        # Plugins do Nuxt (incluindo Google Analytics)
├── types/          # Definições de tipos TypeScript
└── helpers/        # Scripts e utilitários
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
  type: 'website', // ou 'article' para blog posts
  keywords: ['palavra1', 'palavra2', 'palavra3'],
  author: 'Nome do Autor',
  // Para artigos de blog:
  publishedTime: '2024-01-01T00:00:00Z',
  modifiedTime: '2024-01-02T00:00:00Z',
  section: 'Categoria',
  tags: ['tag1', 'tag2']
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
- Posts do blog
- Configuração de prioridade e frequência de atualização

## Roadmap de Desenvolvimento

- [X] Páginas institucionais
- [X] Biblioteca de componentes UI
- [X] Sistema de autenticação
- [X] Feature flags
- [X] Formulários com envio de email
- [X] Blog corporativo
  - [X] Sistema de autenticação
  - [X] CRUD de artigos
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

#### Propriedades dos componentes

**CalendarBookingIframe:**
| Propriedade   | Tipo   | Padrão            | Descrição                             |
|---------------|--------|-------------------|---------------------------------------|
| calUsername   | String | .env              | Nome de usuário do Cal.com            |
| buttonText    | String | Agende seu horário| Texto exibido no botão                |
| buttonVariant | String | default           | Variante do botão (default, outline..)|
| buttonSize    | String | default           | Tamanho do botão (sm, default, lg)    |
| buttonClass   | String | ""                | Classes CSS adicionais                |

**WhatsAppLink:**
| Propriedade   | Tipo   | Padrão                              | Descrição                             |
|---------------|--------|-------------------------------------|---------------------------------------|
| whatsappNumber| String | .env                                | Número do WhatsApp                    |
| message       | String | Olá! Gostaria de mais informações. | Mensagem pré-definida                 |
| buttonText    | String | Falar no WhatsApp                   | Texto exibido no botão                |
| buttonVariant | String | default                             | Variante do botão                     |
| buttonSize    | String | default                             | Tamanho do botão                      |
| buttonClass   | String | ""                                  | Classes CSS adicionais                |

### Google Analytics

O tracking está configurado automaticamente quando o ID é definido:

```bash
# No arquivo .env
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

O tracking é aplicado automaticamente em todas as páginas do site.
