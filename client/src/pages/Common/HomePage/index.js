import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

const HomePage = ({ type, userData }) => {
  const [data, setDate] = useState([]);
  const [trendingData, setTrendingData] = useState('');
  const [ratingData, setRatingData] = useState('');

  const dataCollector = async () => {
    if (userData) {
      const { favoriteIds, cartIds } = userData;
      if (favoriteIds && cartIds) {
        const {
          data: { data: raring },
        } = await axios('/api/v1/products/top-rated', {});
        setRatingData(dataFormatter(raring.slice(0, 4), favoriteIds, cartIds));

        const {
          data: { data: trending },
        } = await axios('/api/v1/products/trending', {});
        setTrendingData(
          dataFormatter(trending.slice(0, 4), favoriteIds, cartIds)
        );

        const {
          data: { data: allProducts },
        } = await axios('/api/v1/products', {});
        setDate(dataFormatter(allProducts, favoriteIds, cartIds));
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
      {ratingData ? (
        <CardContainer
          userData={userData}
          role={type}
          data={ratingData}
          pageTitle="الأعلى تقييماً"
          pageTag="top-rated"
        />
      ) : null}
      {trendingData ? (
        <CardContainer
          userData={userData}
          role={type}
          data={trendingData}
          pageTitle="الأكثر مبيعاً"
          pageTag="trending"
        />
      ) : null}
      {data ? (
        <CardContainer
          userData={userData}
          role={type}
          data={data}
          pageTitle="المزيد من المنتجات"
        />
      ) : (
        <h1> لا يوجد منتجات</h1>
      )}
    </>
  );
};

HomePage.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object,
};

HomePage.defaultProps = {
  userData: {},
};

export default HomePage;
