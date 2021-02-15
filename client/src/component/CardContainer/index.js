import React from 'react';
import propTypes from 'prop-types';
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
        {pageTitle === 'top-Rated' || pageTitle === 'trending' ? (
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
          error has ochered in the server , please try again later
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

CardContainer.propTypes = {
  pageTitle: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  data: propTypes.instanceOf(Array).isRequired,
  pageTag: propTypes.string,
  userData: propTypes.shape({
    profileData: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};

CardContainer.defaultProps = {
  pageTag: 'no tag',
};

export default CardContainer;
