const API_PREFIX = __dirname + '/api/';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(server, { path: '/api/socket' });

const models = require('./models.js')

const jwt = require('jsonwebtoken')

var port = process.env.PORT || 8033;
server.listen(port, function () {
    console.log('Webserver läuft und hört auf Port %d', port);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:rootpassword@mongodb/fussball?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connect', socket => {
    socket.on('horstCreated', data => {
        console.log(data)
        socket.emit('horstThirsty', {
            msg: 'Horst ist echt durstig'
        })
    })

    socket.on('addAttendee', data => {
        console.log("Added attendee to database")
        console.log(data)
        var newAttendee = models.Attendee({
            name: data.name,
            firstname: data.firstname,
            mobile: data.mobile,
            street: data.street,
            pc: data.pc,
            city: data.city,

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
        var newClub = models.Club({
            name: data.name,
            email: data.email,
            attendees: []
        })
        newClub.save(err => {
            if (err) console.log(err)
        })

        console.log('Added Club to db')
    });

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
                        socket.emit('successfullLogin', {
                            isSuccessfull: true,
                            token: token
                        })
                    } else {
                        console.log('server - login failed')
                        socket.emit('invalidLogin', {
                            isSuccessfull: false
                        })
                    }
                }
            });
        })
    })

    socket.on('loadAttendees', () => {
        console.log('arrived in loadAttendees-event')
        models.Attendee.find({}, (err, attendeesDb) => {
            if (err) console.log(err)
            else {
                var attendees = []
                attendeesDb.forEach(attendee => {
                    attendees.push(attendee)
                })
                console.log('Anzahl gefundene Attendees: ' + attendees.length)
                console.log('before sentAttendees emit - backend')
                socket.emit('sendAttendees', attendees)
            }
        })
    })
})

// connect to mongodb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

// serve static assets normally
app.use(express.static(__dirname + '/dist'));