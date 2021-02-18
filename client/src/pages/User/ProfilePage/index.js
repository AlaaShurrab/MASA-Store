/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios';
import { ButtonComponent } from '../../../component';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    marginTop: 50,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  mtb20: {
    margin: '20px 0',
  },
  profilePhoto: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    marginTop: '10px',
  },
  emailDiv: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      marginLeft: '40px',
    },
  },
  emailProfile: {
    marginTop: '20px',
  },
}));

const ProfilePage = ({ userData }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    avatar: '',
    paymentCardName: '',
    paymentCardNumber: 0,
    paymentCardExpireDate: 0,
    city: '',
    shippingAddress1: '',
    shippingAddress2: '',
  });
  useEffect(() => {}, [userData.profileData]);

  const handleChangInput = (e, type) => {
    setState({
      ...state,
      [type]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      avatar,
      paymentCardName,
      paymentCardNumber,
      paymentCardExpireDate,
      city,
      shippingAddress1,
      shippingAddress2,
    } = state;
    axios
      .put(`api/v1//profile/${userData.profileData.id}`, {
        firstName,
        lastName,
        avatar,
        shippingAddress1,
        shippingAddress2,
        city,
        paymentCardName,
        paymentCardNumber,
        paymentCardExpireDate,
      })
      // eslint-disable-next-line no-alert
      .then(() => alert('تم تحدث البيانات بنجاح '));
  };

  const classes = useStyles();
  return (
    <>
      {Object.keys(userData.profileData).length !== 0 ? (
        <>
          <Helmet>
            <title>Profile</title>
          </Helmet>
          <Container component="main" className={classes.container}>
            <CssBaseline />

            <div>
              <AccountBoxRoundedIcon className={classes.large} />
              <Typography variant="h5" gutterBottom className={classes.mtb20}>
                حسابي
              </Typography>
            </div>

            <form className={classes.form}>
              <Typography
                className={classes.mtb20}
                variant="h6"
                color="primary"
                gutterBottom
              >
                معلوماتي الشخصية
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    defaultValue={userData.profileData.first_name}
                    name="firstName"
                    variant="outlined"
                    label="الأسم الأول "
                    type="text"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'firstName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    name="lastName"
                    variant="outlined"
                    defaultValue={userData.profileData.last_name}
                    required
                    label="الأسم الثاني "
                    type="text"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'lastName')}
                  />
                </Grid>
              </Grid>
              <Grid className={classes.emailProfile} container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    variant="outlined"
                    defaultValue={userData.profileData.avatar}
                    required
                    label="رابط الصورة الشخصية "
                    name="avatar"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'avatar')}
                  />
                  <div className={classes.emailDiv}>
                    <Typography className={classes.mtb20} variant="h6">
                      البريد الالكتروني
                    </Typography>
                    <Link to="Email"> {userData.profileData.email}</Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className={classes.profilePhoto}>
                    <Avatar
                      alt="profile"
                      src={
                        userData.profileData.avatar
                          ? state.avatar
                          : state.avatar
                      }
                      className={classes.large}
                    />
                  </div>
                </Grid>
              </Grid>
              <Typography
                className={classes.container}
                variant="h6"
                color="primary"
                gutterBottom
              >
                معلومات الدفع
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    name="paymentCardName"
                    variant="outlined"
                    required
                    id="cardName"
                    defaultValue={userData.profileData.payment_card_name}
                    label="الاسم علي البطاقة"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'paymentCardName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    name="paymentCardNumber"
                    required
                    id="cardNumber"
                    defaultValue={userData.profileData.payment_card_number}
                    label="رقم البطاقة "
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'paymentCardNumber')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    required
                    name="paymentCardExpireDate"
                    id="expDate"
                    defaultValue={userData.profileData.payment_card_expire_date}
                    label="تاريخ الإنتهاء"
                    fullWidth
                    onChange={(e) =>
                      handleChangInput(e, 'paymentCardExpireDate')
                    }
                  />
                </Grid>
              </Grid>
              <Typography
                className={classes.mtb20}
                variant="h6"
                color="primary"
                gutterBottom
              >
                عنواني
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    name="city"
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.city}
                    id="city"
                    label="المدينة"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'city')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    name="shippingAddress1"
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.shipping_address1}
                    id="shipping_address1"
                    label="العنوان الأول"
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'shippingAddress1')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    name="shippingAddress2"
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.shipping_address2}
                    id="shipping_address2"
                    label="العنوان الثاني "
                    fullWidth
                    onChange={(e) => handleChangInput(e, 'shippingAddress2')}
                  />
                </Grid>
              </Grid>
            </form>
            <ButtonComponent
              className={classes.mtb20}
              text="تحديث"
              color="primary"
              onClick={handleSubmit}
            />
          </Container>
        </>
      ) : (
        <Container component="main" className={classes.container}>
          <div className={classes.root}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
          </div>
        </Container>
      )}
    </>
  );
};

export default ProfilePage;
