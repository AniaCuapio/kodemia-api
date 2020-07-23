const mongoose = require('mongoose')

//Schema
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    age: {
        type: Number,
        required: true,
        min: 15,
        max: 100
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
    email: {
        type: String,
        required: true,
        match: /^.+@.+\..+$/
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    generation: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('koders', koderSchema)