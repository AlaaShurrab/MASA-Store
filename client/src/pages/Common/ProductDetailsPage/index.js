import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, useParams, useHistory } from 'react-router-dom';
import { TextField, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

import './productPage.css';
import dataFormatter from '../../../utilities/dataFormatter';
import { CardContainer, ButtonComponent } from '../../../component';

const ProductDetailsPage = ({ type, userData }) => {
  const [data, setData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setFavorite] = React.useState(false);
  const [isCart, setCart] = React.useState(false);
  const { productId } = useParams();

  const history = useHistory();

  const purchase = () => {
    if (quantity <= data.quantity) {
      history.push({
        pathname: '/payment',
        state: {
          checkedProducts: [
            {
              description: data.description,
              img_url: data.img_url,
              name: data.name,
              new_price: data.new_price,
              old_price: data.old_price,
              product_id: data.id,
              quantity,
            },
          ],
        },
      });
    } else {
      setOpen(true);
    }
  };

  const dataCollector = async () => {
    if (userData) {
      const { favoriteIds, cartIds } = userData;
      if (favoriteIds && cartIds) {
        const {
          data: { data: productData },
        } = await axios(`/api/v1/product/${productId}`, {});
        setData(dataFormatter(productData, favoriteIds, cartIds)[0]);

        const {
          data: { data: extra },
        } = await axios(`/api/v1/products/${productData[0].category}`, {});
        setRelatedData(dataFormatter(extra.slice(0, 4), favoriteIds, cartIds));
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      setOpen(false);
    }
  };

  const deleteFavorite = () => {
    try {
      axios({
        method: 'delete',
        url: `/api/v1/favorite/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: data.id,
        },
      });
      setFavorite(false);
    } catch (error) {
      setOpen(true);
    }
  };

  const addFavorite = async () => {
    try {
      await axios({
        method: 'post',
        url: `/api/v1/favorite/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: data.id,
        },
      });
      setFavorite(true);
    } catch (error) {
      setOpen(true);
    }
  };

  const deleteCart = () => {
    try {
      axios({
        method: 'delete',
        url: `/api/v1/cart/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: data.id,
        },
      });
      setCart(false);
    } catch (error) {
      setOpen(true);
    }
  };

  const addCart = () => {
    try {
      if (quantity <= data.quantity) {
        axios({
          method: 'post',
          url: `/api/v1/cart/${userData.profileData.id}`,
          headers: {},
          data: {
            productId: data.id,
            quantity,
          },
        });
        setCart(true);
      } else {
        setOpen(true);
      }
    } catch (error) {
      setOpen(true);
    }
  };

  const handelFavorite = () => {
    if (isFavorite) {
      deleteFavorite();
    } else {
      addFavorite();
    }
  };

  const handelCart = () => {
    if (isCart) {
      deleteCart();
    } else {
      addCart();
    }
  };
  const quantityLogger = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    dataCollector();
  }, [productId, userData]);

  useEffect(() => {
    setCart(data.isCart);
    setFavorite(data.isFavorite);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>category</title>
      </Helmet>
      <div className="productInfo main">
        <div className="poster-wrapper">
          <a href={data.img_url}>
            <img className="poster" src={data.img_url} alt="poster" />
          </a>
        </div>
        <div className="content">
          <h1 className="mainTitle">{data.name}</h1>
          <p className="quantity">
            <strong> متوفر : </strong>
            {data.quantity}
            قطعة
          </p>
          <p className="description">
            <strong>وصف المنتج : </strong>
            {data.description}
          </p>
          <p className="description">
            <strong>السعر : </strong>
            {data.new_price} ₪
          </p>
          الفئة :<Link to={`/products/${data.category}`}> {data.category}</Link>
          <br />
          <div className="counter">
            <TextField
              size="medium"
              type="number"
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 1,
                },
              }}
              onChange={quantityLogger}
              label="الكمية"
            />
            {quantity > data.quantity ? (
              <span className="error">الكمية المطلوبة أكثر من المتوفر</span>
            ) : null}
          </div>
          <div className="buttons">
            <ButtonComponent
              text="إضافة إلي السلة"
              color="primary"
              longButton
              iconButton={false}
              onClick={handelCart}
            />
            <ButtonComponent
              text="شراء"
              longButton
              iconButton={false}
              onClick={purchase}
            />
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="primary" />}
              checked={isFavorite}
              onChange={handelFavorite}
              name="checked"
              disabled={type !== 'user'}
            />
          </div>
        </div>
      </div>
      <CardContainer
        userData={userData}
        role={type}
        data={relatedData}
        pageTitle="منتجات مشابهة"
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="error"
        >
          يوجد ضغط حالياُ، الرجاء المحاولة مرة أخرى لاحقاً
        </MuiAlert>
      </Snackbar>
    </>
  );
};

ProductDetailsPage.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

export default ProductDetailsPage;
