const express = require('express');
const path = require('path');
const presentationRepository = require('./presentation-repository');

function routes(app) {
  app.use('/public', express.static('public'));

  app.get('/api/presentations', (req, res) => {
    presentationRepository.getAll()
      .then(result => res.json(result))
      .catch(error => res.status(500).send(error.message));
  });

  app.get('/api/presentations/:presentation', (req, res) => {
    presentationRepository.get(req.params.presentation)
      .then(result => res.json(result))
      .catch(error => res.status(404).send(error.message));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });
}

module.exports = routes;