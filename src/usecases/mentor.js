const Mentors = require('../models/mentor.js')

function getAll() {
    return Mentors.find()
}

function create(mentorData) {
    return Mentors.create(mentorData)
}

function remove(mentorID) {
    return Mentors.findByIdAndDelete(mentorID)
}

function update(mentorID, newData) {
    return Mentors.findByIdAndUpdate(mentorID, newData)
}

module.exports = {
    getAll,
    create,
    remove,
    update
}