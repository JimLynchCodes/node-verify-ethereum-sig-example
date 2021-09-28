var express = require('express');
var router = express.Router();
// const web3 = require('web3');

var Web3 = require('web3');

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

/* GET home page. */
router.get('/foobar', function(req, res, next) {
  res.json({ foo: 'bar' })
});

router.get('/', function(req, res, next) {
  res.json({ foo: 'bar' })
});

router.post('/unsigned-echo', function(req, res, next) {

    console.log(req)

    res.send({ 'you said': 'ok' })
});

router.post('/signed-echo', function(req, res, next) {
  
    const decodedMessage = web3.eth.accounts.recover(req.body.message)

    res.send({ 'you said': decodedMessage })
});

module.exports = router;
