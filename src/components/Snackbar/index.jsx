import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material/react-snackbar';
import { FaTimes } from 'react-icons/fa';

import hideSnackbar from 'store/actions/snackbar/hideSnackbar';

import StyledSnackbar from './styles';

function CustomSnackbar({ message, timeout, snackbarTheme = 'primary' }) {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <StyledSnackbar snackbarTheme={snackbarTheme}>
      <Snackbar
        message={message}
        actionText={(<FaTimes />)}
        timeoutMs={timeout}
        onClose={handleOnClose}
      />
    </StyledSnackbar>
  );
}

export default CustomSnackbar;
