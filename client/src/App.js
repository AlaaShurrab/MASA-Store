// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'jss';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
  NotFoundPage,
} from './pages';
import theme from './component/theme/theme';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const [role, setRole] = useState('guest');
  const [userData, setData] = useState({});

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
          {role !== 'Buyer' ? (
            <Redirect to="/sign-in" />
          ) : (
            <>
              <Route exact path="/product">
                <SignUpPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage role={role} />
              </Route>
              <Route exact path="/favorite">
                <FavoritePage role={role} />
              </Route>
              <Route exact path="/configuration">
                <PaymentPage role={role} />
              </Route>
              <Route exact path="/Order">
                <OrderPage role={role} />
              </Route>
              <Route exact path="/cart">
                <CartPage role={role} />
              </Route>
            </>
          )}
          Order
          {role !== 'Admin' ? (
            <Redirect to="/404" />
          ) : (
            <>
              <Route exact path="/admin/">
                <AdminHomePage role={role} />
              </Route>
              <Route exact path="/admin/products">
                <ProductsAdminPage role={role} />
              </Route>
              <Route exact path="/admin/addProduct">
                <AddProductsAdminPage role={role} />
              </Route>
              <Route exact path="/admin/orders">
                <OrdersPage role={role} />
              </Route>
              <Route exact path="/admin/clients">
                <ClientsPage role={role} />
              </Route>
              <Route exact path="/admin/edit-product">
                <EditProductsAdminPage role={role} />
              </Route>
            </>
          )}
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
