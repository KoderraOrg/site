# Template Web Vue/Nuxt

Este é um template base para iniciar projetos web utilizando Vue.js com Nuxt 3. Ele inclui configurações básicas e ferramentas essenciais para desenvolvimento web moderno.

## Tecnologias Principais

- Nuxt 3
- Vue 3
- TypeScript
- TailwindCSS
- Prisma (ORM)
- Docker

## Dependências Principais

```json
{
  "dependencies": {
    "@prisma/client": "^6.8.2",
    "@tailwindcss/vite": "^4.1.7",
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
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com suas configurações
```

**Variáveis importantes:**
- `CAL_USERNAME`: Seu nome de usuário do Cal.com para habilitar agendamentos
- `AUTH_SECRET`: Chave secreta para autenticação
- `DATABASE_URL`: String de conexão com o PostgreSQL

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
├── prisma/         # Configurações do Prisma
├── server/         # API e rotas do servidor
├── public/         # Arquivos estáticos
└── helpers/        # Scripts e utilitários
```

## TO-DO


- [X] Adicionar páginas pré-montadas
- [X] Adicionar lib de UI
- [X] Configurar autenticação
- [ ] Adicionar testes
- [X] Adicionar features flags
- [X] Form para trigger de email
- [X] Blog (ff)
  - [X] Auth
  - [X] CRUD 
- [X] Integração com Cal.com para agendamento

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
