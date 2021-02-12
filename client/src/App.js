// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'jss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const [role, setRole] = useState('user');
  const [userData, setData] = useState({});

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
                <ProductDetailsPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage role={role} />
              </Route>
              <Route exact path="/favorite">
                <FavoritePage role={role} />
              </Route>
              <Route exact path="/payment">
                <PaymentPage role={role} />
              </Route>
              <Route exact path="/order">
                <OrderPage role={role} />
              </Route>
              <Route exact path="/cart">
                <CartPage role={role} />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </StylesProvider>
      );

    case 'admin':
      return (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/admin/">
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
                <NotFoundPage />
              </Route>
            </Switch>
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
              </Route>
              <Route exact path="/products/:category">
                <CategoryProductPage role={role} userData={userData} />
              </Route>
              <Route exact path="/sign-in">
                <SignInPage setRole={setRole} setData={setData} />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage setRole={setRole} setData={setData} />
              </Route>
              <Route exact path="/product/:productId">
                <ProductDetailsPage />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </StylesProvider>
      );
  }
};

export default App;
