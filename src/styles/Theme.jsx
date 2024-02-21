import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      secondary: ""
    },
    text: {
      primary: "#000",
      secondary: "#000"
    },
    background: {
      default: "#F3EDE2",
      paper: "#F3EDE2",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#59C3C3",
    },
    text: {
      primary: "#fff",
      secondary: "#fff"
    },
    background: {
      default: "#051024",
      paper: "#051024",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

export default {lightTheme, darkTheme}