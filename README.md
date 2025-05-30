# Template Web Vue/Nuxt

Este é um template base para iniciar projetos web utilizando Vue.js com Nuxt 3. Ele inclui configurações básicas e ferramentas essenciais para desenvolvimento web moderno.

## Tecnologias Principais

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

## Configuração

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
- `SITE_URL`: URL do seu site (ex: https://koderra.com.br)
- `SITE_NAME`: Nome do seu site (ex: Koderra - Consultoria Digital)
- `SITE_DESCRIPTION`: Descrição do seu site para SEO
- `SITE_LANGUAGE`: Idioma do site (ex: pt-BR)

### Configurações de Integração
- `CAL_USERNAME`: Seu nome de usuário do Cal.com para habilitar agendamentos
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

O template inclui configuração completa de SEO com:

### Composable `useSeo`
Utilize o composable `useSeo` em suas páginas para configurar SEO:

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

### Funcionalidades Incluídas
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
- Posts do blog (se habilitado)
- Configuração de prioridade e frequência de atualização

## TO-DO

- [X] Adicionar páginas pré-montadas
- [X] Adicionar lib de UI
- [X] Configurar autenticação
- [X] Adicionar features flags
- [X] Form para trigger de email
- [X] Blog (ff)
  - [X] Auth
  - [X] CRUD 
- [X] Integração com Cal.com para agendamento
- [X] **SEO Completo**
  - [X] Meta tags otimizadas
  - [X] Open Graph e Twitter Cards
  - [X] Structured Data
  - [X] Sitemap dinâmico
  - [X] Google Analytics
- [ ] Adicionar testes

## Recursos

### Agendamento com Cal.com

O template inclui integração com [Cal.com](https://cal.com) para agendamento de horários. Para utilizar:

1. Crie uma conta no [Cal.com](https://cal.com)
2. Configure seu nome de usuário em uma variável de ambiente:

```bash
# No arquivo .env
CAL_USERNAME=seu_usuario_cal
```

O componente de agendamento aparecerá automaticamente no cabeçalho quando a variável `CAL_USERNAME` estiver configurada.

### WhatsApp

O template inclui um componente para contato direto via WhatsApp. Para utilizar:

1. Configure seu número do WhatsApp com código do país:

```bash
# No arquivo .env
WHATSAPP_NUMBER=5511999999999
```

O botão do WhatsApp aparecerá automaticamente no cabeçalho quando a variável `WHATSAPP_NUMBER` estiver configurada.

Para personalizar os componentes em qualquer parte do site:

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

Para habilitar o Google Analytics:

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com)
2. Configure o ID no arquivo .env:

```bash
# No arquivo .env
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

O tracking será automaticamente configurado em todas as páginas.
