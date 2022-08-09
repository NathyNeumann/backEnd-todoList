require('dotenv').config()

const config = {
    user: process.env.USER_API,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    port: Number(process.env.PORT)
};

module.exports = config;