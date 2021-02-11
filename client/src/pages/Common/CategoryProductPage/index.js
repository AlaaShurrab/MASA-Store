import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const CategoryProductPage = ({ role }) => (
  <>
    <Helmet>
      <title>category</title>
    </Helmet>
    <p>Hi {role},Welcome to product category page </p>
  </>
);

CategoryProductPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default CategoryProductPage;
