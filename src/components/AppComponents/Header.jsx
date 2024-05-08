import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { IoLogoJavascript } from "react-icons/io";

import "../../styles/header.scss"

import { useTheme } from '../../contexts/ThemeContext';

import { NavList } from "../../layouts/NavList"
import ToggleThemeButton from './toggleThemeButton';

import { darkTheme, lightTheme } from "../../Theme.jsx"; 
import { Link } from 'react-router-dom';

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

function Header() {
  const { isDarkMode } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Custom style for navLinksButton
  const navLinksButtonStyle = {
    mx: { md: "5px", lg: "20px"},
    fontSize: { md: "18px", lg: "20px"},
    color: isDarkMode ? darkThemeText.primary : lightThemeText.primary,
    display: 'block',
    position: 'relative',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease-in-out',
    '&:hover::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '2px',
      borderBottom: `2px solid ${isDarkMode ? lightTheme.palette.primary.main : darkTheme.palette.primary.dark}`,
      transform: 'scaleX(1)',
      transformOrigin: '0 50%',
    },
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box id="back-to-top-anchor" className="AppBar" position="static" sx={{display:"flex", alignItems:"center", height:"80px", backgroundColor:"#00000" }}>
      <Container>
        <Toolbar>
  {/* <<------ Tablet/Mobile Smaller Screens ----->>*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"space-between", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon 
                sx={{ color: isDarkMode ? darkThemeText.primary : lightThemeText.primary }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavList.map((page) => (
                <Link
                  key={page.id}
                  to={`${page.url}`}
                  style={{textDecoration:"none"}}
                >
                  <MenuItem 
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ color: isDarkMode ? darkThemeText.primary  : lightThemeText.primary, textAlign: "center" }}
                  >
                    {page.name}
                  </MenuItem>
                </Link>
              ))};
            </Menu>
            <IconButton
              href="/"
              sx={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <IoLogoJavascript style={{ fontSize:"30px", color: isDarkMode ? darkThemeText.primary  : lightThemeText.primary  }} />
            </IconButton>
            <ToggleThemeButton/>
          </Box>

  {/* <<------ Monitor Larger Screens ----->>*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"space-between", alignItems:"center" }}>
            <IconButton 
              href="/"
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                height:"fit-content",
                textDecoration: "none",
                padding:"5px" 
              }} 
            >
              <IoLogoJavascript 
                style={{ 
                  fontSize: "50px", 
                  padding:"5px",
                  color: isDarkMode ? darkThemeText.primary  : lightThemeText.primary
                }}
              />
            </IconButton>
            <Box className="Navbar" sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              {NavList.map((navlink) => (
                  <Button
                    className="navLinksButton"
                    key={navlink.id}
                    href={navlink.url}
                    onClick={handleCloseNavMenu}
                    sx={navLinksButtonStyle}
                  >
                    {navlink.name}
                  </Button>
              ))}
            </Box>
            <Box sx={{ height:{ md:"60px" }, width:{ md:"60px" }, padding:{ md: "5px"}, display:"flex", alignItems: "center",justifyContent:"center"}}>
              <ToggleThemeButton/>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default Header;