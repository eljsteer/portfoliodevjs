import { Box, Typography } from "@mui/material"
import Button from "@mui/material/Button"

import "./styles/HomeContact.css"

function HomeContact() {
  return (
    <Box className="banner">
      <Box className="gradientContainer">
      </Box>
      <Box className="textContainer">
        <Box className="contactText">
          <Typography>
            Let&apos;s connect and explore how we can collaborate. Reach out to learn more about me and discuss working together!
          </Typography>
        </Box>
        <Button className="contactButton" href="/contact" variant="outlined">Contact Me</Button>
      </Box>
    </Box>
  );
}

export default HomeContact;