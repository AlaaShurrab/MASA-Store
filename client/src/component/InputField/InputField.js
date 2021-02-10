import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';

const useStyles = makeStyles({
  large: {
    width: '96%',
  },
  small: {
    width: '46%',
  },
  medium: {
    width: '68%',
  },
});

function InputField({ className, size, multiline, ...props }) {
  const classes = useStyles();

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EditIcon style={{ color: '#949494' }} />
          </InputAdornment>
        ),
      }}
      {...props}
      multiline={multiline || false}
      style={{ margin: 8 }}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      className={clsx(
        size === 'small'
          ? classes.small
          : size === 'medium'
          ? classes.medium
          : classes.large,
        className
      )}
    />
  );
}

InputField.propTypes = {
  size: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  className: PropTypes.string,
};

InputField.defaultProps = {
  id: 'edit',
  placeholder: '',
  label: '',
  name: '',
  multiline: false,
  className: '',
};

export default InputField;
