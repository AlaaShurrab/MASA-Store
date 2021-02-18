import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ userData }) {
  const history = useHistory();
  console.log(history.location.state.checkedProducts);
  const products = history.location.state.checkedProducts;
  const totalPrice = products.reduce(
    (prevProduct, newProduct) => prevProduct.new_price + newProduct.new_price
  );

  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        ملخص الطلبية
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.new_price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {totalPrice}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
