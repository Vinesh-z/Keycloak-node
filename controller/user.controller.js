var controller = {
    getData: getData
}
var Item = require('../models/item');

function getData(req, res) {
    console.log('get');
    Item.find({})
        .then(item => res.send(item).status(200))
        .catch(err => res.send("Error").status(500));
}

module.exports = controller;