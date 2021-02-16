import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { CardContainer } from '../../../component';
import dataFormatter from '../../../utilities/dataFormatter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = ({ type, userData }) => {
  const [data, setData] = useState([]);

  const query = useQuery();
  const word = query.get('word');
  const category = query.get('category');
  const wordQuery = `word=${word}`;
  const categoryQuery = `&category=${category}`;

  useEffect(() => {
    const dataCollector = async () => {
      if (userData) {
        const { favoriteIds, cartIds } = userData;
        if (favoriteIds && cartIds) {
          const {
            data: { data: searchData },
          } = await axios(
            `/api/v1/product-search/?${word ? wordQuery : ''}${
              category ? categoryQuery : ''
            }`,
            {}
          );
          setData(dataFormatter(searchData, favoriteIds, cartIds));
        }
      }
    };
    dataCollector();
  }, [category, word, userData, wordQuery, categoryQuery]);

  return (
    <>
      <Helmet>
        <title>البحث عن المنتجات</title>
      </Helmet>
      <CardContainer
        userData={userData}
        role={type}
        data={data}
        pageTitle="نتيجة البحث"
      />
    </>
  );
};

SearchPage.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

export default SearchPage;
