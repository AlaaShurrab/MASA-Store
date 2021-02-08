const Joi = require('joi');

const signInValidation = ({ email, password }) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
      .message({
        'string.pattern.base':
          'Password must contain 8 Characters,and at least uppercase, lowercase, number and special Character',
      })
      .required(),
  });
  const result = schema.validateAsync({
    email,
    password,
  });
  return result;
};

module.exports = signInValidation;
