var express = require('express');
var router = express.Router();

/* GET home page. */
// app.options('/', function(req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     res.end();
// });
router.post('/', function(req, res, next) {
    res.send({ name: 'mamad' })
        // res.render('index', { title: 'Express' });
});

module.exports = router;