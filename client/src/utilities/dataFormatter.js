const dataFormatter = (res, favoriteData, cartProducts) =>
  res.map((item) => {
    let isCart = false;
    let isFavorite = false;
    if (favoriteData.length !== 0 || cartProducts.length !== 0) {
      isCart = cartProducts.includes(item.id);
      isFavorite = favoriteData.includes(item.id);
    }
    return {
      ...item,
      isFavorite,
      isCart,
    };
  });

export default dataFormatter;
