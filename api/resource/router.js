const express = require('express');

const router = express.Router();

const Resources = require('./model.js');

router.get('/', (req, res) => {
  Resources.get()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.insert(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;

