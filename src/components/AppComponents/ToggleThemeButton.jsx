import { useTheme } from "../../contexts/ThemeContext";
import IconButton from '@mui/material/IconButton';

import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import { darkTheme, lightTheme } from "../../Theme.jsx"; 

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
      <IconButton 
        sx={{display:"flex", height: "fit-content", alignItems:"center", justifyContent:"center", color: isDarkMode ? darkThemeText.primary  : lightThemeText.primary}}
        onClick={toggleTheme} >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </IconButton>
  );
};

export default ToggleThemeButton;
