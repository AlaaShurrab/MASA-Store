import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HomePage = ({ role }) => {
  console.log(location.search);
  return (
    <>
      <Helmet>
        <title>Masa Market</title>
      </Helmet>
      <p>Hi ,Welcome to HomePage {role}</p>
    </>
  );
};

export default HomePage;
