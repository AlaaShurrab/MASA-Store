import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const OrdersPage = ({ role }) => (
  <>
    <Helmet>
      <title>Orders</title>
    </Helmet>
    <p>Hi +{role}+,Welcome to Orders </p>
  </>
);

OrdersPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default OrdersPage;
