const app = require('express');
const adminRouter = app.Router();
var controller = require('../controller/admin.controller');

adminRouter.post('/add-data', controller.addData);

module.exports = adminRouter;