function print(request, response, next) {
    try {
        const { method, url } = request
        const body = JSON.stringify(request.body)
        method === 'GET' ? console.log(`[${method}]: ${url}`)
            : console.log(`[${method}]: ${url} - { ${body} }`)
        next()
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = print