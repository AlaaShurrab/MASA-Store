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
import { PropTypes } from 'prop-types';
import { ButtonComponent } from '../../../component';

import profile from '../../../assets/profile.svg';

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
  emailProfil: {
    marginTop: '20px',
  },
}));

const ProfilePage = ({ userData }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (Object.keys(userData.profileData).length !== 0) {
      setDetails(userData.profileData);
    }
  }, [userData.profileData]);
  console.log(userData.profileData.first_name);
  const classes = useStyles();
  console.log(Object.keys(userData.profileData).length !== 0);
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
                  />
                </Grid>
              </Grid>
              <Grid className={classes.emailProfil} container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    variant="outlined"
                    defaultValue={userData.profileData.avatar}
                    required
                    label="رابط الصورة الشخصية "
                    name="الصورة الشخصية "
                    fullWidth
                  />
                  <div className={classes.emailDiv}>
                    <Typography className={classes.mtb20} variant="h6">
                      البريد الالكتروني
                    </Typography>
                    <Link to="Email"> {userData.profileData.email}</Link>
                  </div>
                </Grid>
                <Grid tem xs={12} sm={6} md={4}>
                  <div className={classes.profilePhoto}>
                    <Avatar
                      alt="profile"
                      src={profile}
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
                    variant="outlined"
                    required
                    id="cardName"
                    defaultValue={userData.profileData.payment_card_name}
                    label="الاسم علي البطاقة"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    required
                    id="cardNumber"
                    defaultValue={userData.profileData.payment_card_number}
                    label="رقم البطاقة "
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    required
                    id="expDate"
                    defaultValue={userData.profileData.payment_card_expire_date}
                    label="تاريخ الإنتهاء"
                    fullWidth
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
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.city}
                    id="city"
                    label="المدينة"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.shipping_address1}
                    id="shipping_address1"
                    label="العنوان الأول"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    variant="outlined"
                    required
                    defaultValue={userData.profileData.shipping_address2}
                    id="shipping_address2"
                    label="العنوان الثاني "
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
            <ButtonComponent
              className={classes.mtb20}
              text="تحديث"
              color="primary"
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
ProfilePage.propTypes = {
  profileData: PropTypes.shape({
    first_name: PropTypes.string,
  }).isRequired,
};

export default ProfilePage;
