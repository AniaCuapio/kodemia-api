const express = require('express')
const koders = require('../usecases/koders')
const { response } = require('express')

const router = express.Router()


// localhost:8080/koders/all
router.get('/', async (request, response) => {
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

router.post('/', async (request, response) => {
    try {
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