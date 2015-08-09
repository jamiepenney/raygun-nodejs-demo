var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fail', function(req, res, next) {
  throw new Error("Danger, Will Robinson!");
});

module.exports = router;
