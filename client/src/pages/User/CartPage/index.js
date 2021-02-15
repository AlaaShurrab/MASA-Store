import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const CartPage = ({ type }) => (
  <>
    <Helmet>
      <title>cart</title>
    </Helmet>
    <p>Hi {type},Welcome to cart page </p>
  </>
);

CartPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CartPage;
