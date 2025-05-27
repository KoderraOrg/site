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
    
    const body = await readBody(event)
    
    // Validações (apenas para campos que foram fornecidos)
    if (body.title !== undefined && body.title.trim() === '') {
      throw createError({
        statusCode: 400,
        message: 'O título não pode estar vazio'
      })
    }
    
    if (body.content !== undefined && body.content.trim() === '') {
      throw createError({
        statusCode: 400,
        message: 'O conteúdo não pode estar vazio'
      })
    }
    
    // Preparar dados para atualização
    const updateData: {
      title?: string
      content?: string
      tags?: string[]
    } = {}
    
    if (body.title !== undefined) updateData.title = body.title
    if (body.content !== undefined) updateData.content = body.content
    if (body.tags !== undefined) updateData.tags = Array.isArray(body.tags) ? body.tags : []
    
    // Atualizar post
    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: updateData
    })
    
    return {
      success: true,
      message: 'Post atualizado com sucesso',
      data: updatedPost
    }
  } catch (error) {
    console.error('Erro ao atualizar post:', error)
    
    // Repassar erros já tratados
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: 'Erro ao atualizar post no blog'
    })
  }
}) 