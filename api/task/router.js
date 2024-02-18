const express = require('express');

const router = express.Router();

const Tasks = require('./model.js');

router.get('/', (req, res) => {
  Tasks.get()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Tasks.insert(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router;