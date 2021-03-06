import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    await Mail.sendMail({
      from: 'Leandro Lima <leandrovieira3306@gmai.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem vindo ao nosso sistema de envio de email`
    }) 
  }
}