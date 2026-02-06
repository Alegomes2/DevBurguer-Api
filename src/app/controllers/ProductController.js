import * as Yup from 'yup'

class ProductController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required()
        })

        try {
            schema.validadeSync(request.body, { abortEarly: false, strict: true})
        } catch (err) {
            return response.status(400).json({ error: err.erros })
        }
        
        return response.status(201).json({ ok: true})
    }
}

export default new ProductController