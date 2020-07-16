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
    }
})

module.exports = mongoose.model('koders', koderSchema)