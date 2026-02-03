/*
com base no padrão mvc existem alguns metodos:

store --> cria usuario/recurso
index --> lista todos os dados 
show --> lista um usuario ou dado especifico
update --> atualiza os dados 
delete --> deleta os dados
*/

import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    })

    try {
      // validação
      await schema.validate(request.body, {
        abortEarly: false, strict: true
      })

      const { name, email, password, admin } = request.body

      // verifica se email já existe
      const existingUser = await User.findOne({
        where: { email },
      })

      if (existingUser) {
        return response
          .status(400)
          .json({ message: 'Email already taken!' })
      }

      // criando senha criptografada,  aumentando a segurança
      password_hash =  await bcrypt.hash(password, 10)

      // cria usuário
      const user = await User.create({
        id: uuidv4(),
        name,
        email,
        password_hash,
        admin,
      })

      return response.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      })
    } catch (error) {
      return response.status(400).json({
        error: 'Validation fails',
        messages: error.errors,
      })
    }
  }
}

export default new UserController()

