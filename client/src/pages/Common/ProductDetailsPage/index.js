import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ type }) => {
  const { productID } = useParams();
  return (
    <>
      <Helmet>
        <title>category</title>
      </Helmet>
      <p>
        Hi {type},Welcome to {productID} product page
      </p>
    </>
  );
};

ProductDetailsPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductDetailsPage;
