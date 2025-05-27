import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password, name } = body

    if (!email || !password || !name) {
      throw createError({
        statusCode: 400,
        message: 'Email, senha e nome são obrigatórios'
      })
    }

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw createError({
        statusCode: 400,
        message: 'Email já cadastrado'
      })
    }

    // Hash da senha
    const hashedPassword = await hash(password, 10)

    // Cria o usuário
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    })

    return {
      id: user.id,
      email: user.email,
      name: user.name
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Erro ao registrar usuário'
    })
  }
}) 