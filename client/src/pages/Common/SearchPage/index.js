import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  console.log('............', location);
  return (
    <>
      <Helmet>
        <title>Masa Market</title>
      </Helmet>
      <p>Hi ,Welcome to Search page </p>
    </>
  );
};

export default SearchPage;
