import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PaymentPage = ({ role }) => (
  <>
    <Helmet>
      <title>Payment</title>
    </Helmet>
    <p>Hi {role},Welcome to PaymentPage </p>
  </>
);

PaymentPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default PaymentPage;
