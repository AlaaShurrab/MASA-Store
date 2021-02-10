import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';

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

function InputField(props) {
  const classes = useStyles();
  const { size, placeholder, label, id } = props;

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EditIcon style={{ color: '#949494' }} />
          </InputAdornment>
        ),
      }}
      id={id}
      label={label}
      placeholder={placeholder}
      style={{ margin: 8 }}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      className={
        size === 'small'
          ? classes.small
          : size === 'medium'
          ? classes.medium
          : classes.large
      }
    />
  );
}

InputField.propTypes = {
  size: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

InputField.defaultProps = {
  id: 'edit',
  label: '',
  placeholder: '',
};

export default InputField;
