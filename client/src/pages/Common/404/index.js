import { Helmet } from 'react-helmet';
import React from 'react';
import Box from '@material-ui/core/Box';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ButtonComponent } from '../../../component';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' جميع الحقوق محفوظة ©  '}
      <Link color="inherit" to="/">
        {' MASA '}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mtb20: {
    margin: '20px',
  },
}));

const NotFoundPage = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/');
  };
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className={classes.paper}>
        <Grid>
          <img
            src="https://st3.depositphotos.com/1006899/14648/i/600/depositphotos_146482703-stock-photo-robot-holding-the-numbers-404.jpg"
            alt="error"
          />
        </Grid>

        <Grid>
          <ButtonComponent
            className={classes.mtb20}
            text="الرجوع"
            color="primary"
            onClick={handleSubmit}
          />
        </Grid>
        <Box mt={4}>
          <Copyright />
        </Box>
      </div>
    </>
  );
};

export default NotFoundPage;
