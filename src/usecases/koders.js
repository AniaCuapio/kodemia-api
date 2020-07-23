const Koders = require('../models/koder')
const bcrypt = require('../lib/bcrypt')

function getAll() {
    return Koders.find()
}

function create(koderData) {
    return Koders.create(koderData)
}

function remove(koderID) {
    return Koders.findByIdAndDelete(koderID)
}
function update(koderID, newData) {
    return Koders.findByIdAndUpdate(koderID, newData)
}

async function signup(koderData) {
    //sacar el password de la data
    const { password } = koderData

    //encriptar la constraseña
    const passwordEncripted = await bcrypt.hash(password)

    // guardar el passwordencriptado en la data
    return Koders.create({
        ...koderData,
        password: passwordEncripted
    })

}

async function login(email, password) {
    //buscar el usuario en la DB
    const koderByEmail = await Koders.findOne({ email })
    if (!koderByEmail) {
        //se ejecuta cuando no hay un koder
        throw new Error('email not foud')
    }
    //verificar que si sea su password
    const isValid = await bcrypt.compare(password, koderByEmail.password)
    if (!isValid) {
        throw new Error('Password not valid')
    }
    return jwt.sign({ id: koderByEmail._id })

}

module.exports = {
    getAll,
    create,
    remove,
    update,
    signup,
    login
}