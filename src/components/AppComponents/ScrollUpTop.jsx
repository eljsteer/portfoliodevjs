import PropTypes from "prop-types";
// ------ MaterialUi imports ------>>
import { Box } from "@mui/material";
import { Fab } from "@mui/material";
import { Fade } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// ------ Custom Theming imports ----->>
import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../Theme.jsx"; 
// ------ CSS Stylesheet ------>>
import "./styles/header.css"


// -------------------------------------------------------------------


// ------ Scroll to Top Component Element ------>>
function ScrollTop(props) {

  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

// ------ Event handler for Scroll up Click JSX function ------>>
  const handleScrollUpClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor",
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleScrollUpClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

// --------------------------------------------------------->>
// ------ Scroll to Top of Page Main Button Component ------>>
// --------------------------------------------------------->>
export default function ScropUpTop(scrollUpProps) {
  const { isDarkMode } = useTheme();
  return (
    <>
      <ScrollTop {...scrollUpProps}>
        <Fab 
          size="large" 
          aria-label="scroll back to top" 
          sx={{
            backgroundColor: isDarkMode ? darkTheme.palette.secondary.main : lightTheme.palette.secondary.main}}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  ) 
}