import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './CardContainer.css';

// eslint-disable-next-line import/no-cycle
import ProductCard from '../ProductCard';
// eslint-disable-next-line import/no-cycle
import { ButtonComponent } from '../index';

const CardContainer = ({ role, data, pageTitle, pageTag, userData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      setOpen(false);
    }
  };

  const deleteFavorite = (id) => {
    try {
      axios({
        method: 'delete',
        url: `/api/v1/favorite/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      setOpen(true);
    }
  };

  const addFavorite = async (id) => {
    try {
      await axios({
        method: 'post',
        url: `/api/v1/favorite/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      setOpen(true);
    }
  };

  const deleteCart = (id) => {
    try {
      axios({
        method: 'delete',
        url: `/api/v1/cart/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: id,
        },
      });
    } catch (error) {
      setOpen(true);
    }
  };

  const addCart = (id) => {
    try {
      axios({
        method: 'post',
        url: `/api/v1/cart/${userData.profileData.id}`,
        headers: {},
        data: {
          productId: id,
          quantity: 1,
        },
      });
    } catch (error) {
      setOpen(true);
    }
  };

  return (
    <div className="card-container">
      <div className="category-name">
        <h1 className="title">{pageTitle}</h1>
        {pageTag === 'top-rated' || pageTag === 'trending' ? (
          <Link to={`/products/${pageTag}`} className="moreBtn">
            <ButtonComponent text="more" iconButton={false} color="primary" />
          </Link>
        ) : null}
        <div className="category-line" />
      </div>
      {data ? (
        data.map((item) => (
          <ProductCard
            key={item.id}
            className="product-card"
            data={item}
            role={role}
            isFavorite={item.isFavorite}
            isCart={item.isCart}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            addCart={addCart}
            deleteCart={deleteCart}
          />
        ))
      ) : (
        <div>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="error"
        >
          يوجد ضغط حالياُ، الرجاء المحاولة مرة أخرى لاحقاً
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

CardContainer.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  pageTag: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

CardContainer.defaultProps = {
  pageTag: 'no tag',
};

export default CardContainer;
