// ThemeContext.jsx

import { PropTypes } from 'prop-types';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from '../styles/Theme';
import { useMediaQuery } from '@mui/material';


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : prefersDarkMode;
  });

  useEffect(() => {
    // Save the current theme preference to localStorage whenever it changes
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(() => (
    isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children(theme)}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ThemeContextProvider;
