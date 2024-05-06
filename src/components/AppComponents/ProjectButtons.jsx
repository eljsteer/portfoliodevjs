import PropTypes from "prop-types";
import Button from '@mui/material/Button';

// import { useTheme } from "../../contexts/ThemeContext";
// import { darkTheme, lightTheme } from "../../styles/Theme"; 
// const { isDarkMode } = useTheme();

export default function ProjectButtons({text, href}) {

  ProjectButtons.propTypes = {
    text: PropTypes.element.isRequired,
    href: PropTypes.element.isRequired,
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="outlined">
        {text}
      </Button>
    </a>
  );
}
