import Queue from '../lib/Queue'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
const file = join(__dirname, '..', '..', '..', 'database', 'data.json')

async function _currentFileContent() {
  return JSON.parse(await readFile(file))
}

export default {
  async create(request, response) {
    const { name, email, password } = request.body

    const user = {
      name, email, password
    }

    await Queue.add('RegistrationMail', { user })

    const currentFile = await _currentFileContent()
    currentFile.push({ name, email, password })

    await writeFile(file, JSON.stringify(currentFile))

    return response.json(user)
  }
}