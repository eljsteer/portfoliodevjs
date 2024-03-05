import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F3EDE2",
      light: "#FFFDEB",
      dark: "#EDE4D4",
      contrastText: "#020812"
    },
    secondary: {
      main: "#96D9D9",
      light: "#C3E9E9",
      dark: "#1A535C",
      contrastText: "#020812"
    },
    tertiary: {
      main: "#83781B",
      light: "#D9CA45",
      dark: "#776D18",
      contrastText: "#020812"
    },
    accents: {
      main: "#F1A208",
      light: "#F9C762",
      dark: "#C68606",
      contrastText: "#020812"
    },
    text: {
      primary: "#020812",
      secondary: "#020812"
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
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      main: "#041025",
      light: "#082049",
      dark: "#020812",
      contrastText: "#020812"
    },
    secondary: {
      main: "#5AC4C4",
      light: "#87D4D4",
      dark: "#3BA5A5",
      contrastText: "#020812"
    },
    tertiary: {
      main: "#84A98C",
      light: "#9FBCA5",
      dark: "#64906E",
      contrastText: "#020812"
    },
    accents: {
      main: "#E07A5F",
      light: "#F79C82",
      dark: "#BC4524",
      contrastText: "#020812"
    },
    text: {
      primary: "#fff",
      secondary: "#020812"
    },
    background: {
      default: "#020812",
      paper: "#020812",
      transparent: "#00000"
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