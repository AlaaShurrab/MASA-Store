import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ type }) => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <p>Hi {type},Welcome to 404 </p>
  </>
);

NotFoundPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default NotFoundPage;
