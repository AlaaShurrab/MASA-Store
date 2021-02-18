import { useEffect, useState } from 'react';
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
          setData(dataFormatter(favorite, favoriteIds, cartIds, true));
        }
      }
    };
    dataCollector();
  }, [userData]);

  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <CardContainer
        userData={userData}
        role={type}
        data={data}
        pageTitle="قائمة الرغبات"
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
