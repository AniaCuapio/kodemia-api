const express = require('express')
const mentors = require('../usecases/mentor')

const { response } = require('express')

const router = express.Router()

// localhost:8080/mentors
router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            data: {
                mentors: allMentors
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
        const newMentorsData = request.body
        const newMentor = await mentors.create(newMentorsData)
        response.json({
            success: true,
            data: {
                newMentor
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
        const remove = await mentors.remove(id)

        response.json({
            success: true,
            message: 'Mentor deleted'
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
        const update = mentors.update(id, newData)

        response.json({
            success: true,
            message: 'Mentor data updated'
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