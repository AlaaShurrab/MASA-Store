import { React, useState } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  CardHeader,
  CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '.5rem',
    maxWidth: '1000px',
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentActions: {
    flex: '1 0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  cover: {
    width: '250px',
    height: 'auto',
    borderRadius: '15px',
    backgroundSize: 'contain',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'center',
    '& .MuiCardContent-root': {
      padding: 0,
    },
  },
  cartContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '0 5px',
    textAlign: 'center',
    width: '100%',
  },
  ml20: {
    marginLeft: '20px',
    padding: 0,
    '& .MuiCardContent-root': {
      padding: 0,
    },
  },
  numberInput: {
    width: '40px',
    '& .MuiOutlinedInput-input': {
      padding: '6px 2px',
      textAlign: 'center',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      height: '31.9px',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  smallCard: {
    '& .MuiCardHeader-content': {
      textAlign: 'left',
    },
    '& .MuiCardContent-root': {
      textAlign: 'left',
    },
    '& .MuiCardHeader-root': {
      flexDirection: 'row-reverse',
    },
  },
  priceLabel: {
    padding: 16,
    textAlign: 'center',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  quantityButtonRight: {
    borderRadius: '5px 0px 0px 5px',
    width: '.2rem',
  },
  quantityButtonLeft: {
    borderRadius: 0,
    width: '.5rem',
    // eslint-disable-next-line no-dupe-keys
    borderRadius: '0px 5px 5px 0px',
  },
}));
const CartCard = ({
  data,
  isFavorite,
  deleteFavorite,
  addFavorite,
  handleDeleteItem,
}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    checked: false,
  });
  console.log('llllllllllllll', data);
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { checked } = state;

  const [addedToFav, setAddedToFav] = useState(isFavorite);

  const handelAddFav = (e) => {
    setAddedToFav(e.target.checked);
    if (addedToFav) {
      deleteFavorite(data.id);
    } else {
      addFavorite(data.id);
    }
  };

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      {!matches ? (
        <Card className={classes.root}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
          <CardMedia className={classes.cover} image={data.img_url} />
          <div className={classes.cartContent}>
            <Typography component="h5" variant="h6">
              {data.name}
            </Typography>
            <Typography className={classes.ml20} variant="body1">
              {data.description}
            </Typography>
          </div>
          <div className={classes.details}>
            <CardContent className={classes.contentActions}>
              <Button>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<FavoriteIcon color="primary" />}
                  checked={addedToFav}
                  onChange={handelAddFav}
                  name="checked"
                />
              </Button>
              <Button onClick={handleDeleteItem}>
                <DeleteRoundedIcon color="primary" />
              </Button>
            </CardContent>
            <div className={classes.controls}>
              <Button
                variant="outlined"
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
                className={classes.quantityButtonRight}
              >
                <AddIcon fontSize="small" />
              </Button>
              <TextField
                value={count}
                variant="outlined"
                className={classes.numberInput}
              />
              <Button
                variant="outlined"
                aria-label="reduce"
                className={classes.quantityButtonLeft}
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
            </div>
            <div className={classes.priceLabel}>
              <Typography variant="h6">{data.new_price}₪</Typography>
            </div>
          </div>
        </Card>
      ) : (
        <Card className={classes.smallCard}>
          <CardHeader
            action={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checked"
                color="primary"
              />
            }
            title={
              <div className={classes.headerContent}>
                <Typography variant="h6">{data.name}</Typography>
                <CardActions>
                  <Button>
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<FavoriteIcon color="primary" />}
                      checked={addedToFav}
                      onChange={handelAddFav}
                      name="checked"
                    />
                  </Button>
                  <Button onClick={handleDeleteItem}>
                    <DeleteRoundedIcon color="primary" />
                  </Button>
                </CardActions>
              </div>
            }
          />

          <CardMedia className={classes.media} image={data.img_url} />
          <CardContent>
            <div className={classes.controls}>
              <Typography className={classes.ml20} variant="h6">
                {data.description}
              </Typography>
            </div>
          </CardContent>

          <div className={classes.controls}>
            <Button
              variant="outlined"
              aria-label="reduce"
              className={classes.quantityButtonRight}
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <TextField
              value={count}
              variant="outlined"
              id="outlined-basic"
              className={classes.numberInput}
            />
            <Button
              variant="outlined"
              aria-label="increase"
              className={classes.quantityButtonLeft}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </div>
          <div className={classes.priceLabel}>
            <Typography variant="h6">{data.new_price} ₪ </Typography>
          </div>
        </Card>
      )}
    </>
  );
};

CartCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool,
  deleteFavorite: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};
CartCard.defaultProps = {
  isFavorite: true,
};
export default CartCard;
