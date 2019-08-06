var controller = {
    addData: addData
}
var Item = require('../models/item');

function addData(req, res) {

    console.log(req.headers);
    var item = new Item(req.body);
    item.save((err, savedData) => {
        if (err) {
            res.send("Error occured").status(500);
        } else {
            res.send(savedData).status(200);
        }
    });
}

module.exports = controller;