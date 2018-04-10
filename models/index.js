// @flow
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://ukind:kagekuman@ds139219.mlab.com:39219/todosapp');

mongoose.Promise = Promise;

module.exports.TodoCollection = require('../schemas/todoSchema');
