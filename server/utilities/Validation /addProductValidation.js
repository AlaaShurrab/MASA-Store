const Joi = require('joi');

const addProductValidation = ({
  name,
  description,
  img_url,
  category,
  rating,
  price,
  quantity,
  created_at,
}) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    img_url: Joi.string().required(),
    category: Joi.string()
      .valid('fashion', 'accessories', 'electronics', 'health')
      .required(),
    rating: Joi.number().max(5),
    price: Joi.number().min(1).required(),
    quantity: Joi.number().min(1).required(),
    created_at: Joi.date().timestamp(),
  });
  const result = schema.validateAsync({
    name,
    description,
    img_url,
    category,
    rating,
    price,
    quantity,
    created_at,
  });
  return result;
};

module.exports = addProductValidation;
