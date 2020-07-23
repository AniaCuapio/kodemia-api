const mongoose = require('mongoose')

//Schema

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    mentor: {
        type: String,
        required: true,
    },
    file: {
        type: File,
        required: false
    },
    generation: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('courses: ', coursesSchema)