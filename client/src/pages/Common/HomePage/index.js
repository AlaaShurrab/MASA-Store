import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HomePage = ({ role }) => (
  <>
    <Helmet>
      <title>Masa Market</title>
    </Helmet>
    <p>Hi {role} ,Welcome to HomePage </p>
  </>
);

HomePage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default HomePage;
