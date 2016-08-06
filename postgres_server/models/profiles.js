var pg = require('pg');
var knex = require('../db/db');

var Profiles = module.exports;

Profiles.createProfile = function (data) {
  return knex('profiles').returning('id')
    .returning('*')
    .insert({
      name: data.name,
      description: data.description,
      photo: data.file
    })
    .then(function (record) {
      return record[0];
    })
    .catch(function (err) {
      throw err;
    });
};


Profiles.fetchProfileOne = function (id) {
  return knex('profiles')
    .where({ id })
    .then(function (record) {
      if (record.length === 0) {
        err = "no records found";
        throw err;
      }
      return record;
    })
    .catch(function (err) {
      throw err;
    });
};


Profiles.fetchProfilesAll = function () {
  return knex('profiles').select('profiles.*')
    .then(function (records) {
        return records;
    })
    .catch(function (err) {
      throw err;
    });
};

Profiles.deleteProfile = function (id) {
  return knex('profiles')
    .del().where({ id })
    .then(function (record) {
      return record[0];
    })
    .catch(function (err) {
      throw err;
    });
};
