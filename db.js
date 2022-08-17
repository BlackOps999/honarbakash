const Pool = require("pg").Pool;
require("dotenv").config();

const prodConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: `/cloudsql/${process.env.POSTGRES_HOST}`
};

const stagConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: `/cloudsql/${process.env.POSTGRES_HOST}`
};

const devConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT
};

const pool = new Pool(process.env.NODE_ENV === "production" ? prodConfig : process.env.NODE_ENV === "staging" ? stagConfig : devConfig);

//console.log(devConfig);

//console.log(process.env.NODE_ENV);

module.exports = pool;
