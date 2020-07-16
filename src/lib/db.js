const mongoose = require('mongoose')

module.exports = () => mongoose.connect('mongodb+srv://aniacuapio_mongoDB:ania123@clusterpractica.2bqxi.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)