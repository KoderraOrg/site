import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Novo contato: ${subject}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Assunto: ${subject}
        Mensagem: ${message}
      `,
      html: `
        <h3>Novo contato recebido</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email enviado com sucesso!'
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw createError({
      statusCode: 500,
      message: 'Erro ao enviar email'
    })
  }
}) 