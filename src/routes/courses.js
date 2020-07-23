const express = require('express')
const courses = require('../usecases/courses')

const router = express.Router()

//localhost:3000/courses

router.get('/', async (request, response) => {
    try {
        const allCourses = await courses.getAll()
        response.json({
            success: true,
            data: {
                mentors: allCourses
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
        const newCourseData = request.body
        const newCourse = await courses.create(newCourseData)
        response.json({
            success: true,
            data: {
                newCourse
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
        const remove = await courses.remove(id)

        response.json({
            success: true,
            message: 'Course deleted'
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
        const update = courses.update(id, newData)

        response.json({
            success: true,
            message: 'Course data updated'
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