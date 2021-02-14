import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ProfilePage = ({ role }) => (
  <>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <p>Hi {role},Welcome to ProfilePage </p>
  </>
);

ProfilePage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProfilePage;
