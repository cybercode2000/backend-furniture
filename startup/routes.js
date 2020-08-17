const general = require("../routes/general");


module.exports = app => {
  app.use("/", general);
};
