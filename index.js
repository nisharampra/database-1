// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // Send the response "Hello, world!" to the client
    res.send("Hello, world!");
});

// Start the Express application and make it listen for incoming connections on port 1000
app.listen(1000, () => {
    // Once the server starts listening, log a message to the console
    console.log("Server is running on port 1000");
});
