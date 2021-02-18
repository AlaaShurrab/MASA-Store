import { useEffect, useState } from 'react';
// import { Redirect, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

const FavoritePage = ({ type, userData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataCollector = async () => {
      if (userData) {
        const { favoriteIds, cartIds } = userData;
        if (favoriteIds && cartIds) {
          const {
            data: { data: favorite },
          } = await axios(`/api/v1/favorite/${userData.profileData.id}`, {});
          // console.log(favorite);
          setData(dataFormatter(favorite, favoriteIds, cartIds));
        }
      }
    };
    dataCollector();
  }, [userData]);

  // console.log(data);
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <p>Hi {type},Welcome to FavoritePage </p>
      <CardContainer
        userData={userData}
        role={type}
        data={data}
        pageTitle="favoriteIds"
      />
    </>
  );
};

FavoritePage.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

export default FavoritePage;
