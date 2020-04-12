const express = require('express');
const auth = require('express-basic-auth');

const controller = require('../app-controllers/controller-teacher')

const routers = express.Router();
const basic = auth({users:{'T0$r3@n':'$3m$0nghy-T0$r3@n'}})

routers.post('/login',basic,controller.login);
module.exports = routers;