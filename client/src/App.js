// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'jss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import rtl from 'jss-rtl';
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from '@material-ui/core/styles';

import {
  HomePage,
  AddProductsAdminPage,
  CategoryProductPage,
  SearchPage,
  FavoritePage,
  ProductsAdminPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  PaymentPage,
  OrderPage,
  CartPage,
  AdminHomePage,
  OrdersPage,
  ClientsPage,
  EditProductsAdminPage,
  ProductDetailsPage,
  NotFoundPage,
} from './pages';
import theme from './component/theme/theme';
import { Footer } from './component';
import Header from './component/Header';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const [type, setType] = useState('guest');
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({
    cartProducts: [],
    favoriteData: [],
    orderData: [],
    profileData: [],
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchUserData = async () => {
      const { data: response } = await axios('/api/v1/isAuth', {
        cancelToken: source.token,
      });
      if (response.status !== 200) {
        setType('guest');
        setUserData({
          cartProducts: [],
          favoriteData: [],
          orderData: [],
          profileData: [],
        });
      } else {
        const favoriteIds = response.data.favoriteData.map(
          (item) => item.product_id
        );
        const cartIds = response.data.cartProducts.map(
          (item) => item.product_id
        );
        setType(response.data.role);
        setUserData({ ...response.data, favoriteIds, cartIds });
      }
    };
    fetchUserData();
    return () => {
      source.cancel('Cancelling in request');
    };
  }, [type]);

  // setUserData({});

  switch (type) {
    case 'user':
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Header type="user" userData={userData} />
            <Switch>
              <Route exact path="/">
                <HomePage type="user" userData={userData} />
              </Route>
              <Route exact path="/products/:category">
                <CategoryProductPage type="user" userData={userData} />
              </Route>
              <Route exact path="/product/:productId">
                <ProductDetailsPage type="user" userData={userData} />
              </Route>
              <Route exact path="/search">
                <SearchPage type="user" userData={userData} />
              </Route>
              <Route exact path="/profile">
                <ProfilePage type="user" userData={userData} />
              </Route>
              <Route exact path="/favorite">
                <FavoritePage type="user" userData={userData} />
              </Route>
              <Route exact path="/payment">
                <PaymentPage type="user" userData={userData} />
              </Route>
              <Route exact path="/order">
                <OrderPage type="user" userData={userData} />
              </Route>
              <Route exact path="/cart">
                <CartPage type="user" userData={userData} />
              </Route>
              <Route>
                <NotFoundPage type="user" />
              </Route>
            </Switch>
            <Footer />
          </ThemeProvider>
        </StylesProvider>
      );

    case 'admin':
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Header type="admin" userData={userData} />
            <Switch>
              <Route exact path="/admin">
                <AdminHomePage type="admin" />
              </Route>
              <Route exact path="/admin/products">
                <ProductsAdminPage type="admin" />
              </Route>
              <Route exact path="/admin/add-product/:productId">
                <AddProductsAdminPage type="admin" />
              </Route>
              <Route exact path="/admin/orders">
                <OrdersPage type="admin" />
              </Route>
              <Route exact path="/admin/clients">
                <ClientsPage type="admin" />
              </Route>
              <Route exact path="/admin/edit-product/:productId">
                <EditProductsAdminPage type="admin" />
              </Route>
              <Route>
                <NotFoundPage type="admin" />
              </Route>
            </Switch>
            <Footer type="admin" />
          </ThemeProvider>
        </StylesProvider>
      );
    default:
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <Header type="guest" userData={userData} />
                <HomePage type="guest" />
                <Footer />
              </Route>
              <Route exact path="/products/:category">
                <Header type="guest" userData={userData} />
                <CategoryProductPage type="guest" userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/search">
                <Header type="guest" userData={userData} />
                <SearchPage type="guest" userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/sign-in">
                <SignInPage setType={setType} />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage setType={setType} />
              </Route>
              <Route exact path="/product/:productId">
                <Header type="guest" userData={userData} />
                <ProductDetailsPage type="guest" userData={userData} />
                <Footer />
              </Route>
              <Route>
                <Header type="guest" userData={userData} />
                <NotFoundPage type="guest" />
                <Footer />
              </Route>
            </Switch>
          </ThemeProvider>
        </StylesProvider>
      );
  }
};

export default App;
