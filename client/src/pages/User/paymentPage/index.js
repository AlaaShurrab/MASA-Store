import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PaymentPage = ({ type }) => (
  <>
    <Helmet>
      <title>Payment</title>
    </Helmet>
    <p>Hi {type},Welcome to PaymentPage </p>
  </>
);

PaymentPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PaymentPage;
