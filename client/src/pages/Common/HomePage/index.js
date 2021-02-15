import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HomePage = ({ type }) => (
  // console.log(location.search);
  <>
    <Helmet>
      <title>Masa Market</title>
    </Helmet>
    <p>Hi ,Welcome to HomePage {type}</p>
  </>
);

HomePage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HomePage;
