// @flow
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// custom req
const todoRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {

});

app.listen(12345, 'localhost', function() {
  console.log('app started');
});
