// Load node modules 

var express = require('express');

//initialie express 

var app = express();

// Render static files

/* The express() function is a top-level function 
exported by the express module. */

app.use(express.static('public'));

// port to run website on 
/* app.listen() listens for connections  */

app.listen(8080);