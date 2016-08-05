var config = require('../../knexfile.js');
var pg = require('pg');
var env = process.env.NODE_ENV || 'development';
var db = require('knex')(config[env]);


//Heroku postgres
pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});



// Export the db object, which will be able to make database connections
module.exports = db;


knex.migrate.latest([config]);
