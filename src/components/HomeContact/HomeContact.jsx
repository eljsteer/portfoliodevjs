import { Link } from "react-router-dom";
// ------ MaterialUi ------->>
import { Box, Button, Typography } from "@mui/material"
// ------- Custom Theming Imports ------>>
import profileImagePlaceholder from "/assets/images/homeContactImage/Placeholders/tim-marshall-wHgcJ4gVCQY-unsplash_Large10Placeholder.jpg"
import { useTheme } from "../../contexts/ThemeContext.jsx";
// ------ CSS StyleSheet ------>>
import "./styles/homeContact.css"

// ------ Responsive Placeholder Image Styling ------>>
const placeholderImgStyle = {
  backgroundImage: `url(${profileImagePlaceholder})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden"
}


// --------------------------------------------------------------------------------------

// --------------------------------------------->>
// ------ Home Page Contact Section ------->>
// --------------------------------------------->>
export default function HomeContact() {

  const { isDarkMode } = useTheme();

  return (
    <Box className="blur-load" style={placeholderImgStyle}>
      <Box className="banner">
        <Box className="gradientContainer">
        </Box>
        <Box className="textContainer">
          <Box className="contactText">
            <Typography className="contactTextLargeScreen">
              Let&apos;s connect and explore how we can collaborate. Reach out to learn more about me and discuss working together.
            </Typography>
            <Typography className="contactTextSmallScreen">
              Let&apos;s connect!
            </Typography>
          </Box>
          <Button 
            className={`ContactButton ${isDarkMode ? "darkTheme" : "lightTheme"}`}
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              color: "white",
              border: "2px solid white",
              borderRadius: 0,
              margin: "3svh"
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
}