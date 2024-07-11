import { useRef, useState} from "react"
import emailjs from '@emailjs/browser';

// @mui material components 
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Snackbar, TextField } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';



// Styles
import { useTheme } from "../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../Theme.jsx";
import "../styles/contact.css"


export default function Contact() {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [openAlert, setOpentAlert] = useState(false);

  const baseURL = "/portfoliodevjs";
  const contactImagePath = `${baseURL}/assets/images/contactImage/alex-perez-wEgR12N01Tk-unsplash_Contact.jpg`;

  const messageSent = () => {
    setOpentAlert(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpentAlert(false);
  };

  const SuccessAlert = () => {
    return (
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center"}}
        onClose={handleClose}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />} 
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
            Thank you, your message was successfully sent
        </Alert>
      </Snackbar>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xiqdyhi", "template_e78547h", form.current, "GumlAi18HzddL4L07")
      .then((result) => {
          if(result.text === "OK") {
            messageSent();
          }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item px={6}>
          <Box width="100%" mb={6} sx={{ overflow: "hidden" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} ref={form} onSubmit={sendEmail}>
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h2" mb={1} sx={{fontFamily: isDarkMode ? darkTheme.typography.fontFamily : lightTheme.typography.fontFamily}}>
                      SAY HI.
                    </Typography>
                    <Typography variant="body1" color="text" mb={2} sx={{fontFamily: isDarkMode ? darkTheme.typography.fontFamily : lightTheme.typography.fontFamily}}>
                      DROP ME A MESSAGE
                    </Typography>
                  </Box>
                  <Box pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          className="contactTextfield"
                          variant="standard"
                          label="My name is"
                          name="user_name"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={1}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          className="contactTextfield"
                          variant="standard"
                          label="Subject"
                          name="user_subject"
                          placeholder="Message summary"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={1}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={3}>
                        <TextField
                          className="contactTextfield"
                          variant="standard"
                          label="Your message"
                          name="user_message"
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
                        type="submit"
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
                  backgroundImage: `url(${contactImagePath})`,
                  backgroundSize: "cover",
                }}
                alt="Water Drop Photo by Alex Perez"
              >
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <SuccessAlert/>
    </Box>
  );
}
