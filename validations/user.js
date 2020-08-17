const Joi = require("joi");

exports.signUpValidation = async (req, res) => {
  const schema = Joi.object().keys({
    fullName: Joi.string()
      .min(5)
      .required(),
    email: Joi.string()
      .email()
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return Joi.validate(req.body, schema);
};
