const API_PREFIX = __dirname + '/api/';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')(server);

const jwt = require('jsonwebtoken')

var port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log('Webserver läuft und hört auf Port %d', port);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:rootpassword@mongodb/fussball?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

var router = express.Router();

socketio.on('connect', socket => {
    socket.on('horstCreated', data => {
        console.log(data)
    })

    socket.on('addedAttendee', data => {
        console.log("Added attendee to database")
        console.log(data)
        var newAttendee = new Attendee({
            name: data.name,
            firstname: data.firstname,
            mobile: data.mobile,
            street: data.street,
            pc: data.pc,
            city: data.city,
            eID: data.eID
        })
        newAttendee.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result)
            }
        })
    })
    socket.on('addClub', data => {
        bcrypt.hash(data.password, saltRounds, function (err, hash) {
            if (err) {
                console.log(err)
            } else {
                var newClub = new Club({
                    name: data.name,
                    email: data.email,
                    username: data.username,
                    password: hash,
                    events: []
                })
                newClub.save(err => {
                    if(err) console.log(err)
                })
            }
        });
        console.log('Added Club to db')
    })
    socket.on('tryLogin', data => {
        Club.findOne({
            username: data.username
        }, function (err, club) {
            if (err) console.log(err)
            bcrypt.compare(data.password, club.password, function (err, result) {
                if (err) console.log(err)
                else {
                    console.log(result)
                    if (result) {
                        console.log('server - login successfull')
                        var token = jwt.sign({
                            clubId: club._id
                        }, 'key')  
                        //TODO heraufinden wie nur an einen client schicken (optimalerweise an den richtigen)
                        socket.emit('isSuccessfull', {
                            isSuccessfull: true,
                            token: token
                        })
                    } else {
                        console.log('server - login failed')
                        socket.emit('isSuccessfull', {
                            isSuccessfull: false
                        })
                    }
                }
            });
        })
    })

    socket.on('loadAttendees', () => {
        Attendee.find({}, (err, attendeesDb) => {
            if(err) console.log(err)
            var attendees = []
            attendeesDb.forEach(attendee => {
                attendees.push(attendee)
            })
            console.log(attendees)
            socket.emit('sendAttendees', attendees)
        })
    })

    socket.on('addEvent', data => {
        jwt.verify(data.token, 'key', (err, decoded) => {
            if(err) console.log(err)
            var newEvent = new Event({
                name: data.form.name,
                startTime: data.form.startTime,
                endTime: data.form.endTime
            })
            newEvent.save(err => {
                if(err) console.log(err)
            })
            Club.findById(decoded.clubId, (err, club) => {
                if(err) console.log(err)
                club.events.push(newEvent._id)
                club.save()
            })
        })
    })

    socket.on('authenticate', token => {
        jwt.verify(token, 'key', (err, decoded) => {
            var isAuthenticated = true
            if(err) isAuthenticated = false
            console.log(isAuthenticated + ' ' + decoded)
            socket.emit('isAuthenticated', {
                isAuthenticated: isAuthenticated
            })
        })

    })
})

const attendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
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
    mobile: {
        type: Number,
        required: true
    },
    eID: {
        type: Number,
        required: true
    }
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
    username: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date
    }
})

const Attendee = mongoose.model('Attendee', attendeeSchema);
const Club = mongoose.model('Club', clubSchema);
const Event = mongoose.model('Event', eventSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

app.get('/horst', function (request, response) {
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname + '/dist/', 'index.html'));
});