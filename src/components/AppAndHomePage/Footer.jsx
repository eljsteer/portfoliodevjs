
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavList } from '../../layouts/NavList';

// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer({ light }) {

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
      variant="body2"
      fontWeight="regular"
    >
      {link.name}
    </Typography>
  ));

  const renderSocials = socials.map((social) => (
    <Typography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      fontWeight="regular"
    >
      {social.icon}
    </Typography>
  ));

  return (
    <Box component="footer" py={6}>
      <Divider/>
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
          <Typography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} Created with ❤️ by{" "}
            <Typography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
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
  light: PropTypes.bool,
};


export default Footer;