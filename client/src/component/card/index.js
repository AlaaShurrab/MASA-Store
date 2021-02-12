import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.svg';

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
    width: '50%',
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
}));

const CartCard = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: false,
  });

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <img alt="logo" className={classes.cover} src={logo} />
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h5">h1. Heading</Typography>
            <Typography variant="h5">h1. Heading</Typography>
            <div className={classes.cardTypography}>
              <Typography variant="h6">h1. Heading</Typography>
              <Typography variant="h6">h1. Heading</Typography>
              <Typography variant="h6">h1. Heading</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            ساعة مش كلاسك
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CartCard;
