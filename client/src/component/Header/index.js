import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Link, useLocation, useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import clsx from 'clsx';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: 'secondary',
  },

  appBarContainer: {
    height: '80px',
    [theme.breakpoints.up('md')]: {
      height: '125px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: '40px',
    marginTop: '20px',
    marginLeft: '-8px',

    [theme.breakpoints.up('sm')]: {
      marginTop: '20px',
      width: '50px',
      marginLeft: '-5px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100px',
      display: 'block',
      marginTop: '15px',
      marginLeft: '15vw',
    },
  },
  search: {
    position: 'absolute',

    left: '50%',
    webkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    marginTop: '10px',
    borderRadius: '50px',
    outline: 'none',
    border: 'solid #E24928 1px',
    backgroundColor: 'white',
    width: '65%',
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      marginTop: '6px',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
      marginTop: '-10px',
    },
  },
  sectionSearch: {
    backgroundColor: 'white',
    borderRadius: '50px',
    border: 'solid #E24928 1px',
    width: '50%',
    height: '5vh',
    marginTop: '35px',
    marginLeft: '0',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
      marginTop: '0',
      marginLeft: '100px',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
      marginLeft: '10px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '0',
      marginLeft: '100px',
    },
    position: 'absolute',
    top: '20px',
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
  searchButton: {
    paddingRight: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '50px',
    borderRadius: '0px 50px  50px 0px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    background: theme.palette.primary.light,
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
    marginRight: '10px',
  },
  accountIcon: {
    width: '100%',
  },
  appBar: {
    display: 'flex',
  },
  links: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      texDecoration: 'none',
      width: '40%',
      position: 'absolute',
      top: '100px',
      left: '50%',
      webkitTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  },
  avatar: {
    width: '50px',
    height: '50px',
  },
  sectionSelect: {
    borderRadius: '50px',
    position: 'absolute',
    top: '-10px',
    right: '-120px',
  },
  categoryLinksMob: {
    position: 'absolute',
    top: '2px',
    left: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  moreIcon: {
    marginTop: '10px',
    marginRight: '-15px',
    [theme.breakpoints.up('sm')]: {
      marginRight: '0px',
    },
  },

  decoration: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },

  menuLinksMargin: {
    marginRight: '15px',
  },
}));

export default function Header(props) {
  const { type, userData, setType } = props;
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [section, setSection] = React.useState(null);
  const [searchedWord, setSearchedWord] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isUserMenuOpen = Boolean(userAnchorEl);
  const isCategoriesMenuOpen = Boolean(categoryAnchorEl);
  const location = useLocation();
  const history = useHistory();

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

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchedWord(value);
  };

  const handleCartButton = () => {
    // if (type !== 'user') {
    // }
  };

  const handleSearch = () => {
    let url;
    const currentPage = location.pathname.split('/')[2];
    if (searchedWord) {
      if (
        currentPage === 'fashion' ||
        currentPage === 'electronics' ||
        currentPage === 'accessories' ||
        currentPage === 'health'
      ) {
        const category = currentPage;
        url = `/search?category=${category}&word=${searchedWord}`;
      } else {
        url = `/search?&word=${searchedWord}`;
      }
      history.push(url);
    }
  };

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
      <Link to="/profile" className={classes.decoration}>
        <Typography variant="h6">
          <MenuItem onClick={handleUserMenuClose}>الحساب</MenuItem>
        </Typography>
      </Link>
      <Link to="/orders" className={classes.decoration}>
        <Typography variant="h6">
          <MenuItem onClick={handleUserMenuClose}>طلباتي</MenuItem>
        </Typography>
      </Link>
      <Button
        onClick={() =>
          axios.post('/api/v1/signout').then(() => setType('guest'))
        }
        className={classes.decoration}
      >
        <Typography variant="h6" style={{ color: '#3699FF' }}>
          <MenuItem onClick={handleUserMenuClose}>تسجيل الخروج</MenuItem>
        </Typography>
      </Button>
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
      <Link to="/sign-in" className={classes.decoration}>
        <Typography variant="h6" color="primary">
          <MenuItem onClick={handleMenuClose}>تسجيل الدخول</MenuItem>
        </Typography>
      </Link>
      <Divider />
      <Typography
        color="textSecondary"
        style={{ textAlign: 'center', marginTop: '10px' }}
      >
        ليس لديك حساب؟
      </Typography>

      <Link to="/sign-up" className={classes.decoration}>
        <Typography variant="h6">
          <MenuItem onClick={handleMenuClose}>تسجيل الاشتراك</MenuItem>
        </Typography>
      </Link>
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
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/favorite" className={classes.decoration}>
          <IconButton aria-label="show favorites" color="primary">
            <FavoriteBorder />
          </IconButton>
          المفضلات
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/cart" className={classes.decoration}>
          <IconButton aria-label="show cart" color="primary">
            <ShoppingCartIcon />
          </IconButton>
          عربة التسوق
        </Link>
      </MenuItem>

      {type === 'user' ? (
        <MenuItem onClick={handleUserMenuOpen}>
          <IconButton
            aria-label="account of current"
            aria-controls={menuUserId}
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
          <p>الحساب</p>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
          <p>ضيف</p>
        </MenuItem>
      )}
      <Divider />
      <Typography
        style={{
          marginTop: '20px',
          fontWeight: 'bold',
          marginRight: '30px',
        }}
      >
        الفئات
      </Typography>

      <Link
        to={type !== 'admin' ? '/' : '/admin'}
        className={clsx(classes.decoration, classes.menuLinksMargin)}
      >
        <MenuItem
          onClick={handleMobileMenuClose}
          style={{ marginTop: '10px', marginRight: '15px' }}
        >
          الرئيسية
        </MenuItem>
      </Link>
      <Link
        to={type !== 'admin' ? '/products/fashion' : '/admin/orders'}
        className={clsx(classes.decoration, classes.menuLinksMargin)}
      >
        <MenuItem
          onClick={handleMobileMenuClose}
          style={{ marginTop: '5px', marginRight: '15px' }}
        >
          {type !== 'admin' ? 'أزياء' : 'الطلبات'}
        </MenuItem>
      </Link>
      <Link
        to={type !== 'admin' ? '/products/electronics' : '/admin/products'}
        className={clsx(classes.decoration, classes.menuLinksMargin)}
      >
        <MenuItem
          onClick={handleMobileMenuClose}
          style={{ marginTop: '5px', marginRight: '15px' }}
        >
          {type !== 'admin' ? 'إلكترونيات' : 'المنتجات'}
        </MenuItem>
      </Link>
      <Link
        to={type !== 'admin' ? '/products/accessories' : '/admin/add-product'}
        className={clsx(classes.decoration, classes.menuLinksMargin)}
      >
        <MenuItem
          onClick={handleMobileMenuClose}
          style={{ marginTop: '5px', marginRight: '15px' }}
        >
          {type !== 'admin' ? 'حقائب وأحذية' : 'إضافة منتج'}
        </MenuItem>
      </Link>
      <Link
        to={type !== 'admin' ? '/products/health' : '/admin/clients'}
        className={clsx(classes.decoration, classes.menuLinksMargin)}
      >
        <MenuItem
          onClick={handleMobileMenuClose}
          style={{ marginTop: '5px', marginRight: '15px' }}
        >
          {type !== 'admin' ? 'صحة' : 'العملاء'}
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={clsx(classes.grow, classes.appBarContainer)}>
      <AppBar
        position="static"
        style={{ backgroundColor: '#92929230', height: '100%' }}
      >
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
                onChange={handleSearchChange}
                placeholder="البحث"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <div>
                <Button
                  variant="contained"
                  onClick={handleSearch}
                  className={classes.searchButton}
                >
                  بحث
                </Button>
              </div>
              {type === 'admin' && (
                <FormControl
                  variant="outlined"
                  className={classes.sectionSelect}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    فئة البحث
                  </InputLabel>
                  <Select
                    native
                    value={section}
                    onChange={handleSectionChange}
                    label="فئة البحث"
                  >
                    <option aria-label="None" value="" />
                    <option value="الطلبات">الطلبات</option>
                    <option value="المنتجات">المنتجات</option>
                    <option value="العملاء">العملاء</option>
                  </Select>
                </FormControl>
              )}
            </div>
            <div className={classes.links}>
              <Typography variant="h6">
                <Link
                  className={classes.decoration}
                  to={type !== 'admin' ? '/' : '/admin'}
                >
                  الرئيسية
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  className={classes.decoration}
                  to={type !== 'admin' ? '/products/fashion' : '/admin/orders'}
                >
                  {type !== 'admin' ? 'أزياء' : 'الطلبات'}
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  className={classes.decoration}
                  to={
                    type !== 'admin'
                      ? '/products/electronics'
                      : '/admin/products'
                  }
                >
                  {type !== 'admin' ? 'إلكترونيات' : 'المنتجات'}
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  className={classes.decoration}
                  to={
                    type !== 'admin'
                      ? '/products/accessories'
                      : '/admin/add-product'
                  }
                >
                  {type !== 'admin' ? 'حقائب وأحذية' : 'إضافة منتج'}
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  className={classes.decoration}
                  to={type !== 'admin' ? '/products/health' : '/admin/clients'}
                >
                  {type !== 'admin' ? 'صحة' : 'العملاء'}
                </Link>
              </Typography>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {type === 'admin' ? (
              <div>
                <Typography color="textPrimary" variant="h6">
                  {userData.profileData.first_name}
                </Typography>

                <Avatar
                  alt="admin avatar"
                  src={userData.profileData.avatar}
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
                  {userData.profileData.first_name}
                </Typography>
                <Avatar
                  alt="user avatar"
                  src={userData.profileData.avatar}
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
                  ضيف
                </Typography>

                <AccountCircle style={{ fontSize: '40' }} />
              </IconButton>
            )}
            {type !== 'admin' && (
              <div>
                <Link to="/favorite">
                  <IconButton
                    aria-label="show favorites"
                    color="primary"
                    className={classes.buttonIcons}
                  >
                    <FavoriteBorder />
                  </IconButton>
                </Link>
                <Button onClick={handleCartButton}>
                  <Link to="/cart">
                    <IconButton
                      aria-label="show cart"
                      color="primary"
                      className={classes.buttonIcons}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Link>
                </Button>
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
              <MoreIcon className={classes.moreIcon} />
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

Header.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object,
  setType: PropTypes.func.isRequired,
};

const profileData = {
  first_name: 'مستخدم جديد',
  avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
};
Header.defaultProps = {
  userData: [profileData],
};
