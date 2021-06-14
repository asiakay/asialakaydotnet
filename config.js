const dotenv = require('dotenv');
dotenv.config();

// get Env variable / cloudinary 

    module.exports = {
      endpoint: process.env.API_URL,
      masterKey: process.env.API_KEY,
      port: process.env.PORT
    };
    var cloudinary = require('cloudinary').v2; 
    // Log some messages on Terminal 
    if ( typeof(process.env.CLOUDINARY_URL) == 'undefined' ){ 
      console.log('Cloudinary config file is not defined'); 
      console.log('Setup CLOUDINARY_URL or use dotenv module file') 
    } else { 
      console.log('Cloudinary config, successfully used:'); 
      console.log(cloudinary.config()) 
    } 
 // https://subscription.packtpub.com/book/web_development/9781785888434/4/ch04lvl1sec61/creating-the-env-js-file
