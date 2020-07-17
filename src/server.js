const express = require('express')
const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentor')


app.use(express.json())

//montando el router
app.use('/koders', kodersRouter)
App.use('/mentors', mentorsRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia API'
    })
})

module.exports = app