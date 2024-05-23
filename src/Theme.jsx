import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F3EDE2",
      light: "#FFFDEB",
      dark: "#DCD1C1",
      contrastText: "#020812"
    },
    secondary: {
      main: "#96D9D9",
      light: "#C3E9E9",
      dark: "#3BA5A5",
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
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h2: {
      fontSize: "4rem",
      '@media (max-width:800px)': {
        fontSize: "3rem",
      },
      '@media (max-width:600px)': {
        fontSize: "2.2rem",
      },
      '@media (max-width:400px)': {
        fontSize: "1.8rem",
      },
    },
    h3: {
      '@media (max-width:600px)': {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "2rem",
      '@media (max-width:800px)': {
        fontSize: "1.6rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1.4rem",
      },
      '@media (max-width:400px)': {
        fontSize: "1rem",
      },
    },
    h5: {
      fontSize: "1.6rem",
      '@media (max-width:800px)': {
        fontSize: "1.4rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontSize: "1.6rem",
      '@media (max-width:800px)': {
        fontSize: "1.2rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1rem",
      },
      '@media (max-width:400px)': {
        fontSize: "0.8rem",
      },
    },
    subtitle1: {
      fontSize: "1.3rem",
      '@media (max-width:1000px)': {
        fontSize: "1.2rem",
      },
      '@media (max-width:800px)': {
        fontSize: "1.1rem",
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: "1rem",
      },
    }
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
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
      contrastText: "#F3EDE2"
    },
    secondary: {
      main: "#5AC4C4",
      light: "#87D4D4",
      dark: "#3BA5A5",
      contrastText: "#F3EDE2"
    },
    tertiary: {
      main: "#84A98C",
      light: "#9FBCA5",
      dark: "#64906E",
      contrastText: "#F3EDE2"
    },
    accents: {
      main: "#E07A5F",
      light: "#F79C82",
      dark: "#BC4524",
      contrastText: "#F3EDE2"
    },
    text: {
      primary: "#fff",
      secondary: "#F3EDE2"
    },
    background: {
      default: "#020812",
      paper: "#020812",
      transparent: "#00000"
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h2: {
      fontSize: "4rem",
      '@media (max-width:800px)': {
        fontSize: "3rem",
      },
      '@media (max-width:600px)': {
        fontSize: "2.2rem",
      },
      '@media (max-width:400px)': {
        fontSize: "1.8rem",
      },
    },
    h3: {
      '@media (max-width:600px)': {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "2rem",
      '@media (max-width:800px)': {
        fontSize: "1.6rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1.4rem",
      },
      '@media (max-width:400px)': {
        fontSize: "1rem",
      },
    },
    h5: {
      fontSize: "1.6rem",
      '@media (max-width:800px)': {
        fontSize: "1.4rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontSize: "1.6rem",
      '@media (max-width:800px)': {
        fontSize: "1.2rem",
      },
      '@media (max-width:600px)': {
        fontSize: "1rem",
      },
      '@media (max-width:400px)': {
        fontSize: "0.8rem",
      },
    },
    subtitle1: {
      fontSize: "1.3rem",
      '@media (max-width:1000px)': {
        fontSize: "1.2rem",
      },
      '@media (max-width:800px)': {
        fontSize: "1.1rem",
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: "1rem",
      },
    }
  },
});

export default {lightTheme, darkTheme}