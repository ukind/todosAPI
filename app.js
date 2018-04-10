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
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log('server started');
});
