import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

const appCategory = [
  'fashion',
  'electronics',
  'accessories',
  'health',
  'trending',
  'top-rated',
];
const CategoryProductPage = ({ role, userData }) => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  const dataCollector = async () => {
    if (userData) {
      const { favoriteData, cartProducts } = userData;
      if (favoriteData && cartProducts) {
        const {
          data: { data: raring },
        } = await axios(`/api/v1/products/${category}`, {});
        setData(dataFormatter(raring, favoriteData, cartProducts));
      }
    }
  };

  useEffect(() => {
    dataCollector();
  }, [userData]);

  if (appCategory.includes(category)) {
    return (
      <>
        <Helmet>
          <title>category</title>
        </Helmet>
        <CardContainer
          userData={userData}
          role={role}
          data={data}
          pageTitle={category}
        />
      </>
    );
  }
  return <Redirect to="/404" />;
};

CategoryProductPage.propTypes = {
  role: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    favoriteData: PropTypes.instanceOf(Array),
    cartProducts: PropTypes.instanceOf(Array),
    profileData: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default CategoryProductPage;
