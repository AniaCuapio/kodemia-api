const mongoose = require('mongoose')

//Schema

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 120
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'female',
            'male',
            'nonbinary'
        ]
    },
    course: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('mentors', mentorSchema)