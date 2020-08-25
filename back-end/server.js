const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')(server);

var port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log('Webserver läuft und hört auf Port %d', port);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:rootpassword@mongodb/fussball?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

var router = express.Router();

socketio.on('connect', socket => {
    console.log("New Client Connected")
    socket.on('horstCreated', data => {
        console.log(data)
    })
})

router.post('/api/addTeilnehmer', function (req, res, next) {
    Teilnehmer.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

const teilnehmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vorname: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telefonnummer: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const vereinSchema = new mongoose.Schema({
    vereinsname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
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