// const assert = require('assert');
const server = require('./server');
const request = require('supertest');
const db = require('./data/db');

beforeEach( async () => {
    return await db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run());
});

describe('User creation', () => {
    it('sends status 201', async () => {
        const res = await request(server).post('/users').send({username: 'newUser', email: 'new@user.com'});
        expect(res.status).toBe(201);
    });
    it('creates new user', async () => {
        await request(server).post('/users').send({username: 'newUser', email: 'new@user.com'});
        const res = await request(server).get('/users');
        expect(res.body[3]).toEqual({user_id: 4, username: 'newUser', email: 'new@user.com'});
    })
});

describe('User removal', () => {
    it('sends status 204', async () => {
        const res = await request(server).delete('/users/3');
        expect(res.status).toBe(204);
    })
    it('deletes user', async () => {
        await request(server).delete('/users/3');
        const res = await request(server).get('/users');
        expect(res.body.length).toBe(2);
    })
});