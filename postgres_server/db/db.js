const config = require('../../knexfile.js');
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[env]);

// Export the db object, which will be able to make database connections
module.exports = knex;


knex.migrate.latest([config]);
