import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CartCard from '../../../component/Card/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(6),
    boxSizing: 'border-box',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cartProductsContainer: {
    marginTop: theme.spacing(4),
    boxSizing: 'border-box',
  },
  cartProduct: {
    marginTop: theme.spacing(3),
  },
}));
const CartPage = (props) => {
  const classes = useStyles();

  const { favoriteData, profileData, cartProducts } = props.userData;
  const [products, setProducts] = useState();
  const [checkedProductsId, setCheckedProductsId] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { type, setType } = props;
  const history = useHistory();
  const [state, setState] = useState({
    checked: false,
  });
  const purchasedProducts = [];
  let fa = [];
  favoriteData.length !== 0 && cartProducts.length !== 0
    ? (fa = favoriteData.map((product) => product.product_id))
    : (fa = null);

  useEffect(() => {
    axios
      .get(`/api/v1/cart/${profileData.id}`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, [profileData.id]);

  const deleteFavorite = (id) => {
    try {
      axios({
        method: 'delete',
        url: `/api/v1/favorite/${profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (id) => {
    try {
      await axios({
        method: 'post',
        url: `/api/v1/favorite/${profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = (id) => {
    axios({
      method: 'delete',
      url: `/api/v1/cart/${profileData.id}`,
      headers: {},
      data: {
        productId: id,
      },
    })
      .then(() => products.filter((item) => item.product_id !== id))
      .then((result) => setProducts(result))
      .catch();
  };

  const handleEditItem = (id, quantity) => {
    axios({
      method: 'put',
      url: `/api/v1/cart/${profileData.id}`,
      headers: {},
      data: {
        productId: id,
        quantity,
      },
    })
      .then((result) => {
        if (result.data.status === 200)
          axios
            .get(`/api/v1/cart/${profileData.id}`)
            .then((response) => {
              setProducts(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
      })
      .catch();
  };

  const addCheckedProducts = (id) => {
    if (!checkedProductsId.includes(id)) {
      setCheckedProductsId((prev) => [...prev, id]);
    }
  };

  const deleteCheckedProducts = (id) => {
    setCheckedProductsId(checkedProductsId.filter((item) => item !== id));
  };

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const purchase = () => {
    history.push({
      pathname: '/payment',
      state: { checkedProducts },
    });
  };

  useEffect(() => {
    let price = 0;
    let numberProducts = 0;
    checkedProductsId.map((id) =>
      purchasedProducts.push(
        ...products.filter((item) => item.product_id === id)
      )
    );

    purchasedProducts.map((product) => {
      price += product.new_price * product.quantity;
      numberProducts += product.quantity;
    });
    setTotalPrice(price);
    setNumberOfProducts(numberProducts);
    setCheckedProducts(purchasedProducts);
  }, [checkedProductsId, products]);

  return (
    <>
      <Helmet>
        <title>cart</title>
      </Helmet>
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Grid item sm={7} className={classes.cartProductsContainer}>
            <Typography
              color="textPrimary"
              variant="h6"
              style={{ fontWeight: 'bold', textAlign: 'start' }}
            >
              عربة التسوق
            </Typography>
            {products &&
              products.map((product) => {
                const isFavorite = fa.includes(product.product_id);
                return (
                  <div className={classes.cartProduct}>
                    <CartCard
                      data={product}
                      isFavorite={isFavorite}
                      deleteFavorite={deleteFavorite}
                      addFavorite={addFavorite}
                      handleDeleteItem={handleDeleteItem}
                      handleEditItem={handleEditItem}
                      addCheckedProducts={addCheckedProducts}
                      deleteCheckedProducts={deleteCheckedProducts}
                      handleChangeCheck={handleChangeCheck}
                    />
                  </div>
                );
              })}
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.paper} elevation={3}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    color="textPrimary"
                    variant="h6"
                    style={{ fontWeight: 'bold', textAlign: 'start' }}
                  >
                    ملخص الطلبية
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textPrimary">السعر الكلي</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" color="primary">
                    ₪ {totalPrice}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textPrimary">عدد المنتجات</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{numberOfProducts}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={purchase}
                  >
                    شراء
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CartPage;
