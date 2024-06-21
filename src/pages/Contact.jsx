// import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, TextField, Typography } from "@mui/material";

import { useTheme } from "../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../Theme.jsx";
import "../styles/contact.css"

// Images
const bgImage = "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Contact() {
  const { isDarkMode } = useTheme();

  return (
    <Box component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item px={6}>
          <Box
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} method="post">
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h2" mb={1} sx={{fontFamily: isDarkMode ? darkTheme.fontFamily : lightTheme.fontFamily}}>
                      SAY HI.
                    </Typography>
                    <Typography variant="body1" color="text" mb={2} sx={{fontFamily: isDarkMode ? darkTheme.fontFamily : lightTheme.fontFamily}}>
                      DROP ME A MESSAGE
                    </Typography>
                  </Box>
                  <Box pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          variant="standard"
                          label="Subject"
                          placeholder="Message summary"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <Button
                        className="sendButton"
                        variant="outlined"
                        sx={{
                          borderRadius: 0,
                          color: isDarkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary,
                          borderColor: 'transparent',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            borderColor: isDarkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary,
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                className="contactImage"
                lg={5}
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
