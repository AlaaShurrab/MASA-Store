import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SignUpPage = ({ role }) => (
  <>
    <Helmet>
      <title>SignUpPage</title>
    </Helmet>
    <p>Hi {role},Welcome to SignUpPage </p>
  </>
);

SignUpPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default SignUpPage;
