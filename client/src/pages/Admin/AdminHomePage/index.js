import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const AdminHomePage = ({ type }) => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <p>Hi {type},Welcome to Dashboard </p>
  </>
);

AdminHomePage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AdminHomePage;
