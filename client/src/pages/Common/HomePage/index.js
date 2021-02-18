import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
  },
}));

const HomePage = ({ type, userData }) => {
  const classes = useStyles();
  const [data, setDate] = useState([]);
  const [trendingData, setTrendingData] = useState('');
  const [ratingData, setRatingData] = useState('');

  useEffect(() => {
    const dataCollector = async () => {
      if (userData) {
        const { favoriteIds, cartIds } = userData;
        if (favoriteIds && cartIds) {
          const {
            data: { data: topRatedProducts },
          } = await axios('/api/v1/products/top-rated', {});
          setRatingData(
            dataFormatter(topRatedProducts.slice(0, 4), favoriteIds, cartIds)
          );
          const {
            data: { data: trendyProducts },
          } = await axios('/api/v1/products/trending', {});
          setTrendingData(
            dataFormatter(trendyProducts.slice(0, 4), favoriteIds, cartIds)
          );
          const {
            data: { data: allProducts },
          } = await axios('/api/v1/products', {});
          setDate(dataFormatter(allProducts, favoriteIds, cartIds));
        } else {
          const {
            data: { data: topRatedProducts },
          } = await axios('/api/v1/products/top-rated', {});
          setRatingData(dataFormatter(topRatedProducts.slice(0, 4), [], []));
          const {
            data: { data: trendyProducts },
          } = await axios('/api/v1/products/trending', {});
          setTrendingData(dataFormatter(trendyProducts.slice(0, 4), [], []));
          const {
            data: { data: allProducts },
          } = await axios('/api/v1/products', {});
          setDate(dataFormatter(allProducts, [], []));
        }
      }
    };
    dataCollector();
  }, [userData]);

  return (
    <>
      <div className={classes.paper}>
        <Helmet>
          <title>ماسا | الرئيسية</title>
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
          <h4> لا يوجد منتجات</h4>
        )}
      </div>
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
