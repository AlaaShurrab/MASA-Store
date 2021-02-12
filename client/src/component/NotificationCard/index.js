import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 400,
  },
  details: {
    display: 'flex',
    width: 190,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
    height: 'Auto',
    borderRadius: 50,
    margin: 5,
  },
  product: {
    width: 100,
    height: 'Auto',
    borderRadius: 20,
    margin: 5,
  },
  time: {
    margin: 0,
    fontSize: 12,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    width: 190,
    minWidth: 190,
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function NotificationCard(props) {
  const { orderDate, productName, userName, productImg, userImg } = props;
  const date1 = Date.now();
  const hours = Math.floor(Math.abs(date1 - orderDate) / 36e5);
  const days = Math.floor(Math.abs(date1 - orderDate) / (36e5 * 24));
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={userImg}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {userName.substring(0, 20)}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ثم شراء:{productName.substring(0, 20)}
          </Typography>
          <p className={classes.time}>
            {days ? `${days} days` : `${hours} hours`}
          </p>
        </CardContent>
      </div>
      <CardMedia
        className={classes.product}
        image={productImg}
        title="Live from space album cover"
      />
    </Card>
  );
}

NotificationCard.propTypes = {
  userName: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  orderDate: PropTypes.number.isRequired,
};
