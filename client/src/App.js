import React, { useState } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';

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
  NotFoundPage,
} from './pages'
import {Header,Footer} from './component'

function App() {
  const [role, setRole] = useState('common');
  const [userData, setData] = useState({});
  // const [cart, setCart] = useState([]);
  // const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
      <Header role={role} userData={userData} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products/:category">
          <CategoryProductPage Role={role} />
        </Route>
        <Route exact path="/sign-in">
          <SignInPage setRole={setRole} setData={setData} />
        </Route>
        <Route exact path="/sign-up">
          <SignUpPage />
        </Route>
        {role!=="Buyer"?<Redirect to="/sign-in" />:<>
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
        </>}Order
        {role!=="Admin"?<Redirect to="/" />:<>
        <Route exact path="/admin/products">
          <ProductsAdminPage role={role} />
        </Route>
        <Route exact path="/admin/addProduct">
          <AddProductsAdminPage role={role} />
        </Route>
        </>}
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer role={role} />
    </div>
  );
}

export default App;
