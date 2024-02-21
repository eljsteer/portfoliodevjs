import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { IoLogoJavascript } from "react-icons/io";

import "./styles/Header.css"

import { useTheme } from '../../contexts/ThemeContext';

import { NavList } from "../../layouts/NavList"
import ToggleThemeButton from './toggleThemeButton';

function Header() {
  const { isDarkMode } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="AppBar" position="static" >
      <Container maxWidth="90%">
        <Toolbar disableGutters sx={{backgroundColor: "rgba(0,0,0,0)"}}>

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
              <MenuIcon />
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
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center"
                    sx={{ color: isDarkMode ? 'primary' : 'secondary'}}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
            to="/"
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <IoLogoJavascript style={{ fontSize:"30px" }} />
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
                color: isDarkMode ? 'primary' : 'secondary',
                textDecoration: "none",
                padding:"5px" 
              }} 
            >
                <IoLogoJavascript 
                  style={{ fontSize: "50px", padding:"5px" }}
                />
            </IconButton>
            <Box className="Navbar" sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              {NavList.map((navlink) => (
                  <Button
                    className="navLinksButton"
                    key={navlink.id}
                    href={navlink.url}
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      mx: { md: "5px", lg: "20px"},
                      fontSize: { md: "18px", lg: "20px"},
                      color: isDarkMode ? 'white' : 'black',
                      display: 'block' 
                    }}
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
    </AppBar>
  );
}
export default Header;