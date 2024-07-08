import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material"

import profileImagePlaceholder from "/assets/images/homeContactImage/Placeholders/tim-marshall-wHgcJ4gVCQY-unsplash_Large10Placeholder.jpg"
import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./styles/homeContact.css"

const placeholderImgStyle = {
  backgroundImage: `url(${profileImagePlaceholder})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden"
}

function HomeContact() {

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

export default HomeContact;