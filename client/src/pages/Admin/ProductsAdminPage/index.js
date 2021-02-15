import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ProductsAdminPage = ({ role }) => (
  <>
    <Helmet>
      <title>Products</title>
    </Helmet>
    <p>Hi +{role}+,Welcome to ProductsAdminPage </p>
  </>
);

ProductsAdminPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProductsAdminPage;
