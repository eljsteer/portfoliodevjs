import { useEffect, useRef } from "react";

import { Container } from "@mui/material";
import "./styles/Landing.css"
// typed-js
import Typed from 'typed.js';

// @mui material components
import { Box } from "@mui/material";

import { Typography } from "@mui/material";

function Landing() {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [ "Web development", "Creative Problem-Solving"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 100,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

  return (
    <Box className="landingContainer">
      <Container >
        <Box className="landingWelcomeText">
          <Typography variant="h2">Jason Steer</Typography>
          <Typography variant="h4">
            I love <span ref={typedJSRef} />
          </Typography>
        </Box>
        
      </Container>
    </Box>
  );
}

export default Landing;