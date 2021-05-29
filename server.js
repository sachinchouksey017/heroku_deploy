var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path')

app.use(express.static(path.join(__dirname + '/dist/')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/'))
});
var listener = server.listen(process.env.PORT || 5000, function () {
    console.log(`Listening on port ${listener.address().port}`); //Listening on port 5000
});