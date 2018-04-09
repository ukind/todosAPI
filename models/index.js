// @flow
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todoAPI');

mongoose.Promise = Promise;

module.exports.TodoCollection = require('../schemas/todoSchema');
