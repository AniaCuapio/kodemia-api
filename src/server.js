const express = require('express')
const app = express()
const cors = require('cors')
const print = require('./middlewares/print')

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentor')
const authRouter = require('./routes/auth')
const coursesRouter = require('./routes/courses')

//Middleware
app.use(cors())
app.use(express.json())
app.use(print)

//middleware al nivel de aplicación
//app.use(function (request, response, next))
//versión larga O SEPARADA:
// app.use((request, response, next) => {
//     console.log('Middleware de aplicación', request)
//     next()
// })

// app.use((request, response, next) => {
//     console.log('middleware 2')
//     request.charles = 'hola soy ania'
//     next()
// })

// app.use((request, response, next) => {
//     console.log('middleware 3:', request.charles)
//     next()
// })

//middlewares versión corta:
// app.use((request, response, next) => {
//     console.log('Middleware de aplicación', request)
//     next()
// }, (request, response, next) => {
//     console.log('middleware 2')
//     request.charles = 'hola soy ania'
//     next()
// }, (request, response, next) => {
//     console.log('middleware 3:', request.charles)
//     next()
// })

//montando el router
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)
app.use('/courses', coursesRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia API'
    })
})

module.exports = app