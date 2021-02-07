const connection = require('../connection');

const putProduct = (id, obj) => {
  const sql = {
    text:
      'update products set name=COALESCE($1,name ) ,description =COALESCE($2,description) ,img_url =COALESCE($3,img_url) ,category=COALESCE($4,category) ,rating=COALESCE($5,rating) ,old_price=COALESCE($6,old_price)  ,new_price=COALESCE($7,new_price) ,quantity=COALESCE($8,quantity) where id=$9 returning *',
    values: [
      obj.name,
      obj.description,
      obj.img_url,
      obj.category,
      obj.rating,
      obj.oldPrice,
      obj.price,
      obj.quantity,
      id,
    ],
  };
  return connection.query(sql);
};

module.exports = putProduct;
