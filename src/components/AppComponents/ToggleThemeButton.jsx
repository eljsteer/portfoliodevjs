// ------- MateriaUi Imports ------>>
import IconButton from '@mui/material/IconButton';
// ------- React Icons Imports ------->>
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
// -------- Custom Theming Imports ------->>
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../Theme.jsx"; 


// -----------------------------------------------------------


// ----------------------------------------------------->>
// ------ Custom Button to Toggle Theme in Header ------>>
// ----------------------------------------------------->>
const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  let darkThemeText = darkTheme.palette.text
  let lightThemeText = lightTheme.palette.text

  return (
      <IconButton 
        sx={{display:"flex", height: "fit-content", alignItems:"center", justifyContent:"center", color: isDarkMode ? darkThemeText.primary  : lightThemeText.primary}}
        onClick={toggleTheme} >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </IconButton>
  );
};

export default ToggleThemeButton;
