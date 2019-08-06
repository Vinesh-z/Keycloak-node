const app = require('express');
const userRouter = app.Router();
var controller = require('../controller/user.controller');

userRouter.get('/get-list', controller.getData);
module.exports = userRouter;