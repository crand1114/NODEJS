var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello Charles!')
});


router.post('/', function (req, res) {
    res.send('Got a POST request')
});


module.exports = router;