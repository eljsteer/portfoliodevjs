import { Box, Typography } from "@mui/material"
import Button from "@mui/material/Button"

import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./styles/homeContact.css"

function HomeContact() {

  const { isDarkMode } = useTheme();

  return (
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
          href="/contact" 
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
  );
}

export default HomeContact;