const bcrypt = require("bcrypt");

module.exports = async parameter => {
  const hashParameter = await bcrypt.hash(parameter, 10);
  return hashParameter;
};
