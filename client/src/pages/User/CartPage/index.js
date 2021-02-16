import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CartCard from '../../../component/Card/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    boxSizing: 'border-box',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // marginRight: theme.spacing(5),
  },
  cartProductsContainer: {
    marginTop: theme.spacing(3),

    // marginLeft: theme.spacing(5),
    boxSizing: 'border-box',
  },
  cartProduct: {
    marginTop: theme.spacing(2),
  },
}));
const CartPage = (props) => {
  const classes = useStyles();
  // const [isFavorite, setIsFavorite] = useState();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { cartProducts, favoriteData } = props.userData;

  console.log(cartProducts);
  let totalPrice = 0;
  let fa = [];
  cartProducts.map((product) => {
    totalPrice += product.new_price;
  });

  favoriteData.length !== 0 || cartProducts.length !== 0
    ? (fa = favoriteData.map((product) => product.product_id))
    : (fa = null);

  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <title>cart</title>
      </Helmet>
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Grid item sm={7} className={classes.cartProductsContainer}>
            {cartProducts.map((product) => {
              const isFavorite = fa.includes(product.product_id);
              return (
                <div className={classes.cartProduct}>
                  <CartCard data={product} isFavorite={isFavorite} />
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
                  <Typography> المجموع الجزئي</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>₪ {totalPrice}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography> تكلفة الشحن</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>₪ 12</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    color="textPrimary"
                    style={{ fontWeight: 'bold' }}
                  >
                    الإجمالي
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    color="textPrimary"
                    style={{ fontWeight: 'bold' }}
                  >
                    ₪ 12
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
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
