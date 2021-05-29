var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path')
// require('')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/quantity-measurement')));
app.get('/*', function (req, res) {

    res.send('<h1>hello</h1>').status(200);
});
var listener = server.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});