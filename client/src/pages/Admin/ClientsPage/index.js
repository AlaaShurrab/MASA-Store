import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ClientsPage = ({ role }) => (
  <>
    <Helmet>
      <title>Clients</title>
    </Helmet>
    <p>Hi +{role}+,Welcome to Clients </p>
  </>
);

ClientsPage.propTypes = {
  role: PropTypes.string.isRequired,
};
export default ClientsPage;
