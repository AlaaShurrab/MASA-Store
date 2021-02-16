import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const FavoritePage = ({ type }) => (
  <>
    <Helmet>
      <title>Favorite</title>
    </Helmet>
    <p>Hi {type},Welcome to FavoritePage </p>
  </>
);

FavoritePage.propTypes = {
  type: PropTypes.string.isRequired,
};
export default FavoritePage;
