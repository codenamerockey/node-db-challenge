const express = require('express');
const db = require('../data/db-config');

// const projectsRouter = require('../projects/projectsRouter');

const server = express();

server.use(express.json());
// server.use('/api/projects', projectsRouter);

server.get('/api/projects', (req, res) => {
  const complete = req.body;
  db('projects')
    .then(project => {
      if (complete.completed === 1) {
        req.complete.completed = 'true';
      }
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: 'there was a problem retrieving the projects from the database'
      });
    });
});

server.get('/api/tasks', (req, res) => {
  const complete = req.body;
  db('tasks')
    .then(task => {
      if (complete.completed === 1) {
        req.complete.completed = 'true';
      }
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: 'there was a problem retrieving the tasks from the database'
      });
    });
});

server.get('/api/resources', (req, res) => {
  const complete = req.body;
  db('resources')
    .then(resource => {
      if (complete.completed === 1) {
        req.complete.completed = 'true';
      }
      res.status(200).json(resource);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message:
            'there was a problem retrieving the resources from the database'
        });
    });
});

module.exports = server;
