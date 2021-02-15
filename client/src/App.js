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
  const [userData, setData] = useState({
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
        setData({
          cartProducts: [],
          favoriteData: [],
          orderData: [],
          profileData: [],
        });
      } else {
        setType(response.data.role);
        setData(response.data);
      }
    };
    fetchUserData();
    return () => {
      source.cancel('Cancelling in request');
    };
  }, [type]);

  switch (type) {
    case 'user':
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Header type="user" userData={userData} />
            <Switch>
              <Route exact path="/">
                <HomePage type={type} userData={userData} />
              </Route>
              <Route exact path="/products/:category">
                <CategoryProductPage type={type} userData={userData} />
              </Route>
              <Route exact path="/product/:productId">
                <ProductDetailsPage type={type} userData={userData} />
              </Route>
              <Route exact path="/profile">
                <ProfilePage type={type} userData={userData} />
              </Route>
              <Route exact path="/favorite">
                <FavoritePage type={type} userData={userData} />
              </Route>
              <Route exact path="/payment">
                <PaymentPage type={type} userData={userData} />
              </Route>
              <Route exact path="/order">
                <OrderPage type={type} userData={userData} />
              </Route>
              <Route exact path="/cart">
                <CartPage type={type} userData={userData} />
              </Route>
              <Route>
                <NotFoundPage type={type} />
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
                <AdminHomePage type={type} />
              </Route>
              <Route exact path="/admin/products">
                <ProductsAdminPage type={type} />
              </Route>
              <Route exact path="/admin/add-product/:productId">
                <AddProductsAdminPage type={type} />
              </Route>
              <Route exact path="/admin/orders">
                <OrdersPage type={type} />
              </Route>
              <Route exact path="/admin/clients">
                <ClientsPage type={type} />
              </Route>
              <Route exact path="/admin/edit-product/:productId">
                <EditProductsAdminPage type={type} />
              </Route>
              <Route>
                <NotFoundPage type={type} />
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
                <HomePage />
                <Footer />
              </Route>
              <Route exact path="/products/:category">
                <Header type="guest" userData={userData} />
                <CategoryProductPage type={type} userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/search">
                <Header type="guest" userData={userData} />
                <SearchPage type={type} userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/sign-in">
                <SignInPage setType={setType} setData={setData} />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage setType={setType} setData={setData} />
              </Route>
              <Route exact path="/product/:productId">
                <Header type="guest" userData={userData} />
                <ProductDetailsPage type={type} userData={userData} />
                <Footer />
              </Route>
              <Route>
                <Header type="guest" userData={userData} />
                <NotFoundPage type={type} />
                <Footer />
              </Route>
            </Switch>
          </ThemeProvider>
        </StylesProvider>
      );
  }
};

export default App;
