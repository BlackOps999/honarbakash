const Knex = require('knex');

const pool = async config => {
    return Knex({
        client: 'pg',
        debug: true,
        connection: {
            user: 'postgres',
            password: process.env.POSTGRES_PASSWORD,
            database: 'sherry',
            socketPath: '/cloudsql/noble-nation-321921:europe-west4:ablackmagic-db/.s.PGSQL.5432'
        },
        options: {}
    });
};

module.exports = pool;
