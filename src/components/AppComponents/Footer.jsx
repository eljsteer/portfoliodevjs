import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavList } from '../../layouts/NavList';

// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../styles/Theme"; 

import "./styles/Footer.css"

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

function Footer() {

const { isDarkMode } = useTheme();

  const socials = [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/devjs-jason-steer/",
    },
    { 
      icon: <GitHubIcon />, 
      link: "https://github.com/eljsteer" 
    },
  ];

  const { href } = NavList;

  const year = new Date().getFullYear();

  const renderLinks = NavList.map((link) => (
    <Typography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body1"
      sx={{textDecoration:"none"}}
      color={ isDarkMode ? darkThemeText.primary : lightThemeText.primary }
    >
      {link.name}
    </Typography>
  ));

  const renderSocials = socials.map((social) => (
    <Typography
      className="SocialsTypo"
      key={social.link}
      component={Link}
      href={social.link}
      color={ isDarkMode ? darkThemeText.primary : lightThemeText.primary }
    >
      {social.icon}
    </Typography>
  ));

  return (
    <Box component="footer" py={6}>
      <Divider sx={{margin:"5vh 5%"}}/>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <Typography variant="body1" color={ isDarkMode ? darkThemeText.primary : lightThemeText.primary}>
            Copyright &copy; {year} Created with ❤️ by{" "}
            <Typography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body1"
              sx={{textDecoration:"none"}}
              color={ isDarkMode ? darkThemeText.primary : lightThemeText.primary}
            >
              Jason Steer
            </Typography>
            .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

// Setting default values for the props of CenteredFooter
Footer.defaultProps = {
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/devjs-jason-steer/",
    },
    { 
      icon: <GitHubIcon />, 
      link: "https://github.com/eljsteer" 
    },
  ],
};

// Typechecking props for the CenteredFooter
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};


export default Footer;