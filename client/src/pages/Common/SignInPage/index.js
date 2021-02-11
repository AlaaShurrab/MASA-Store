import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SignInPage = ({ role }) => (
  <>
    <Helmet>
      <title>signin</title>
    </Helmet>
    <p>Hi {role},Welcome to SignInPage </p>
  </>
);

SignInPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default SignInPage;
