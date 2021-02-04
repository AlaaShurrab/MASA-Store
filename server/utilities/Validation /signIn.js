const Joi = require('joi');

const signInValidation = ({
  email, password,
}) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  const result = schema.validateAsync({
    email, password,
  });
  return result;
};

module.exports = signInValidation;
