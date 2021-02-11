import { createMuiTheme } from '@material-ui/core/styles';

import Globals from './globals';

const theme = createMuiTheme({
  direction: Globals.direction,
  palette: {
    primary: {
      // main orange color
      main: '#E24928',
    },
    secondary: {
      // background color of containers
      main: '#F4F4F4',
    },
    text: {
      // text color for description, gray colored text
      secondary: '#666666',
    },
    background: {
      // background color of sign in , sign up pages
      // other pages => primary
      secondary: '#F6F6F6',
    },
  },
  border: {
    borderColor: '#DADADA',
    borderWidth: '2px',
  },
  typography: {
    fontFamily: ['Tajawal', 'Harmattan', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      lg: 1280,
      md: 960,
      sm: 430,
      xl: 1920,
      xs: 0,
    },
  },
});

export default theme;
