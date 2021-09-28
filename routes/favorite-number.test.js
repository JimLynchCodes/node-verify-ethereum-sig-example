const request = require('supertest');
const express = require('express');
// const web3 = require('web3');

var Web3 = require('web3');

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

const favoriteNumberRouter = require('./favorite-number');
const app = express();
app.use(express.json()) 

app.use('/favorite-number', favoriteNumberRouter);

// app.get('/favorite-number', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

it('returns foo bar', () => {

    request(app)
        .get('/favorite-number/foobar')
        // .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            expect(res.body).toEqual({ foo: 'bar' })
            if (err) throw err;
        });
})


it('regular echo', () => {

    const unsignedMessage = 'foo'

    request(app)
        .post('/favorite-number/unsigned-echo')

        .send({ message: unsignedMessage })
        .expect(200)
        .then(async (res) => {

            expect(res.body).toEqual({ 'you said': unsignedMessage })

            if (err) throw err;
        })
        .catch((err) => {
            throw(err)
        });

})


xit('returns payload of a signed message', () => {

    const secretMessage = "Hello world"

    const signedMessage = web3.eth.accounts.sign(secretMessage, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')

    console.log({ signedMessage });

    request(app)
        .post('/favorite-number/signed-echo')
        .send({ message: signedMessage })
        .expect(200)
        .then(async (res) => {

            console.log('body: ', res.body)

            // expect(res.body).toEqual({ 'you said': secretMessage })

            if (err) throw err;
        });

});