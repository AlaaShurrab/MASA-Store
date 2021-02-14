import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ role }) => {
  const { productID } = useParams();
  return (
    <>
      <Helmet>
        <title>category</title>
      </Helmet>
      <p>
        Hi {role},Welcome to {productID} product page
      </p>
    </>
  );
};

ProductDetailsPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProductDetailsPage;
