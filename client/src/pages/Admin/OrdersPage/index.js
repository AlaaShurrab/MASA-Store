import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const OrdersPage = ({ type }) => (
  <>
    <Helmet>
      <title>Orders</title>
    </Helmet>
    <p>Hi {type},Welcome to Orders </p>
  </>
);

OrdersPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default OrdersPage;
