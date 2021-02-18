import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PaymentPage = ({ type }) => (
  // to reach data console.log(history.location.state.checkedProducts)
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
