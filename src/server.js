const express = require('express')
const app = express()

const kodersRouter = require('./routes/koders')


app.use(express.json())

//montando el router
app.use('/koders', kodersRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia API'
    })
})

module.exports = app