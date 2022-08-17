const Pool = require("pg").Pool;
const Knex = require('knex');
require("dotenv").config();

const devConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT
};

const proConfig = async config => {
    return Knex({
        client: 'pg',
        connection: {
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            host: process.env.POSTGRES_HOST
        }
    });
};

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

console.log(process.env.POSTGRES_DB);
console.log(process.env.NODE_ENV);

module.exports = pool;
