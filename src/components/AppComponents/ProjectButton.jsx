import PropTypes from "prop-types";
import Button from '@mui/material/Button';

import { useTheme } from "../../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../../Theme.jsx"; 
import "./styles/projectButton.css"

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

export default function ProjectButton({text, href}) {
  const { isDarkMode } = useTheme();

  ProjectButton.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outlined" 
        disableRipple={false} 
        className={`ProjectButton ${isDarkMode ? "darkTheme" : "lightTheme"}`}
        sx={{
          color: isDarkMode ? darkThemeText.primary : lightThemeText.primary,
          border: `2px solid ${isDarkMode ? lightTheme.palette.primary.main : darkTheme.palette.primary.main}`,
          borderRadius: 0,
          fontSize: isDarkMode ? darkTheme.typography.body1 : lightTheme.typography.body1
        }}
          >
          {text}
      </Button>
    </a>
  );
}
