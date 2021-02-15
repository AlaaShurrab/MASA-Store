import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ProfilePage = ({ type }) => (
  <>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <p>Hi {type},Welcome to ProfilePage </p>
  </>
);

ProfilePage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProfilePage;
