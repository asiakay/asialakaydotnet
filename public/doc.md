# [Converting A Static Site to A Dynamic Node.js Web App](https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/)

Goal: 
- convert a static website that uses 
    - HTML, 
    - CSS and 
    - JavaScript (JS) 
- to a dynamic one using 
    - MongoDB, 
    - Express, 
    - Static HTML, 
    - CSS, 
    - JS, and 
    - Node.js.
    - [EJS](https://ejs.co/)

node version = v14.16.0
npm = 6.14.11


# Creating the server 
- create an expres web server 
  - create a new folder named "public"
  - move all static files (HTML, CSS, JS, Images, etc)
  - create a file called `server.js` in the root directory 


// Load node modules 

  ```JSX

var express = require('express');

/* initialize express instance through app object*/

var app = express();

/*  Render static files

The express() function is a top-level function 
exported by the express module. */

app.use(express.static('public'));

// port to run website on 
/* app.listen() listens for connections  */

app.listen(8080);
```

if npm init is already run, 
and we have a package.json file in place, 
then change the entry point to `server.js`

type `npm start` to start development server
navigate to localhost:8080/index.html 

Now the Express server is serving static files 

# Installing EJS 

head to the command line at the root of the project 

enter: 

```zsh
npm install ejs --save
```
