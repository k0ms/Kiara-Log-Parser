var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('login', {title: 'Kirara Log Parser'});
});

module.exports = router;