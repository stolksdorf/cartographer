'use strict';
var _ = require('lodash');
require('app-module-path').addPath('./shared');
var vitreumRender = require('vitreum/render');
var bodyParser = require('body-parser')
var express = require("express");
var app = express();
app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json({limit: '25mb'}));

var projectVersion = require('./package.json').version;

app.get('*', function (req, res) {
	vitreumRender({
		page: './build/cartographer/bundle.dot',
		globals:{},
		prerenderWith : './client/cartographer/cartographer.jsx',
		initialProps: {
			url: req.originalUrl,
			version : projectVersion
		},
		clearRequireCache : !process.env.PRODUCTION,
	}, function (err, page) {
		return res.send(page)
	});
});



var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on localhost:' + port);