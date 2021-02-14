import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const AdminHomePage = ({ role }) => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <p>Hi {role},Welcome to Dashboard </p>
  </>
);

AdminHomePage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default AdminHomePage;
