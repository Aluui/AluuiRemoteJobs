var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name: 'bob', age: 3, 'hair color': 'brown'});
});

module.exports = router;
