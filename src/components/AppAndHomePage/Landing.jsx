import { useEffect, useRef } from "react";

import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import "./styles/Landing.css"
// typed-js
import Typed from 'typed.js';
import ElearningHeroIllustration from "../../assets/animations/elearning-hero-illustration";

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
    <Box>
      <Grid className="landingWrapper" container spacing={2}>
        <Grid className="landingWelcomeImage" md={6} lg={6}>
          <ElearningHeroIllustration />
        </Grid>
        <Grid className="landingWelcomeText" xs={6} md={6}>
          <Typography variant="h2">Jason Steer</Typography>
          <Typography variant="h4">
            I love <span ref={typedJSRef} />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;