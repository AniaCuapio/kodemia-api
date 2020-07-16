// Este archivo debe poner la aplicación en marcha

const dbConnect = require('./src/lib/db')
const server = require('./src/server')


dbConnect()
    .then(() => {
        console.log('DB connected')

        server.listen(3000, () => {
            console.log('server is listening in port 3000')
        })
    })
    .catch(error => {
        console.error('Error: ', error)
    })