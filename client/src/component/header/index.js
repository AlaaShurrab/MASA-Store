import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: '13vh',
    color: 'secondary',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginTop: '5px',
      marginLeft: '15vw',
    },
  },
  search: {
    position: 'absolute',

    left: '50%',
    webkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    marginTop: '-10px',
    borderRadius: '50px',
    border: 'solid #E24928 1px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
    width: '100%',
  },
  inputInput: {
    marginLeft: '50px',
    marginTop: '8px',
    paddingLeft: '10px',
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      // width: '14%',
      marginRight: '12vw',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonIcons: {
    backgroundColor: '#E0E0E0',
    borderRadius: '5px',
    boxShadow: '-1px 1px 2px rgba(0, 0, 0, 0.25)',
    width: '40px',
    height: '40px',
    // marginTop: '50px',
    // position: 'relative',
    // left: '90px',
    marginRight: '10px',
  },
  accountIcon: {
    width: '100%',

    // position: 'relative',
    // left: '-20px',
    // top: '-20px',
    // // marginTop: '-50px',
    // marginLeft: '-20px',
  },
  appBar: {
    display: 'flex',
  },
  links: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    webkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const preventDefault = (event) => event.preventDefault();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>تسجيل الدخول</MenuItem>
      <p>ليس لديك حساب؟</p>
      <MenuItem onClick={handleMenuClose}>تسجيل الاشتراك</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show favorites" color="primary">
          <FavoriteBorder />
        </IconButton>
        <p>المفضلات</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show cart" color="primary">
          <ShoppingCartIcon />
        </IconButton>
        <p>عربة التسوق</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="black"
        >
          <AccountCircle />
        </IconButton>
        <p>الحساب</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: '#92929230' }}>
        <Toolbar className={classes.appBar}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color="primary" />
              </div>
              <InputBase
                placeholder="ابحث عن منتجك المفضل"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.links}>
              <Link
                href="#"
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                أزياء
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                إلكترونيات
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                ساعات
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                حقائب وأحذية
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                صحة
              </Link>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.accountIcon}
            >
              <ExpandMoreIcon />
              <Typography color="textPrimary" variant="h6" />
              الحساب
              <AccountCircle style={{ fontSize: '40' }} />
            </IconButton>
            <IconButton
              aria-label="show favorites"
              color="primary"
              className={classes.buttonIcons}
            >
              <FavoriteBorder />
            </IconButton>
            <IconButton
              aria-label="show cart"
              color="primary"
              className={classes.buttonIcons}
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
