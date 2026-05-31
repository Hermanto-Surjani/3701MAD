var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
  res.send('Hello from Express! Updated.');
});

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages.html'));
});

router.get('/test', function (req, res) {
  res.send('Test page');
});

module.exports = router;
