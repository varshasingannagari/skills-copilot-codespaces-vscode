// Create web server
var express = require('express');
var app = express();

// Create a route that will handle /comment
app.get('/comment', function(req, res) {
  // Send a response back to the client
  res.send('Hello, this is a comment');
});

// Create a route that will handle /comment
app.get('/comment/:id', function(req, res) {
  // Send a response back to the client
  res.send('Hello, this is comment ' + req.params.id);
});

// Start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});