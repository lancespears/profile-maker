var express = require('express');
var path = require('path');
var knex = require('../db/db');
var Profiles = require('../models/profiles');
var bodyParser = require('body-parser');

var router = express.Router();

module.exports = function (router) {

  router.get('/', function (req, res) {
    Profiles.fetchProfilesAll()
      .then(function (data) {
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(400).send(err);
      });
  });


  router.get('/:id', function (req, res) {
    Profiles.fetchProfileOne(req.params.id)
      .then(function (data) {
        if (data.length === 0) {
          err = "no results" + req.params.id;
          res.status(404).send(err);
        }
        res.status(200).send(data);
      })
      .catch(function (err) {
        res.status(404).send(err);
      });
  });


  router.post('/', handleCreateProfile);

  function handleCreateProfile(req, res) {
    if (!req || !req.body) {
      res.status(400).send("/post expected a body object");
    } else {
      return Profiles.createProfile(req.body)
        .then(function (data) {
          res.status(201).send({data, message: 'Successfully submitted! ✔'});
        })
        .catch(function (err) {
          res.status(400).send(err);
        });
    }
  }

  router.delete('/', function (req, res) {
    var rq = req.query;
    if (rq && rq.id) {
      Profiles.deleteProfile(rq.id)
        .then(function (data) {
          res.status(200).send(JSON.stringify(data));
        })
        .catch(function (err) {
          res.status(404).send(err);
        });
    } else {
      res.status(404).send("use query string /profiles?=id");
    }
  });


  // CATCH-ALL route
  router.get('/*', function (req, res) {
    res.redirect('/');
  });
};
