const express = require('express');

const router = express.Router();

const Projects = require('./model.js');

router.get('/', (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.insert(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

module.exports = router;
