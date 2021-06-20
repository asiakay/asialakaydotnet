// load env vars

require('dotenv').config(); 

// load dev dependencies
var express = require('express');
/* var path = require('path');
 */
var app = express();
// set the view engine
app.set('view engine', 'ejs');
// use res.render to load ejs view file
// index page
app.get('/', function(req, res){
  res.render('pages/index');
});  
/* app.get('/contact')
res.render('pages/contact'); */
// not working 
/* app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'pages/index'));
}); */


// use res.render to load ejs view file
// index page
/* app.get('/', function(req, res){
  res.render('pages/index');
});   */


// contact page
/* app.get('/contact', function(req, res){
  res.render('pages/contact');
}); */




// sendFile goes here 
/* app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'pages/index.html'));
}); */


/* const port = process.env.PORT 
const server = app.listen(port, listening)
function listening (){ */
  
  /* app.listen(8080); */
  const server = app.listen()

  app.listen(process.env.PORT);
  console.log('8080 is the magic port');













// load dev dependencies
/* const express = require('express');
 *//* const bodyParser = require('body-parser') DEPRECATED */
/* const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const Oath2 = google.auth.OAuth2 */


/* setting up 
OAuth client, 
our client ID,
client secret, 
and the URL of the OAuth playground. */
/* const oauth2Client = new Oath2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https//developers.google.com/oauthplayground")

oauth2Client.setCredentials({
  refresh_token:process.env.REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken() */

/* const app = express()

// set the view engine
app.set('view engine', 'ejs');



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/pages");
}); */

/* 
the app is our instantiated object instance of express middleware
`.post request is the method acting on the object
callback function sends request to client, 
by way of the route/ form action, that both share the same name` 

waits for response back to the server
stores user data in the constant named `output` 
from form as object to be sent to request email. */

/* app.post('/contact', (req, response) => {
  const output =`
  <p><You have a new contact request </p>
  <img class="email" src="cid:email" alt="email-image">
  <h3>Contact Details</h3>
  <ul>
  <li>FirstName: ${req.body.name}>/li>
  <li>TelNum: ${req.body.telephone}</li>
  <li>Email: ${req.body.email}</li>
  <li>Message: ${req.body.message}</li>
  </ul>` */
 

/* sending email using Simple Mail Transfer Protocol (SMTP) and Nodemailer */
/* const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth:{
  type: "OAuth2",
  user:process.env.GMAIL_USER,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_ID,
  refreshToken: process.env.REFRESH_TOKEN,
  accessToken:accessToken
  }}) */

  /* const mailOpts = {
    from: process.env.GMAIL_USER,
    to: process.env.RECIPIENT, 
    subject: 'New message from asialakay-dotnet-demo',
    html: output,
    attachments: [{
    filename:'email.jpg',
    path:__dirname + '/public/images/email.jpg', cid: 'email' 
      // cid = content id, same cid value as in the html img src
    }]} */

/* smtpTrans.sendMail(mailOpts, (error, res) => {
  if(error){
    console.log(error);
  } else{
    console.log("Message sent: " + res.message);
    response.status(200).send(200)
  }
})
}) */

/* var path = require('path'); */
/* const { response } = require('express'); */








/* app.listen(process.env.PORT); */
/* app.listen(8080); */





// not working 
/* app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'pages/index'));
}); */





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
