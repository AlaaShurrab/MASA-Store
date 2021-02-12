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

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const [role, setRole] = useState('guest');
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
        setRole('guest');
        setData({
          cartProducts: [],
          favoriteData: [],
          orderData: [],
          profileData: [],
        });
      } else {
        setRole(response.data.role);
        setData(response.data);
      }
    };
    fetchUserData();
    return () => {
      source.cancel('Cancelling in request');
    };
  }, []);

  switch (role) {
    case 'user':
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <HomePage role={role} userData={userData} />
              </Route>
              <Route exact path="/products/:category">
                <CategoryProductPage role={role} userData={userData} />
              </Route>
              <Route exact path="/product/:productId">
                <ProductDetailsPage role={role} userData={userData} />
              </Route>
              <Route exact path="/profile">
                <ProfilePage role={role} userData={userData} />
              </Route>
              <Route exact path="/favorite">
                <FavoritePage role={role} userData={userData} />
              </Route>
              <Route exact path="/payment">
                <PaymentPage role={role} userData={userData} />
              </Route>
              <Route exact path="/order">
                <OrderPage role={role} userData={userData} />
              </Route>
              <Route exact path="/cart">
                <CartPage role={role} userData={userData} />
              </Route>
              <Route>
                <NotFoundPage role={role} />
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
            <Switch>
              <Route exact path="/admin">
                <AdminHomePage role={role} />
              </Route>
              <Route exact path="/admin/products">
                <ProductsAdminPage role={role} />
              </Route>
              <Route exact path="/admin/add-product/:productId">
                <AddProductsAdminPage role={role} />
              </Route>
              <Route exact path="/admin/orders">
                <OrdersPage role={role} />
              </Route>
              <Route exact path="/admin/clients">
                <ClientsPage role={role} />
              </Route>
              <Route exact path="/admin/edit-product/:productId">
                <EditProductsAdminPage role={role} />
              </Route>
              <Route>
                <NotFoundPage role={role} />
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
                <HomePage role={role} userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/products/:category">
                <CategoryProductPage role={role} userData={userData} />
                <Footer />
              </Route>
              <Route exact path="/sign-in">
                <SignInPage setRole={setRole} setData={setData} />
                <Footer />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage setRole={setRole} setData={setData} />
                <Footer />
              </Route>
              <Route exact path="/product/:productId">
                <ProductDetailsPage role={role} userData={userData} />
                <Footer />
              </Route>
              <Route>
                <NotFoundPage role={role} />
                <Footer />
              </Route>
            </Switch>
          </ThemeProvider>
        </StylesProvider>
      );
  }
};

export default App;
