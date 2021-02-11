import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const AddProductsAdminPage = ({ role }) => (
  <>
    <Helmet>
      <title>Add product</title>
    </Helmet>
    <p>Hi {role},Welcome to Add product page </p>
  </>
);

AddProductsAdminPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default AddProductsAdminPage;
