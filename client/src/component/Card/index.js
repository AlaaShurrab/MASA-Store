import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/watch.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    height: 100,
  },
  cover: {
    width: '70%',
    borderRadius: 15,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardTypography: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  counterBtns: {
    direction: 'ltr',
  },
  numberInput: {
    '& .MuiOutlinedInput-input': {
      padding: 10,
      width: 30,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
    },
    '& .MuiButtonGroup-grouped': {
      padding: 5,
    },
  },
  priceLabel: {
    padding: '6px 25px;',
  },
  iconsBtns: {
    padding: '5px 0',
  },
}));

const CartCard = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: false,
  });
  const [count, setCount] = React.useState(1);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { checked } = state;

  return (
    <Card className={classes.root}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        name="checked"
        color="primary"
      />
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <img alt="logo" className={classes.cover} src={logo} />
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h5">ساعة كلاسيك</Typography>
            <Typography variant="h5">سابمرينز</Typography>
            <div className={classes.cardTypography}>
              <Typography variant="h6">
                لون المنتج: <span>اسود</span>
              </Typography>
              <Typography variant="h6">
                الحجم: <span>40ml</span>
              </Typography>
              <Typography variant="h6">
                الوزن: <span>40</span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.cardActions}>
              <div className={classes.iconsBtns}>
                <Button>
                  <FavoriteIcon color="primary" />
                </Button>
                <Button>
                  <DeleteRoundedIcon color="primary" />
                </Button>
              </div>
              <div className={classes.counterBtns}>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CartCard;
