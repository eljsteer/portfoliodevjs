import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
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
});

export const darkTheme = createTheme({
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
});

export default {lightTheme, darkTheme}