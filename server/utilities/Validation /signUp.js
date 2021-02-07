const Joi = require('joi');

const signUpValidation = ({
  email, firstName, lastName, password,
}) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(3).max(40).required(),
    lastName: Joi.string().min(3).max(40).required(),
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
    firstName,
    lastName,
    password,
  });
  return result;
};

module.exports = signUpValidation;
