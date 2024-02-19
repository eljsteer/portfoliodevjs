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

import JavascriptIcon from '@mui/icons-material/Javascript';

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
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{backgroundColor: "rgba(0,0,0,0)"}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"space-between" }}>
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
                    sx={{ color: isDarkMode ? 'primary' : 'secondary' }}
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
            <JavascriptIcon sx={{ fontSize: { xs: "75px", md: "100px" } }} />
          </IconButton>
          <ToggleThemeButton/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"space-between" }}>
            <IconButton 
              to="/"
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                color: isDarkMode ? 'primary' : 'secondary',
                textDecoration: "none",
              }} 
            >
                <JavascriptIcon 
                  sx={{ fontSize: "100px" }}
                />
            </IconButton>
            <Box className="Navbar" sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              {NavList.map((navlink) => (
                  <Button
                    key={navlink.id}
                    href={navlink.url}
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      my: 2, 
                      color: isDarkMode ? 'white' : 'black',
                      display: 'block' 
                    }}
                  >
                    {navlink.name}
                  </Button>
              ))}
            </Box>
            <ToggleThemeButton/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;