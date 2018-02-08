const router = require('express').Router();
const config = require('../config');
const client = require('redis').createClient(config.redis.port, config.redis.host);

router.post('/echoAtTime', (req, res, next) => {
    let time = req.body.time || 0;
    let message = req.body.message || '';

    if (validate(time, message)) {
        client.zadd(config.redis_key, time, message, (err, response) => {
            if (err) {
                console.log(err);
            }
        });
    }

    res.render('index', { responseMessage: getResponseMessage(time, message) });
});

function getResponseMessage(time, message) {
    let responseMessage = 'Message\'s received';
    responseMessage = (0 === time) ? 'Not exist time param' : responseMessage;
    responseMessage = ('' === message) ? 'Not exist message param' : responseMessage;

    return responseMessage
}

function validate(time, message) {
    let responseMessage = getResponseMessage(time, message);
    return !/Not exist/i.test(responseMessage)
}

module.exports = router;
