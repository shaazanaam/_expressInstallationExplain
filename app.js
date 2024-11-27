
// Load the express module
const express = require('express');

// Load the square module
const square= require('./square');// Here we require() the name of the file without the (optional)
// .js file extension
console.log('The area of a square with a side of 4 is ' + square.area(4));

// to use the router module in our app.js file, we require() the module and then use the middleware function
// app.use() to add the router to the application's routes.
// go to this section https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// to learn more about routing in Express
const wiki = require('./wiki.js');
app.use('/wiki', wiki);



// calling the returned object to create an Express application
// We can then access the properties and the functions of the application object
const app = express(); // Create an express app
app.get('/', (req, res) => {res.send('Hello World!')}); // Define the response for the root URL
setTimeout(() => {console.log('Time out!')}, 3000); // Set a timeout of 1000 milliseconds
console.log('Second'); // Print a message

app.all("/secret", (req, res, next) => {console.log('Accessing the secret section ...');next();}); // Middleware function to log the request







app.listen(3000, () => {console.log('Server running on port${3000}');}); // Start the server on port 4000
