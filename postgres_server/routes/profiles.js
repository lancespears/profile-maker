const express = require('express');
const path = require('path');
const Profiles = require('../models/profiles');
const bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer({ dest: './uploads/' });
// var fs = require('fs');

const router = express.Router();

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
    let rq = req.query;
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

  //
  // router.post('/photo', upload.single('upl'), function(req, res, next){
  //   var name = fs.readFileSync(req.file.path);
  //   res.status(200).send(req.file.filename);
  // });

  // CATCH-ALL route
  router.get('/*', function (req, res) {
    res.redirect('/');
  });
};
