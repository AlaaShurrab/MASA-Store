import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const AddProductsAdminPage = ({ role }) => {
  const { productId } = useParams();
  return (
    <>
      <Helmet>
        <title>Add product</title>
      </Helmet>
      <p>
        Hi {role},Welcome to Add product {productId} page{' '}
      </p>
    </>
  );
};

AddProductsAdminPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default AddProductsAdminPage;
