const Keycloak = require('keycloak-connect');
const express = require('express');
var session = require('express-session');
var config = require('./config/config');
var memoryStore = new session.MemoryStore();
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
var userRouter = require('./routes/user.route');
var adminRouter = require('./routes/admin.route');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUrl);

var keycloak = new Keycloak({
    store: memoryStore
});

app.use(session({
    secret: 'thisShouldBeLongAndSecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
app.use(keycloak.middleware());


app.use(cors());
app.use(bodyparser.json());


app.use('/user', keycloak.protect(), userRouter);
app.use('/admin', keycloak.enforcer(config.adminPermission), adminRouter);
app.get("/test", function (req, res) {
    res.send("Non Authenticated Route");
});


app.use(keycloak.middleware({
    logout: '/'
}));

app.listen(config.appPort, function () {
    console.log('App listening on ' + config.appUrl + config.appPort);
});