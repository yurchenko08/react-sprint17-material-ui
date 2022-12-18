<<<<<<< HEAD
import { createTheme } from '@mui/material/styles';
=======
import { createTheme } from '@mui/system';
>>>>>>> master

export const Colors = {
  primary: '#00adb5',
  secondary: '#00c7c0',
  success: '#4caf50',
  info: '#00d5ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#22414d',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  white: '#fff',
  black: '#000',
};

// TODO: define overrides object to create theme
const overrides = {
  components: {
    Footer: {
      styleOverrides: {
        root: {
          backgroundColor: 'yellow',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

// TODO: use overrides object to create theme
<<<<<<< HEAD
const theme = createTheme({

});
=======
const theme = createTheme(overrides);
>>>>>>> master

export { overrides };

export default theme;