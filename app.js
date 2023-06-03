// Libraries import
const express = require("express");
const path = require("path");

// Express instance
const app = express();

// Public folder configuration
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Routes import
const homeRoute = require("./routes/home.routes");

// Routes use
app.use(homeRoute);

// Set Template engine
app.set("view engine", "ejs");

// Server runs on port 3001
app.listen(3001, () => console.log("Server running on port 3001"));
