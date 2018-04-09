const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cant be blank'
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdData: {
    type: Date,
    default: Date.now
  }
});

const TodoCollection = mongoose.model('Todo', todoSchema);
module.exports = TodoCollection;
