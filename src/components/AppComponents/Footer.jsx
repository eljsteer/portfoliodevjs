import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// ------ MaterialUi Imports ------>>
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// ------ MUI Icons ------>>
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// ------ Navigation Particulars import ------>>
import { NavList } from '../../layouts/NavList';
// ------ Custom Theming Imports ------>>
import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../Theme.jsx"; 
// ------CSS StyleSheets
import "./styles/footer.css"


// ---------------------------------------------------------

// ---------------------------->>
// ------ Footer Section ------>>
// ---------------------------->>
export default function Footer({
  socials = [
    {
      id: 1,
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/devjs-jason-steer/",
    },
    { 
      id: 2,
      icon: <GitHubIcon />, 
      link: "https://github.com/eljsteer" 
    },
  ]
}) {
  const { isDarkMode } = useTheme();
  const { href } = NavList;
  const year = new Date().getFullYear();

  const darkThemeText = darkTheme.palette.text;
  const lightThemeText = lightTheme.palette.text;

  // ------ Socials Links ------>>
  const renderLinks = NavList.map((link) => (
    <Typography
      key={link.id}
      component={Link}
      to={link.url}
      variant="subtitle1"
      sx={{textDecoration:"none"}}
      color={ isDarkMode ? darkThemeText.primary : lightThemeText.primary }
    >
      {link.name}
    </Typography>
  ));
  // ------- Social Icons ------->>
  const renderSocials = socials.map((social) => (
    <Typography
      className="SocialsTypo"
      key={social.id}
      component="a"
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      color={isDarkMode ? darkThemeText.primary : lightThemeText.primary}
    >
      {social.icon}
    </Typography>
  ));

  return (
    <Box component="footer" py={6} className="stickyFooter">
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
            Copyright &copy; {year}, Created by{" "}
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
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

// ------ Component Proptypes ------>>
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};
