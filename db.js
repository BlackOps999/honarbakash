const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: `/cloudsql/${process.env.POSTGRES_HOST}`
};

const pool = new Pool(devConfig);

console.log(devConfig);

console.log(process.env.NODE_ENV);

module.exports = pool;
