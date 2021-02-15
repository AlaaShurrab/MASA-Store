import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ClientsPage = ({ type }) => (
  <>
    <Helmet>
      <title>Clients</title>
    </Helmet>
    <p>Hi {type},Welcome to Clients </p>
  </>
);

ClientsPage.propTypes = {
  type: PropTypes.string.isRequired,
};
export default ClientsPage;
