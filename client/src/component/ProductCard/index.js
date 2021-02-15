import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import {
  Grid,
  Checkbox,
  FormControlLabel,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    border: '1px solid #DADADA',
    borderRadius: 10,
  },
  star: {
    color: '#f8c81a',
    height: 20,
    width: 'auto',
    paddingBottom: 5,
  },
  rating: {
    paddingRight: 200,
  },
  ph: {
    fontSize: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: 3,
  },
  content: {
    width: 250,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const { data, role, isFavorite, isCart } = props;

  const classes = useStyles();
  const [checked, setChecked] = React.useState(isFavorite);
  const [added, setAddCart] = React.useState(isCart);

  const handelChecked = (e) => {
    setChecked(e.target.checked);
    if (checked) {
      props.deleteFavorite(data.id);
    } else {
      props.addFavorite(data.id);
    }
  };

  const handelAddCart = (e) => {
    setAddCart(e.target.checked);
    if (added) {
      props.deleteCart(data.id);
    } else {
      props.addCart(data.id);
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="primary" />}
            checked={checked}
            onChange={handelChecked}
            name="checked"
            disabled={role !== 'user'}
          />
        }
      />

      <CardMedia
        className={classes.media}
        image={data.img_url}
        title={data.name}
      />
      <CardContent className={classes.content}>
        <Typography variant="body1" color="textPrimary" component="address">
          {data.name.substring(0, 30)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.ph}>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={3}>
            <FormControlLabel control={<pre> ₪ </pre>} label={data.new_price} />
          </Grid>

          <Grid item xs={1}>
            <FormControlLabel
              className={classes.rating}
              control={<StarIcon className={classes.star} />}
              label={parseFloat(data.rating).toPrecision(2)}
            />
          </Grid>

          <Grid item xs={3}>
            {role !== 'user' ? null : (
              <IconButton aria-label="add to cart" className={classes.addCart}>
                <Checkbox
                  icon={<AddShoppingCartIcon fontSize="small" />}
                  checkedIcon={
                    <ShoppingCartIcon color="primary" fontSize="small" />
                  }
                  checked={added}
                  onChange={handelAddCart}
                  name="checkedH"
                />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  role: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  isCart: PropTypes.bool,
  addFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
  }).isRequired,
};

ProductCard.defaultProps = {
  isFavorite: false,
  isCart: false,
};
