var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

/* GET home page. */
router.get('/layoutreact', function(req, res, next) {
  res.render('layout_react', { title: 'Express' });
});

module.exports = router;

router.get('/routertest', function(req, res, next) {
  res.render('router_test', { title: 'Express' });
});

module.exports = router;

