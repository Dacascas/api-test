const client = require('redis').createClient();
const router = require('express').Router();
const config = require(`../config`);

setInterval(() => {
    let date = new Date;
    let timeout = date.getTime();

    client.zcount(config.redis_key, '-inf', timeout, (err, response) => {
        if (err) {
            console.log(err);
        }

        if (response > 0) {
            client.zrangebyscore(config.redis_key, '-inf', timeout, (err, response) => {
                if (err) {
                    console.log(err);
                }

                for (let key in response) {
                   console.log(response[key]);
                   client.zrem(config.redis_key, response[key]);
                }
            });
        }
    })

}, 1000);

module.exports = router;