const Joi = require('joi');

const addOrderValidation = ({
  productId,
  quantity,
}) => {
  const schema = Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().min(1).required(),

  });
  const result = schema.validateAsync({
    productId,
    quantity,
  });
  return result;
};

module.exports = addOrderValidation;
