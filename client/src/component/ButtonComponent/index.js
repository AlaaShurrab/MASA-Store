import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonComponent = ({ text, variant, color }) => {
  const classes = useStyles();

  return (
    <Button variant={variant} color={color}>
      {text}
    </Button>
  );
};
ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
};
ButtonComponent.defaultProps = {
  text: 'سلة',
  variant: 'contained',
  color: 'primary',
};
export default ButtonComponent;
