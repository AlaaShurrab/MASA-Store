import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const FavoritePage = ({ role }) => (
  <>
    <Helmet>
      <title>Favorite</title>
    </Helmet>
    <p>Hi {role},Welcome to FavoritePage </p>
  </>
);

FavoritePage.propTypes = {
  role: PropTypes.string.isRequired,
};
export default FavoritePage;
