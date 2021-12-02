const config = require('config');

module.exports = {
    SERVER: {
        PORT: config.get('port'),
        PROTOCOL: config.get('protocol'),
        HOST: config.get('host')
    },
    DB: {
        MONGOOSE: {
            URI: config.get('mongooseUri')
        }
    },
    VALIDATE: {
        MIN_LENGTH_PASSWORD: 6
    },
    JWT_ACCESS_SECRET: config.get('jwtAccessSecret'),
    JWT_REFRESH_SECRET: config.get('jwtRefreshSecret'),
    JWT_RESET_SECRET: config.get('jwtResetSecret'),
    NODEMAILER: {
        EMAIL: config.get('email'),
        PASSWORD: config.get('password')
    },
    LIVE_TIME_TOKEN: 5 * 60000
}