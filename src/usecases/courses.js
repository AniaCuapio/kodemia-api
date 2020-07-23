
const Courses = require('../models/courses')

function getAll() {
    return Courses.find()
}

function create(courseData) {
    return Courses.create(courseData)
}

function remove(courseID) {
    return Mentors.findByIdAndDelete(courseID)
}

function update(courseID, newCourseData) {
    return Mentors.findByIdAndUpdate(courseID, newCourseData)
}

module.exports = {
    getAll,
    create,
    remove,
    update
}