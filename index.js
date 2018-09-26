const express = require('express');
const bodyParser = require('body-parser');
const { User, Blog, Tag } = require('./sequelize');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
});

app.get('/api/users', (req, res) => {
  User.findAll().then(users => res.json(users))
});

const port = 3000
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});