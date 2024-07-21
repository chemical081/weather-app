// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
