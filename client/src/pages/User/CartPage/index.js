import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const CartPage = ({ role }) => (
  <>
    <Helmet>
      <title>cart</title>
    </Helmet>
    <p>Hi {role},Welcome to cart page </p>
  </>
);

CartPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default CartPage;
