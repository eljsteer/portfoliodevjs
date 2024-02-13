import { useEffect, useRef } from "react";

import { Container } from "@mui/material";

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
    <Box >
      <Container className="landingContainer">
        <Typography variant="h2">Jason Steer</Typography>
        <Typography variant="h4">
          I am passionate about <span ref={typedJSRef} />
        </Typography>
      </Container>
    </Box>
  );
}

export default Landing;