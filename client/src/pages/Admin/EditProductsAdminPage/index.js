import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const EditProductsAdminPage = ({ role }) => (
  <>
    <Helmet>
      <title>Edit Product</title>
    </Helmet>
    <p>Hi +{role}+,Welcome to Edit Products Admin Page </p>
  </>
);

EditProductsAdminPage.propTypes = {
  role: PropTypes.string.isRequired,
};
export default EditProductsAdminPage;
