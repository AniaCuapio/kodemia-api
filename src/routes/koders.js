const express = require('express')
const koders = require('../usecases/koders')
const { response, request } = require('express')

const router = express.Router()

const auth = require('../middlewares/auth')

//middleware a nivel de router
router.use((request, response, next) => {
    console.log('middleware a nivel de router koders: ', request.charles)
    next()
}, (request, response, next) => {
    console.log('middleware router koder 2')
    next()
})

// localhost:8080/koders
router.get('/', (request, response, next) => {
    console.log('middleware de endpoint GET Koders')
    next()
},
    async (request, response) => {
        try {
            const allKoders = await koders.getAll()
            response.json({
                success: true,
                data: {
                    koders: allKoders
                }
            })
        } catch (error) {
            response.status(400)
            response.json({
                success: false,
                error: error.message
            })
        }
    })

router.post('/', auth, async (request, response) => {
    try {
        console.log('koder: ', request.koder)

        const newKodersData = request.body
        const newKoder = await koders.create(newKodersData)
        response.json({
            success: true,
            data: {
                newKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const remove = await koders.remove(id)

        response.json({
            success: true,
            message: 'Koder deleted'
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.patch('/:id', (request, response) => {
    try {
        const id = request.params.id
        const newData = request.body
        const update = koders.update(id, newData)

        response.json({
            success: true,
            message: 'Koder data updated'
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})


module.exports = router