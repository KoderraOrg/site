import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'ID do post não fornecido'
      })
    }
    
    const post = await prisma.blogPost.findUnique({
      where: { id }
    })
    
    if (!post) {
      throw createError({
        statusCode: 404,
        message: 'Post não encontrado'
      })
    }
    
    return {
      success: true,
      data: post
    }
  } catch (error) {
    console.error('Erro ao buscar post por ID:', error)
    
    // Repassar erros já tratados
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: 'Erro ao buscar post do blog'
    })
  }
}) 