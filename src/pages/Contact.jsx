// import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, TextField, Typography } from "@mui/material";

// Images
const bgImage = "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Contact() {
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
                    <Typography variant="h2" mb={1}>
                      Say Hi!
                    </Typography>
                    <Typography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
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
                          label="I'm looking for"
                          placeholder="What you love"
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
                      <Button color="info">
                        Send Message
                      </Button>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                    <Typography variant="h3" color="white" mb={1}>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </Typography>
                    <Box mt={3}>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
