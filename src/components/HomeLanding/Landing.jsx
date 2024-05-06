import { useEffect, useRef } from "react";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ElearningHeroIllustration from "../../utils/animations/elearning-hero-illustration";

import "./styles/Landing.css"
// typed-js
import Typed from 'typed.js';


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
      <Grid className="landingWrapper" container spacing={0}>
        <Grid className="landingWelcomeImage" md={12} lg={6}>
          <ElearningHeroIllustration />
        </Grid>
        <Grid className="landingWelcomeText" md={12} lg={6}>
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