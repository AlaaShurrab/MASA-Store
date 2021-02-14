import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ role }) => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <p>Hi {role},Welcome to 404 </p>
  </>
);

NotFoundPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default NotFoundPage;
