import { Helmet } from 'react-helmet';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { ButtonComponent } from '../../../component';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <CssBaseline />

      <div>
        <AccountBoxRoundedIcon />
        <Typography>حسابي</Typography>
      </div>

      <form className={classes.form}>
        <div className="firstDiv">
          <Typography color="primary" variant="body2">
            معلوماتي الشخصية
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                name="firstName"
                variant="outlined"
                label=" الأسم الأول "
                type="text"
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                label="الأسم الثاني "
                type="text"
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                label="رابط الصورة الشخصية "
                name="الصورة الشخصية "
                fullWidth
              />
              <Grid item xs={12} sm={6} md={8}>
                <Link to="Email" variant="body">
                  البريد الالكتروني
                </Link>
              </Grid>
            </Grid>
            <Avatar />
          </Grid>
        </div>

        <>
          <Typography variant="h6" color="primary" gutterBottom>
            معلومات الدفع
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="cardName"
                label="الاسم علي البطاقة"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="cardNumber"
                label="رقم البطاقة "
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="expDate"
                label="تاريخ الإنتهاء"
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
          <Typography variant="h6" color="primary" gutterBottom>
            عنواني
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="city"
                label="المدينة"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="shipping_address1"
                label="العنوان الأول"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                variant="outlined"
                required
                id="shipping_address2"
                label="العنوان الثاني "
                fullWidth
                autoFocus
              />
            </Grid>
          </Grid>
        </>
      </form>
      <ButtonComponent text="تحديث" color="primary" />
    </>
  );
};

export default ProfilePage;
