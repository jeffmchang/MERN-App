// Setup the server and the routes for the server.
const express = require("express"); // Import express (server)
const dotenv = require("dotenv").config(); // Import dotenv (environment variables)
const port = process.env.PORT; // Set port to the environment variable PORT (5000 in .env)

const app = express(); // Create an instance of express

app.use(express.json()); // Middleware that parses JSON, middleware runs when a request is made to the server
app.use(express.urlencoded({ extended: true })); // Middleware that parses URL encoded data

app.use("/api/goals", require("./routes/goalRoutes")); // app.use will identify the base route and the route file to use to add of for that base route.

app.listen(port, () => console.log(`Server is running on port ${port}`)); // Start the server and listen on port 5000
