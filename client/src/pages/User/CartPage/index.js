import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import CartCard from '../../../component/Card/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const CartPage = (props) => {
  const classes = useStyles();

  const { cartProducts } = props.userData;
  console.log(cartProducts);

  return (
    <>
      <Helmet>
        <title>cart</title>
      </Helmet>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={6}>
            {cartProducts.map((product) => (
              <CartCard data={product} />
            ))}
          </Grid>
          <Grid item xs={4} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography>ملخص الطلبية</Typography>
                </Grid>
                <Grid item xs={6}>
                  المجموع الجزئي
                </Grid>
                <Grid item xs={6}>
                  12
                </Grid>
                <Grid item xs={6}>
                  تكلفة الشحن
                </Grid>
                <Grid item xs={6}>
                  12
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
