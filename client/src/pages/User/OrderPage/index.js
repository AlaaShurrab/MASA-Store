import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const OrderPage = ({ type }) => (
  <>
    <Helmet>
      <title>order</title>
    </Helmet>
    <p>Hi {type},Welcome to OrderPage </p>
  </>
);

OrderPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default OrderPage;
