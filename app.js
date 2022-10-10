require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send(process.env.BEYOND);
})

app.listen(3000);

module.exports.app = app;