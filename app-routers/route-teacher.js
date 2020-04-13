const express = require('express');
const auth = require('express-basic-auth');

const controller = require('../app-controllers/controller-teacher')

const routers = express.Router();
const basic = auth({users:{'T0$r3@n':'$3m$0nghy-T0$r3@n'}})

routers.post('/login',basic,controller.login);
routers.post('/teach',basic,controller.teach);
routers.post('/create-teach',basic,controller.createTeach);
routers.post('/update-teacher',basic,controller.updateTeacher);
routers.post('/change-pwd-teacher',basic,controller.changePwdTeacher);

module.exports = routers;