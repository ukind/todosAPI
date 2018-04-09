const db = require('../models');

exports.getTodoAll = (req, res) => {
  db.TodoCollection.find()
  .then(foundID => {
    res.json(foundID);
  })
  .catch(err => {
    res.send(err);
  });
};

exports.getTodosID = (req, res) => {
  db.TodoCollection.findById(req.params.todoID)
  .then(foundID => {
    res.json(foundID);
  })
  .catch(err => {
    res.send(err);
  });
};

exports.postTodo = (req, res) => {
    db.TodoCollection.create(req.body)
    .then(newTodo => {
      res.json(newTodo);
    })
    .catch(error => {
      res.send(error);
    });
  };

exports.putTodo = (req, res) => {
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
};

exports.deleteToDo = (req, res) => {
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
};

module.exports = exports;
