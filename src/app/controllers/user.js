import Mail from '../lib/Mail'

export default {
  async create(request, response) {
    const { name, email, password } = request.body

    const user = {
      name, email, password
    }

    Mail.sendMail({
      from: 'Leandro Lima <leandrovieira3306@gmai.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${name}, bem vindo ao nosso sistema de envio de email`
    })

    return response.json(user)
  }
}