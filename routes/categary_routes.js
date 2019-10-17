var express = require('express');
var router = express.Router();
var cat = require('../models/categary');

router.get('/', function (req, res, next) {
    cat.getAllCategory(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/:cat_id',function(req,res,next){
    cat.deleteCategory(req.params.cat_id,function(err,rows){
        if(err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports = router;