const Joi = require('joi');

const signUpValidation = ({
  email, first_name, last_name, password,
}) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  const result = schema.validateAsync({
    email, first_name, last_name, password,
  });
  return result;
};

module.exports = signUpValidation;
