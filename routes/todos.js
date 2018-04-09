const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodoAll)
.post(helpers.postTodo);

// SHOW ROUTES
router.route('/:todoID')
.get(helpers.getTodosID)
.put(helpers.putTodo)
.delete(helpers.deleteToDo);

module.exports = router;
