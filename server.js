const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());

//write endpoints here
server.post('/users', (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email
    }
    db('Users').insert(newUser)
    .then(() => res.status(201).end());
});

server.get('/users', (req, res) => {
    db('Users')
        .then(users => res.send(users));
});

server.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db('Users')
        .where('user_id', id)
        .del()
        .then(() => res.sendStatus(204));
})

module.exports = server;