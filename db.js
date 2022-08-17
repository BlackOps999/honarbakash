const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT
}

const proConfig = {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

console.log(process.env.NODE_ENV);

/*
//If we had a prod and dev database environment use the below code. But currently we only have prod database shared acorss all envs

const proConfig = {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
*/

module.exports = pool;
