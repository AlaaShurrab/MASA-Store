import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Loader(props) {
  const { message } = props;
  return (
    <div className="container">
      <Typography color="textSecondary" style={{ margin: 'auto' }}>
        {message}
      </Typography>
      <div className="loader" />
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: '',
};

export default Loader;
