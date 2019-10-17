var ex = require('express');
var rout = ex.Router();
var product = require("../models/product_model");

rout.get('/', function (req, res, next) {
    console.log('all data');
    product.getAllProduct(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

rout.get('/:pro_id', function (req, res, next) {
    console.log('get rout');
    product.getProductById(req.params.pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


/*rout.post('/',upload.single('image'), function (req, res, next) {
    console.log('post rout');
    product.addProduct(req.body,req.file.filename,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});*/

rout.delete('/:pro_id', function (req, res, next) {
    console.log('delte rout');
    product.deleteProduct(req.params.pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = rout;