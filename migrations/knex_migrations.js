exports.up = function(knex, Promise) {
  return Promise.all([

          knex.schema.createTable('profiles', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.string('photo');
          })
          .then(function (table) {
            console.log('Created profiles table.');
          }),

    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profiles'),

  ]);
};
