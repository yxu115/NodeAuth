/**
 * Created by AmyDuan on 20/08/16.
 */
var express = require('express');
var router = express.Router();
var url = require('url');

router.get("/", function (req, res, next) {
    var get_params = url.parse(req.url, true).query;

    if (Object.keys(get_params).length == 0) {
        res.end('Hello all');
    } else {
        res.end('Hello ' + get_params.name);
    }
});

module.exports = router;