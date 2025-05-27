import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return {
      success: true,
      data: posts
    }
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    throw createError({
      statusCode: 500,
      message: 'Erro ao buscar posts do blog'
    })
  }
}) 