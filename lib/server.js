var http = require('http');
 
var express = require('express')
var app = express()
var path = require('path');


app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});

app.get('/api/playPause/:id', function (req, res) {
	var exec = require('child_process').exec;
	var id = req.params.id
	console.log("Instance to start/stop - "+id)
	exec('ls -la', (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
	    res.send(504)
	  }
	  	console.log ("Got the request in ndoe--->"+stdout)
		res.send(200)
	});
})


app.use('/bower_components', express.static(path.join(__dirname, '../app/bower_components/')));
app.use('/styles', express.static(path.join(__dirname, '../app/styles/')));
app.use('/js', express.static(path.join(__dirname, '../app/js/')));
app.use('/views', express.static(path.join(__dirname, '../app/views/')));
app.use('/data', express.static(path.join(__dirname, '../app/data/')));

app.listen(4000, function () {
	console.log('ascend app listening on port 4000!')
})