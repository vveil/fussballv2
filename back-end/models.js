// mongoose.connect('mongodb://root:rootpassword@mongodb/fussball?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });
const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    pc: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
}, { timestamps: true })

const clubSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    },
    attendees: {
        type: [attendeeSchema]
    }
})

const Attendee = mongoose.model('Attendee', attendeeSchema);
const Club = mongoose.model('Club', clubSchema);

module.exports = {
    Attendee,
    Club
}