const express = require('express');

const server = express();

// tells express to read json from req.body
server.use(express.json());

const users = ['Diego', 'Robson', 'Victor'];

// lists all users
server.get('/users', (req, res) => {
  return res.json(users);
});

// returns users index
server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

// creates user
server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// edit user
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// delete user
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);