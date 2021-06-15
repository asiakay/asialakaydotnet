// load env vars

require('dotenv').config();

// load dev dependencies
var express = require('express');
var path = require('path');

var app = express();
// set the view engine
app.set('view engine', 'ejs');
// use res.render to load ejs view file

// enable cors
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
  // Handle the post for this route
 });

// index page
app.get('/', function(req, res){
  res.render('pages/index');
});  

// not working 
/* app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'pages/index'));
}); */

app.listen(process.env.PORT);
/* app.listen(8080); */
console.log('8080 is the magic port');



/* var path = require('path');
 */

/* var express = require('express'); */

/* var routes = require('./routes');
 */
//initialize express 

/* var app = express(); */


/* load env vars */

/* require('dotenv').config(); */

// require file system
/* var fs = require('fs');
 */

// Load cloudinary modules 
/* var cloudinary = require('cloudinary').v2; */




// cloudinary configuration
/* cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloudinary_url: process.env.CLOUDINARY_URL
}); */



/*defining and requiring ejs object */
/* const ejs = require('ejs') */





/* npm i @codersrank/summary --save
> puppeteer@5.5.0 install /Users/asialakaygradyloves/Projects/portfolio/asialakaydotnet/node_modules/puppeteer
> node install.js

Downloading Chromium r818858 - 132.4 Mb [====================] 100% 0.0s 
Chromium (818858) downloaded to /Users/asialakaygradyloves/Projects/portfolio/asialakaydotnet/node_modules/puppeteer/.local-chromium/mac-818858
+ @codersrank/summary@0.9.11
added 48 packages from 69 contributors and audited 300 packages in 33.286s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities



   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New major version of npm available! 6.14.11 → 7.16.0      │
   │   Changelog: https://github.com/npm/cli/releases/tag/v7.16.0   │
   │               Run npm install -g npm to update!
                                                                    │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯ 

   - Codersrank Documentation:
https://docs.codersrank.io/widgets/summary-widget*/

/*     After installation you need to import and register web component:
 */
/* import Codersrank Summary below */
   // import CodersrankSummary from '@codersrank/summary';

// register web component as <codersrank-summary> element
// window.customElements.define('codersrank-summary', CodersrankSummary);
      /* End of importing and registering web component */
   

/* 
Installed npm package, output logged below 
npm i @codersrank/portfolio --save
+ @codersrank/portfolio@0.9.9
updated 1 package and audited 301 packages in 2.488s
19 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities
 */



/* var cl = new cloudinary.Cloudinary({cloud_name: "asiala", secure: true});
 */

/* Importing material design ui ligrary to use component modules */
/* import * as mdb from 'mdb-ui-kit';
 */


// Render static files

/* The express() function is a top-level function 
exported by the express module. */


/* app.set('views', path.join(__dirname, 'views'));
 */

/* app.set('views', './views'); */
/* app.set('view engine', 'ejs'); */

/* Navigation */

/* loading ejs view files */

/* index.html () => index.ejs 
sensd view to user with res.render() method */
/* app.get('/', function(req, res){
  res.render('pages/index');
}); */

/* flex-box-demo.html () => flex-box-demo.ejs */
/* app.get('/about', function(req, res){
  res.render('pages/about');
}); */

/* flex-box-demo.html () => flex-box-demo.ejs */
/* app.get('/dev', function(req, res){
  res.render('pages/dev');
}); */





/* app.use(express.static('public')); */

/* app.use('/', routes);
 */


// port to run website on 
/* app.listen() listens for connections  */

/* app.listen(8080);
 */

/* app.listen(port, () => console.info(`App listening on port ${port}`)); */



/* const { port } = require('./config'); */
/* console.log(`your port is ${ port }`); */