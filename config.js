let config = {
    development: {
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
      redis_key: 'api-test'
    },
    production: {
        redis: {
            host: '127.0.0.1',
            port: 6379,
        },
        redis_key: 'api-test'
    }
}[process.env.NODE_ENV || 'development'];
module.exports = config;