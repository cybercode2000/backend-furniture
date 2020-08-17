const express = require("express");
const app = express();

require("./startup/middleware.js")(app);
require("./startup/condition")(app);
require("./startup/routes.js")(app);

module.exports = app;