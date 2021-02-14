import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';

import { red } from '@material-ui/core/colors';

import logo from '../../assets/watch.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 10,
    width: '70%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
  contentActions: {
    flex: '1 0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: '30%',
    borderRadius: '15px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cartContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
    textAlign: 'center',
    width: '100%',
  },
  ml20: {
    marginLeft: '20px',
  },
  numberInput: {
    width: '50px',
    '& .MuiOutlinedInput-input': {
      padding: '6px 5px',
      textAlign: 'center',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));
const CartCard = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checked: false,
  });
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { checked } = state;
  const matches = useMediaQuery('(max-width:1000px)');

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
          <CardMedia className={classes.cover} image={logo} />
          <div className={classes.cartContent}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  ساعة
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  تفاصيل الساعة
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <Typography className={classes.ml20} variant="h6">
                  لون المنتج: <span>اسود</span>
                </Typography>
                <Typography className={classes.ml20} variant="h6">
                  الحجم: <span>20</span>
                </Typography>
                <Typography className={classes.ml20} variant="h6">
                  الوزن: <span>20</span>
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.details}>
            <CardContent className={classes.contentActions}>
              <Button>
                <FavoriteIcon color="primary" />
              </Button>
              <Button>
                <DeleteRoundedIcon color="primary" />
              </Button>
            </CardContent>
            <div className={classes.controls}>
              <ButtonGroup>
                <Button
                  variant="outlined"
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  value={count}
                  id="outlined-basic"
                  className={classes.numberInput}
                />
                <Button
                  variant="outlined"
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
            <div className={classes.priceLabel}>
              <Typography variant="h6">155 NIS</Typography>
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
                <Typography variant="h6">ساعة</Typography>

                <CardActions>
                  <Button>
                    <FavoriteIcon color="primary" />
                  </Button>
                  <Button>
                    <DeleteRoundedIcon color="primary" />
                  </Button>
                </CardActions>
              </div>
            }
            subheader="تفاصيل الساعة"
          />

          <CardMedia className={classes.media} image={logo} />
          <CardContent>
            <div className={classes.controls}>
              <Typography className={classes.ml20} variant="h6">
                لون المنتج: <span>اسود</span>
              </Typography>
              <Typography className={classes.ml20} variant="h6">
                الحجم: <span>20</span>
              </Typography>
              <Typography className={classes.ml20} variant="h6">
                الوزن: <span>20</span>
              </Typography>
            </div>
          </CardContent>

          <div className={classes.controls}>
            <ButtonGroup>
              <Button
                variant="outlined"
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <TextField
                value={count}
                id="outlined-basic"
                className={classes.numberInput}
              />
              <Button
                variant="outlined"
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div className={classes.priceLabel}>
            <Typography variant="h6">155 NIS</Typography>
          </div>
        </Card>
      )}
    </>
  );
};

/* CartCard.propTypes = {
  productName: PropTypes.string,
  description: PropTypes.string,
  productColor: PropTypes.string,
  productٍSize: PropTypes.string,
  productWeight: PropTypes.string,
};
CartCard.defaultProps = {
  productName: 'ساعة كلاسك',
  description: 'وصف المنتج',
  productColor: 'أسود',
  productٍSize: '40ml',
  productWeight: '40 KG',
}; */
export default CartCard;
