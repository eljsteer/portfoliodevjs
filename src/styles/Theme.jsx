import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      // light: '#42a5f5',
      // dark: '#1565c0',
    },
    text: {
      primary: "#000",
      Secondary: "#000"
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
      // light: '#42a5f5',
      // dark: '#1565c0',
    },
    text: {
      primary: "#fff",
      Secondary: "#fff"
    },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
});

export default {lightTheme, darkTheme}