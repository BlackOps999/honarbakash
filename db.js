const Knex = require('knex');

const createUnixSocketPool = async config => {
    return Knex({
        client: 'pg',
        connection: {
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            socketPath: `/cloudsql/${process.env.POSTGRES_HOST}/.s.PGSQL.5432`
        },
        options: {}
    });
};

module.exports = createUnixSocketPool;
