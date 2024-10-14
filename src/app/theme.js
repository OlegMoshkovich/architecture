import { createTheme } from '@mui/material/styles';

const simpleTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // A standard blue color
    },
    secondary: {
      main: '#FFFFFF', // A standard pink color
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // White paper background
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#555555', // Grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font family
    fontSize: 14, // Base font size
  },
  spacing: 8, // Default spacing unit
});

export default simpleTheme;
