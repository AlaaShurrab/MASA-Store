import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const EditProductsAdminPage = ({ role }) => {
  const { productId } = useParams();
  return (
    <>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>
      <p>
        Hi {role},Welcome to Edit Product {productId} Admin Page{' '}
      </p>
    </>
  );
};

EditProductsAdminPage.propTypes = {
  role: PropTypes.string.isRequired,
};
export default EditProductsAdminPage;
