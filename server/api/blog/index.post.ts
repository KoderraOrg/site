import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validações
    if (!body.title || body.title.trim() === '') {
      throw createError({
        statusCode: 400,
        message: 'O título é obrigatório'
      })
    }
    
    if (!body.content || body.content.trim() === '') {
      throw createError({
        statusCode: 400,
        message: 'O conteúdo é obrigatório'
      })
    }
    
    if (!Array.isArray(body.tags)) {
      body.tags = []
    }
    
    const newPost = await prisma.blogPost.create({
      data: {
        title: body.title,
        content: body.content,
        tags: body.tags
      }
    })
    
    return {
      success: true,
      message: 'Post criado com sucesso',
      data: newPost
    }
  } catch (error) {
    console.error('Erro ao criar post:', error)
    
    // Repassar erros já tratados
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: 'Erro ao criar post no blog'
    })
  }
}) 