// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
/* require("dotenv/config"); */

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// body parser
/* const bodyParser = require('body-parser');

app.use(bodyParser.json());  */

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
const { isAuthenticated } = require('./middleware/jwt.middleware')

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

// home route
app.get('/', (req, res) => {
    res.send('we are home');
});

// auth route
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// todo route
const todoRoutes = require('./routes/todo.routes');
app.use('/', todoRoutes);

// trip route
const tripRoutes = require('./routes/trip.routes');
app.use('/',  isAuthenticated,  tripRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
