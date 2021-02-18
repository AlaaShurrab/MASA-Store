import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CartCard } from '../../../component/index';

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
const CartPage = ({ userData }) => {
  const classes = useStyles();

  const { favoriteData, profileData, cartProducts } = userData;
  const [products, setProducts] = useState([]);
  const [checkedProductsId, setCheckedProductsId] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const history = useHistory();

  const purchasedProducts = [];
  let favoritesArray = [];

  if (favoriteData.length && cartProducts.length) {
    favoritesArray = favoriteData.map((product) => product.product_id);
  }

  const handleClose = (event, reason) => {
    if (reason !== 'idc') {
      setOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (profileData.id) {
      axios
        .get(`/api/v1/cart/${profileData.id}`)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch(() => {
          setOpen(true);
        });
    }
  }, [profileData.id]);

  const deleteFavorite = async (id) => {
    try {
      await axios({
        method: 'delete',
        url: `/api/v1/favorite/${profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      setOpen(true);
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
      setOpen(true);
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
      .catch(() => setOpen(true));
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
        if (result.data.status === 200) {
          return axios.get(`/api/v1/cart/${profileData.id}`);
        }
        return new Error();
      })
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch(() => setOpen(true));
  };

  const addCheckedProducts = (id) => {
    if (!checkedProductsId.includes(id)) {
      setCheckedProductsId((prev) => [...prev, id]);
    }
  };

  const deleteCheckedProducts = (id) => {
    setCheckedProductsId(checkedProductsId.filter((item) => item !== id));
  };

  const purchase = () => {
    if (!checkedProducts.length) {
      setOpenDialog(true);
    } else {
      history.push({
        pathname: '/payment',
        state: { checkedProducts },
      });
    }
  };

  useEffect(() => {
    let price = 0;
    let numberProducts = 0;
    checkedProductsId.map((id) =>
      purchasedProducts.push(
        ...products.filter((item) => item.product_id === id)
      )
    );

    purchasedProducts.forEach((product) => {
      price += product.new_price * product.quantity;
      numberProducts += product.quantity;
    });
    setTotalPrice(price);
    setNumberOfProducts(numberProducts);
    setCheckedProducts(purchasedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {products.length ? (
              products.map((product) => {
                const isFavorite = favoritesArray.includes(product.product_id);
                return (
                  <div
                    className={classes.cartProduct}
                    key={product.product_id + product.name}
                  >
                    <CartCard
                      data={product}
                      isFavorite={isFavorite}
                      deleteFavorite={deleteFavorite}
                      addFavorite={addFavorite}
                      handleDeleteItem={handleDeleteItem}
                      handleEditItem={handleEditItem}
                      addCheckedProducts={addCheckedProducts}
                      deleteCheckedProducts={deleteCheckedProducts}
                    />
                  </div>
                );
              })
            ) : (
              <Typography
                color="textPrimary"
                variant="body1"
                style={{
                  fontWeight: 'bold',
                  textAlign: 'start',
                  marginTop: '15px',
                }}
              >
                لا يوجد منتجات في عربة التسوق الخاصة بك
              </Typography>
            )}
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="info"
          >
            عذراً حدث خطأ ما
          </MuiAlert>
        </Snackbar>
        <Dialog
          fullScreen={fullScreen}
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            قم بإضافة منتجات أولاً قبل عملية الشراء
          </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={handleCloseDialog} color="primary">
              موافق
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

CartPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

export default CartPage;
