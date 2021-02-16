import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const ProductsAdminPage = ({ type }) => (
  <>
    <Helmet>
      <title>Products</title>
    </Helmet>
    <p>Hi {type},Welcome to ProductsAdminPage </p>
  </>
);

ProductsAdminPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductsAdminPage;
