import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

// eslint-disable-next-line react/prop-types
const HomePage = ({ role, userData }) => {
  const [data, setDate] = useState([]);
  const [trendingData, setTrendingData] = useState('');
  const [ratingData, setRatingData] = useState('');

  const dataCollector = async () => {
    if (userData) {
      const { favoriteData, cartProducts } = userData;
      if (favoriteData && cartProducts) {
        const {
          data: { data: raring },
        } = await axios('/api/v1/products/top-rated', {});
        setRatingData(
          dataFormatter(raring.slice(0, 4), favoriteData, cartProducts)
        );

        const {
          data: { data: trending },
        } = await axios('/api/v1/products/trending', {});
        setTrendingData(
          dataFormatter(trending.slice(0, 4), favoriteData, cartProducts)
        );

        const {
          data: { data: allProducts },
        } = await axios('/api/v1/products', {});
        setDate(dataFormatter(allProducts, favoriteData, cartProducts));
      }
    }
  };

  useEffect(() => {
    dataCollector();
  }, [userData]);

  return (
    <>
      <Helmet>
        <title>Masa Market</title>
      </Helmet>
      <p>Hi {role} ,Welcome to HomePage </p>
      {ratingData ? (
        <CardContainer
          userData={userData}
          role={role}
          data={ratingData}
          pageTitle="top-Rated"
          pageTag="top-rated"
        />
      ) : (
        <h1> no rated products</h1>
      )}
      {trendingData ? (
        <CardContainer
          userData={userData}
          role={role}
          data={trendingData}
          pageTitle="trending"
          pageTag="trending"
        />
      ) : (
        <h1> no trending products</h1>
      )}
      {data ? (
        <CardContainer
          userData={userData}
          role={role}
          data={data}
          pageTitle="حقيبة لابتوب"
        />
      ) : (
        <h1> no data</h1>
      )}
    </>
  );
};

HomePage.propTypes = {
  role: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    favoriteData: PropTypes.instanceOf(Array),
    cartProducts: PropTypes.instanceOf(Array),
    profileData: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default HomePage;
