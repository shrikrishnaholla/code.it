var express = require('express'),
    sharejs = require('share').server,
    crypto  = require('crypto'),
    app = express(),
    server = require('http').createServer(app);

var channels = {};
var PORT = process.env.PORT || 8000;
app.use(express.static(__dirname + '/public'));

var options = {db: {type: 'none'}}; // See docs for options. {type: 'redis'} to enable persistance.

// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(app, options);

app.get('/', function(request, response) {
	var current_date = (new Date()).valueOf().toString();
	var random = Math.random().toString();
	var hash = crypto.createHash('sha1').update(current_date + random).digest('hex').slice(32);
	channels[hash] = {count:0};
	response.redirect('/ide.html#'+hash);
});

server.listen(PORT, function(){
    console.log('Server running at PORT:' + PORT );
});
