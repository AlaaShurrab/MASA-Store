import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const OrderPage = ({ role }) => (
  <>
    <Helmet>
      <title>order</title>
    </Helmet>
    <p>Hi {role},Welcome to OrderPage </p>
  </>
);

OrderPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default OrderPage;
