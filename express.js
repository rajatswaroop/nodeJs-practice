/*
code for express framework...
Here the app.listen, creates a new server on port 9000 and is ready for the request and response.
 */

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello Nodejs from Java Dev')
})

app.get('/rajat', function(req, res){
    res.send('Welcome back Rajat')
})

app.listen(9000, function (req, res) {
    console.log('Running....')
})