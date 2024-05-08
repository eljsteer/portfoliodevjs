import PropTypes from "prop-types";
import Button from '@mui/material/Button';

import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../Theme.jsx"; 
import "../../styles/projectbutton.scss"

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

export default function ProjectButtons({text, href}) {
  const { isDarkMode } = useTheme();

  ProjectButtons.propTypes = {
    text: PropTypes.element.isRequired,
    href: PropTypes.element.isRequired,
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outlined" 
        className="ProjectButton"
        sx={{
          color: isDarkMode ? darkThemeText.primary : lightThemeText.primary,
          border: `2px solid ${isDarkMode ? lightTheme.palette.primary.main : darkTheme.palette.primary.dark}`,
        }}
          >
          {text}
      </Button>
    </a>
  );
}
