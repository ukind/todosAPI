const express = require('express');
const router = express.Router();
const db = require('../models');

// INDEX ROUTES
router.get('/', function(req, res) {
  db.TodoCollection.find()
  .then(todos => {
    res.json(todos);
  })
  .catch(error => {
    res.send(error);
  });
});

// CREATE ROUTES
router.post('/', function(req, res) {
  db.TodoCollection.create(req.body)
  .then(newTodo => {
    res.json(newTodo);
  })
  .catch(error => {
    res.send(error);
  });
});

// SHOW ROUTES
router.get('/:todoID', (req, res) => {
  db.TodoCollection.findById(req.params.todoID)
  .then(foundID => {
    res.json(foundID);
  })
  .catch(err => {
    res.send(err);
  });
});

// UPDATES ROUTE
router.put('/:todoID', (req, res) => {
  const todoID = req.params.todoID;
  db.TodoCollection.findOneAndUpdate(
    {_id: todoID},
    req.body,
  {new: true})
  .then(changedTodo => {
    res.json(changedTodo);
  })
  .catch(err => {
    res.send(err);
  });
});

// DELETES ROUTES
router.delete('/:todoID', (req, res) => {
  const ID = req.params.todoID;
  db.TodoCollection.remove({
    _id: ID
  })
  .then(deletedID => {
    res.json({
      message: 'data deleted'
    });
  })
  .catch(err => {
    res.send(err);
  });
});

module.exports = router;
