import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
      // width: (props) => (props.type === 'admin' ? '10%' : '40%'),
    },
  },
  sectionSearch: {
    marginTop: '-10px',
    borderRadius: '50px',
    border: 'solid #E24928 1px',
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    position: 'relative',
    left: '100px',
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
  avatar: {
    width: '50px',
    height: '50px',
  },
  sectionSelect: {
    borderRadius: '50px',
    border: 'solid #E24928 1px',
  },
}));

export default function PrimarySearchAppBar(props) {
  const { type } = props;
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [section, setSection] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isUserMenuOpen = Boolean(userAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuOpen = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSectionChange = (event) => {
    const { value } = event.target;
    setSection(value);
  };

  const preventDefault = (event) => event.preventDefault();

  const menuUserId = 'logged-in-user-account-menu';
  const renderUserMenu = (
    <Menu
      anchorEl={userAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuUserId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isUserMenuOpen}
      onClose={handleUserMenuClose}
    >
      <MenuItem onClick={handleUserMenuClose}>الحساب</MenuItem>
      <MenuItem onClick={handleUserMenuClose}>طلباتي</MenuItem>
      <MenuItem onClick={handleUserMenuClose} style={{ color: '#3699FF' }}>
        تسجيل الخروج
      </MenuItem>
    </Menu>
  );

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
          <div style={{ display: 'flex', width: '80%' }}>
            <div
              className={
                type === 'admin' ? classes.sectionSearch : classes.search
              }
            >
              <div className={classes.searchIcon}>
                <SearchIcon color="primary" />
              </div>
              <InputBase
                placeholder="ابحث عن أي منتج"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {type === 'admin' && (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  فئة البحث
                </InputLabel>
                <Select
                  className={classes.sectionSelect}
                  native
                  value={section}
                  onChange={handleSectionChange}
                  label="فئة البحث"
                >
                  <option aria-label="None" value="" />
                  <option value="الطلبات">الطلبات</option>
                  <option value={20}>المنتجات</option>
                  <option value={30}>العملاء</option>
                </Select>
              </FormControl>
            )}
            <div className={classes.links}>
              <Link
                href={type !== 'admin' ? '#' : '#'}
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                {type !== 'admin' ? 'أزياء' : 'الرئيسية'}
              </Link>
              <Link
                href={type !== 'admin' ? '#' : '#'}
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                {type !== 'admin' ? 'إلكترونيات' : 'الطلبات'}
              </Link>
              <Link
                href={type !== 'admin' ? '#' : '#'}
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                {type !== 'admin' ? 'ساعات' : 'المنتجات'}
              </Link>
              <Link
                href={type !== 'admin' ? '#' : '#'}
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                {type !== 'admin' ? 'حقائب وأحذية' : 'إضافة منتج'}
              </Link>
              <Link
                href={type !== 'admin' ? '#' : '#'}
                onClick={preventDefault}
                color="textPrimary"
                variant="h6"
              >
                {type !== 'admin' ? 'صحة' : 'العملاء'}
              </Link>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {type === 'admin' ? (
              <div>
                <Typography color="textPrimary" variant="h6">
                  أسامة
                </Typography>

                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                  className={classes.avatar}
                />
              </div>
            ) : type === 'user' ? (
              <IconButton
                edge="end"
                aria-label="account of current"
                aria-controls={menuUserId}
                aria-haspopup="true"
                onClick={handleUserMenuOpen}
                className={classes.accountIcon}
              >
                <ExpandMoreIcon />
                <Typography color="textPrimary" variant="h6">
                  أسامة
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                  className={classes.avatar}
                />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className={classes.accountIcon}
              >
                <ExpandMoreIcon />
                <Typography color="textPrimary" variant="h6">
                  الحساب
                </Typography>

                <AccountCircle style={{ fontSize: '40' }} />
              </IconButton>
            )}
            {type !== 'admin' && (
              <div>
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
            )}
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
      {renderUserMenu}
      {renderMenu}
    </div>
  );
}
