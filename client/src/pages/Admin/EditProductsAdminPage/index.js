import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const EditProductsAdminPage = ({ type }) => {
  const { productId } = useParams();
  return (
    <>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>
      <p>
        Hi {type},Welcome to Edit Product {productId} Admin Page{' '}
      </p>
    </>
  );
};

EditProductsAdminPage.propTypes = {
  type: PropTypes.string.isRequired,
};
export default EditProductsAdminPage;
