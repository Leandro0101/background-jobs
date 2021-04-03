import Queue from '../lib/Queue'

export default {
  async create(request, response) {
    const { name, email, password } = request.body

    const user = {
      name, email, password
    }

    await Queue.add('RegistrationMail', { user })

    return response.json(user)
  }
}