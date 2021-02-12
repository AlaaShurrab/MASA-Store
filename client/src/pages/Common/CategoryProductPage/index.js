import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Redirect, useParams } from 'react-router-dom';

const appCategory = [
  'fashion',
  'electronics',
  'accessories',
  'health',
  'trending',
  'top-rated',
];
const CategoryProductPage = ({ role }) => {
  const { category } = useParams();
  if (appCategory.includes(category)) {
    return (
      <>
        <Helmet>
          <title>category</title>
        </Helmet>
        <p>
          Hi {role},Welcome to product {category} page
        </p>
      </>
    );
  }
  return <Redirect to="/404" />;
};

CategoryProductPage.propTypes = {
  role: PropTypes.string.isRequired,
};

export default CategoryProductPage;
