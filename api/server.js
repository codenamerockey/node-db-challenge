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
      res.status(500).json({
        message:
          'there was a problem retrieving the resources from the database'
      });
    });
});

server.post('/api/resources', (req, res) => {
  db('resources')
    .insert(req.body, 'id')
    .then(ids => {
      const id = ids[0];

      db('resources')
        .where({ id })
        .first()
        .then(resource => {
          res.status(201).json(resource);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/api/projects', (req, res) => {
  db('projects')
    .insert(req.body, 'id')
    .then(ids => {
      const id = ids[0];

      db('projects')
        .where({ id })
        .first()
        .then(resource => {
          res.status(201).json(projects);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/api/tasks', (req, res) => {
  db('tasks')
    .insert(req.body, 'id')
    .then(ids => {
      const id = ids[0];

      db('tasks')
        .where({ id })
        .first()
        .then(task => {
          res.status(201).json(task);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
