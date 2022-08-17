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
            user: 'postgres',
            password: 'Newcastle1!',
            database: 'sherry',
            host: `/cloudsql/noble-nation-321921:europe-west4:ablackmagic-db`
        },
        options: {}
    });
};

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DB);
console.log(`/cloudsql/${process.env.POSTGRES_HOST}`);

console.log(process.env.NODE_ENV);

module.exports = pool;
