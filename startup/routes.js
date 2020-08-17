const PagesRoutes = require("../routes/PagesRoutes.js");


module.exports = app => {
  app.use("/", PagesRoutes);
};
