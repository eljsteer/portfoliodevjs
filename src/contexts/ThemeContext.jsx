import { PropTypes } from 'prop-types';
// ------- React Hooks Imports ------>>
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
// ------- Theme Data Imports ------>>
import { lightTheme, darkTheme } from '../Theme';
// ------- MaterialUI Imports ------>>
import { 
  useMediaQuery, 
  ThemeProvider } from '@mui/material';


// ---------------------------------------------------------------------------------------


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// ------- Theme contect Provider Function ---->>
export const ThemeContextProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // To return the state of the Theme from local storage to use in page render
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : prefersDarkMode;
  });

  // Function to store or update the state of the theme in local storage, that will be available for latest rerender
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Function to change toggle between the Light/Dark theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Variable to store theme to pass into Themeprovider to access theme styles throughout app
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// ------- Component Proptypes ------>>
ThemeContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ThemeContextProvider;
