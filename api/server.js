const express = require('express');

const server = express();

server.use(express.json());

const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
// const tasksRouter = require('./task/router');

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
// server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Server is running' });
});

module.exports = server;
