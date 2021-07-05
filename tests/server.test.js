'use strict';

const supergoose = require('@code-fellows/supergoose');
const { app } = require('../server');
const request = supergoose(app);
const base64 = require('base-64');


describe('Tests', () => {
    it('create a new user', async () => {
        let user = {
            username: "haneen",
            password: "1996"
        }
        const response = await request.post('/auth/signup').send(user);
        expect(response.body.username).toEqual("haneen");
        expect(response.status).toEqual(201);
    });
    it("middleware and signin", async () => {
        let decodeBase = `Basic ${base64.encode("haneen:1996")}`
        let response = await request.post('/auth/signin').set({ Authorization: decodeBase });
        expect(response.body.username).toEqual("haneen");
        expect(response.status).toEqual(200)
    });
});