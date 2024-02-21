import { useTheme } from "../../contexts/ThemeContext";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
      <IconButton 
        sx={{display:"flex", height: "fit-content", alignItems:"center", justifyContent:"center"}}
        onClick={toggleTheme} >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  );
};

export default ToggleThemeButton;
