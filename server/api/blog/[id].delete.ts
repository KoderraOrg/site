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
    
    // Verificar se o post existe
    const existingPost = await prisma.blogPost.findUnique({
      where: { id }
    })
    
    if (!existingPost) {
      throw createError({
        statusCode: 404,
        message: 'Post não encontrado'
      })
    }
    
    // Excluir post
    await prisma.blogPost.delete({
      where: { id }
    })
    
    return {
      success: true,
      message: 'Post excluído com sucesso'
    }
  } catch (error) {
    console.error('Erro ao excluir post:', error)
    
    // Repassar erros já tratados
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: 'Erro ao excluir post do blog'
    })
  }
}) 