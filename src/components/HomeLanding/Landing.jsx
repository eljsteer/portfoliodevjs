import { useEffect, useRef } from "react";
// ------- Typed Component ------->>
import Typed from 'typed.js';
// -------- MaterialUi Import
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
// ------ Component Import -------->>
import ElearningHeroIllustration from "../../utils/animations/elearning-hero-illustration";
// ------ CSS Stylesheet ------->>
import "./styles/Landing.css"


// --------------------------------------------------------------------------------------

// --------------------------------------------->>
// ------ Home Page Landing Seciont View ------->>
// --------------------------------------------->>
export default function Landing() {
  const typedJSRef = useRef(null);

  // ------- Function to setup Typed package, with different settings
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [ "web development", "creative problem-solving"],
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