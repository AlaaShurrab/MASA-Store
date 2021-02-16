import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../../assets/sign-in.svg';

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
  image: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
  },
}));

const SignInPage = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [emailValidator, setEmailValidator] = useState('');
  const [passwordValidator, setPasswordValidator] = useState('');
  const classes = useStyles();

  const handleChangInput = (e, type) => {
    if (type === 'email') {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if (!emailRegex.test(e.target.value)) {
        setState({
          ...state,
          email: '',
        });
        return setEmailValidator('الايميل يجب ان يكون بالصيغة الصحيحة ');
      }
      setEmailValidator('');
    }
    if (type === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(e.target.value)) {
        setState({
          ...state,
          password: '',
        });
        return setPasswordValidator(
          'يجب أن تحتوي كلمة المرور على 8 أحرف ، وعلى الأقل أحرف كبيرة وصغيرة ورقم وحرف خاصالايميل يجب ان يكون بالصيغة الصحيحة '
        );
      }
      setPasswordValidator('');
    }
    return setState({
      ...state,
      [type]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (email && password) {
      axios
        .post('api/v1/signin', { email, password })
        .then((res) => {
          props.setType(res.data.clientData.role);
        })
        .then(() => history.push('/'))
        .catch(() =>
          setPasswordValidator(
            'الرجاء التأكد من كلمة المرور والبريد الإلكتروني *'
          )
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>تسجيل الدخول</title>
      </Helmet>

      <Container component="main" className={classes.container}>
        <Grid>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              تسجيل الدخول
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="البريد الﻹلكتروني"
                name="email"
                autoFocus
                helperText={emailValidator}
                onChange={(e) => handleChangInput(e, 'email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة المرور"
                type="password"
                id="password"
                helperText={passwordValidator}
                onChange={(e) => handleChangInput(e, 'password')}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                تسجيل الدخول
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/sign-up" variant="body2">
                    ليس لديك حساب ؟ سجل الآن
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Container>
    </>
  );
};
SignInPage.propTypes = {
  setType: PropTypes.func.isRequired,
};

export default SignInPage;
