import 'dotenv/config'
import express from 'express'
import UserController from './app/controllers/user'
const app = express()

app.use(express.json())

app.post('/users', UserController.create)

app.listen(3333, console.log('Hey!'))