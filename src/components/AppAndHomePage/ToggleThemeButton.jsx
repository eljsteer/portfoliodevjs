import { useTheme } from "../../contexts/ThemeContext";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from '@mui/material';

const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{display:"flex", width: { md:"100px", justifyContent:"center"}}}
    >
      <IconButton onClick={toggleTheme} color="inherit">
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ToggleThemeButton;
