'use strict';

const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js');
const bearerAuth = require('./middleware/bearer.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save(req.body);
    const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: 54000 });
    const output = {
      user: userRecord,
      token: token,
    };
    res.status(201).json(output);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  const users = await User.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area!');
});


module.exports = authRouter;
