var http = require('http');
 
var express = require('express')
var app = express()
var path = require('path');


app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});

app.get('/api/playPause/:vmName/:grpName/:strtStop', function (req, res) {
	var exec = require('child_process').exec;
	var vmName = req.params.vmName
	var grpName = req.params.grpName
	var strtStop = req.params.strtStop
	var cmd = "azure vm " + strtStop + " " + grpName + " " + vmName

	console.log("cmd---->"+cmd)

	exec('ls -la', (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
	    res.send(504)
	  }
	  	console.log ("Command executed successfully--->"+stdout)
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