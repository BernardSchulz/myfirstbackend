var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
	var data = {
		message : "hello world"
	}
	res.send(data);
});

router.post('/profile', function(req, res, next) {
	var data = req.query.nickname;
	var sendData = {
		nickname : data
	}
	res.send(sendData);
});

module.exports = router;
