const express = require('express')

const router = express.Router()

const koder = require('../usecases/koders')

const { request } = require('../server')

router.post('/sign-up', async (request, response) => {
    try {
        const signUpKoder = await koder.signup(request.body)
        response.json({
            success: true,
            data: {
                koder: signUpKoder
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

router.post('/sign-in', async (request, response) => {
    try {
        const { password, email } = request.body
        const token = await koder.login(email, password)
        response.json({
            success: true,
            data: {
                token
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router