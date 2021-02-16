import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
  hight: {
    padding: '6px 30px',
  },
}));

const ButtonComponent = ({
  text,
  variant,
  color,
  longButton,
  iconButton,
  outLinedIcon,
  filledIcon,
  ...props
}) => {
  const [state, setState] = useState({
    filled: false,
  });
  const classes = useStyles();
  const changeIcon = () => {
    setState({
      ...state,
      filled: !state.filled,
    });
  };

  return (
    <Button
      variant={variant}
      color={color}
      className={longButton ? classes.hight : null}
      onClick={changeIcon}
      {...props}
    >
      {iconButton ? (state.filled ? filledIcon : outLinedIcon) : text}
    </Button>
  );
};
ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  longButton: PropTypes.bool,
  iconButton: PropTypes.bool,
  outLinedIcon: PropTypes.element,
  filledIcon: PropTypes.element,
};
ButtonComponent.defaultProps = {
  text: 'إضافة إلي السلة',
  variant: 'contained',
  color: 'secondary',
  longButton: false,
  iconButton: false,
  outLinedIcon: <FavoriteBorderIcon color="primary" />,
  filledIcon: <FavoriteIcon color="primary" />,
};
export default ButtonComponent;
