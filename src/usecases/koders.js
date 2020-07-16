const Koders = require('../models/koder')

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

module.exports = {
    getAll,
    create,
    remove,
    update
}