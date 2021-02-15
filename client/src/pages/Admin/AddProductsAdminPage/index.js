import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const AddProductsAdminPage = ({ type }) => {
  const { productId } = useParams();
  return (
    <>
      <Helmet>
        <title>Add product</title>
      </Helmet>
      <p>
        Hi {type},Welcome to Add product {productId} page{' '}
      </p>
    </>
  );
};

AddProductsAdminPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AddProductsAdminPage;
