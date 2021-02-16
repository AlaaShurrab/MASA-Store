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
    marginTop: theme.spacing(6),
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
  iconLock: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(16),
  },
}));

const SignUpPage = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [emailValidator, setEmailValidator] = useState('');
  const [passwordValidator, setPasswordValidator] = useState('');
  const [firstNameValidator, setFirstName] = useState('');
  const [lastNameValidator, setLastName] = useState('');
  const [confirmPasswordValidator, setConfirmPasswordValidator] = useState('');
  const classes = useStyles();

  const handleChangInput = (e, type) => {
    if (type === 'firstName') {
      // eslint-disable-next-line no-useless-escape
      if (e.target.value.length < 3) {
        setState({
          ...state,
          firstName: '',
        });
        return setFirstName('يجب أن يحتوي الاسم علي 3 أحرف علي الأقل ');
      }
      setFirstName('');
    }
    if (type === 'lastName') {
      // eslint-disable-next-line no-useless-escape
      if (e.target.value.length < 3) {
        setState({
          ...state,
          lastName: '',
        });
        return setLastName('يجب أن يحتوي الاسم علي 3 أحرف علي الأقل ');
      }
      setLastName('');
    }
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
    if (type === 'confirmPassword') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(e.target.value)) {
        setState({
          ...state,
          confirmPassword: '',
        });
        return setConfirmPasswordValidator(
          'يجب أن تحتوي كلمة المرور على 8 أحرف ، وعلى الأقل أحرف كبيرة وصغيرة ورقم وحرف خاصالايميل يجب ان يكون بالصيغة الصحيحة '
        );
      }
      setConfirmPasswordValidator('');
    }
    return setState({
      ...state,
      [type]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, firstName, lastName } = state;
    if (password !== confirmPassword) {
      return setConfirmPasswordValidator('كلمات المرور غير متطابقة!');
    }
    if (email && password && confirmPassword) {
      axios
        .post('api/v1/signup', {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
        })
        .then((res) => {
          props.setType(res.data.clientData.role);
        })
        .then(() => {
          history.push('/');
        })
        .catch(() =>
          setConfirmPasswordValidator(
            'الرجاء التأكد من كلمة المرور والبريد الإلكتروني *'
          )
        );
    }
    return setConfirmPasswordValidator('');
  };

  return (
    <>
      <Helmet>
        <title>انشاء حساب</title>
      </Helmet>
      <CssBaseline />
      <Container component="main" className={classes.container}>
        <Grid>
          <div className={classes.paper}>
            <div className={classes.iconLock}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                إنشاء حساب
              </Typography>
            </div>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={5}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label=" الأسم الأول "
                    type="text"
                    autoFocus
                    helperText={firstNameValidator}
                    onChange={(e) => handleChangInput(e, 'firstName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <TextField
                    name="lastName"
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="الأسم الثاني "
                    type="text"
                    autoFocus
                    helperText={lastNameValidator}
                    onChange={(e) => handleChangInput(e, 'lastName')}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="البريد الإلكتروني "
                    name="email"
                    helperText={emailValidator}
                    onChange={(e) => handleChangInput(e, 'email')}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="كلمة المرور"
                    type="password"
                    id="password"
                    helperText={passwordValidator}
                    onChange={(e) => handleChangInput(e, 'password')}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label=" تأكيد كلمة المرور"
                    type="password"
                    id="confirmPassword"
                    helperText={confirmPasswordValidator}
                    onChange={(e) => handleChangInput(e, 'confirmPassword')}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                  >
                    إنشاء حساب
                  </Button>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item>
                  <Link to="/sign-in" variant="body2">
                    تسجيل الدخول
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={4}>
            <Copyright />
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Container>
    </>
  );
};

SignUpPage.propTypes = {
  setType: PropTypes.func.isRequired,
};
export default SignUpPage;
