/*
com base no padrão mvc existem alguns metodos:

store --> cria usuario/recurso
index --> lista todos os dados 
show --> lista um usuario ou dado especifico
update --> atualiza os dados 
delete --> deleta os dados
*/
import { v4 } from 'uuid'
import User from '../models/User.js'

class UserController {
    async store(request, response){
        const { name, email, password_hash, admin } = request.body

        const existingUser = await User.findOne({
            where:{
                email
            }
        })
        if(existingUser){
            return response.status(400).json({message: "Este e-mail ja está cadastrado"})
        }

    const user = await User.create({
        id: v4(),
        name,
        email,
        password_hash,
        admin
    })

    return response.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin
    });
    }
}

export default new UserController();