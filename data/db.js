const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig[process.env.DB_ENV || "development"]);

// module.exports = {
//     getUsers,
//     getUser,
//     addUser,
//     remove
// }

function getUsers() {
    return db('Users');
}

function getUser(id) {
    return db('Users')
        .where('user_id', id)
        .first();
}

function addUser(user) {
    return db('Users')
        .insert(user);
}

function remove(id) {
    return db('Users')
        .where('user_id', id)
        .del();
}